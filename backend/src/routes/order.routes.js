const router = require("express").Router();
const auth = require("../middleware/auth");
const admin = require("../middleware/admin");

const {
  createOrder,
  myOrders,
  allOrders,
  updateOrderStatus,
} = require("../controllers/order.controller");

// user
router.post("/", auth, createOrder);
router.get("/my", auth, myOrders);

// admin
router.get("/", auth, admin, allOrders);
router.put("/:id/status", auth, admin, updateOrderStatus);

module.exports = router;
