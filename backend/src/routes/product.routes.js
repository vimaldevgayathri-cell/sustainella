const router = require("express").Router();

const auth = require("../middleware/auth");
const admin = require("../middleware/admin");
const {
  listProducts,
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct,
} = require("../controllers/product.controller");

// public
router.get("/", listProducts);
router.get("/:id", getProduct);

// admin protected
router.post("/", auth, admin, createProduct);
router.put("/:id", auth, admin, updateProduct);
router.delete("/:id", auth, admin, deleteProduct);

module.exports = router;