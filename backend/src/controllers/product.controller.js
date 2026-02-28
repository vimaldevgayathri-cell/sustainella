const Product = require("../models/Product");

exports.listProducts = async (req, res, next) => {
  try {
    const products = await Product.find({ isActive: true }).sort({ createdAt: -1 });
    res.json({ success: true, count: products.length, products });
  } catch (err) {
    next(err);
  }
};

exports.getProduct = async (req, res, next) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product || !product.isActive) {
      return res.status(404).json({ success: false, message: "Product not found" });
    }
    res.json({ success: true, product });
  } catch (err) {
    next(err);
  }
};

exports.createProduct = async (req, res, next) => {
  try {
    const { title, price, imageUrl, description, category, stock } = req.body;

    if (!title || price == null || !imageUrl) {
      return res.status(400).json({ success: false, message: "title, price, imageUrl required" });
    }

    const product = await Product.create({
      title,
      price,
      imageUrl,
      description: description || "",
      category: category || "general",
      stock: stock ?? 0,
    });

    res.status(201).json({ success: true, product });
  } catch (err) {
    next(err);
  }
};

exports.updateProduct = async (req, res, next) => {
  try {
    const product = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!product) return res.status(404).json({ success: false, message: "Product not found" });
    res.json({ success: true, product });
  } catch (err) {
    next(err);
  }
};

exports.deleteProduct = async (req, res, next) => {
  try {
    // soft delete
    const product = await Product.findByIdAndUpdate(req.params.id, { isActive: false }, { new: true });
    if (!product) return res.status(404).json({ success: false, message: "Product not found" });
    res.json({ success: true, message: "Deleted", product });
  } catch (err) {
    next(err);
  }
};