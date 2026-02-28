const Order = require("../models/Order");
const Product = require("../models/Product");

// POST /api/orders  (user)
exports.createOrder = async (req, res, next) => {
  try {
    const { items, shippingAddress } = req.body;

    if (!Array.isArray(items) || items.length === 0) {
      return res.status(400).json({ success: false, message: "items array required" });
    }

    // Fetch product details to prevent frontend tampering
    const productIds = items.map((i) => i.productId);
    const products = await Product.find({ _id: { $in: productIds }, isActive: true });

    const productMap = new Map(products.map((p) => [String(p._id), p]));

    const orderItems = [];
    let total = 0;

    for (const i of items) {
      const p = productMap.get(String(i.productId));
      if (!p) {
        return res.status(400).json({ success: false, message: `Invalid product: ${i.productId}` });
      }
      const qty = Number(i.qty || 1);
      if (qty < 1) {
        return res.status(400).json({ success: false, message: "qty must be >= 1" });
      }

      orderItems.push({
        product: p._id,
        title: p.title,
        price: p.price,
        qty,
        imageUrl: p.imageUrl,
      });

      total += p.price * qty;
    }

    const order = await Order.create({
      user: req.user.id,
      items: orderItems,
      totalAmount: total,
      shippingAddress: shippingAddress || {},
    });

    res.status(201).json({ success: true, order });
  } catch (err) {
    next(err);
  }
};

// GET /api/orders/my  (user)
exports.myOrders = async (req, res, next) => {
  try {
    const orders = await Order.find({ user: req.user.id }).sort({ createdAt: -1 });
    res.json({ success: true, count: orders.length, orders });
  } catch (err) {
    next(err);
  }
};

// GET /api/orders  (admin)
exports.allOrders = async (req, res, next) => {
  try {
    const orders = await Order.find({})
      .populate("user", "name email role")
      .sort({ createdAt: -1 });

    res.json({ success: true, count: orders.length, orders });
  } catch (err) {
    next(err);
  }
};
// PUT /api/orders/:id/status  (admin)
exports.updateOrderStatus = async (req, res, next) => {
  try {
    const { status } = req.body;

    const allowed = ["pending", "paid", "shipped", "cancelled"];
    if (!allowed.includes(status)) {
      return res.status(400).json({ success: false, message: "Invalid status" });
    }

    const order = await Order.findByIdAndUpdate(
      req.params.id,
      { status },
      { new: true }
    );

    if (!order) {
      return res.status(404).json({ success: false, message: "Order not found" });
    }

    res.json({ success: true, order });
  } catch (err) {
    next(err);
  }
};