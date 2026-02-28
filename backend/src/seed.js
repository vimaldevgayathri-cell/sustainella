require("dotenv").config();
const mongoose = require("mongoose");
const Product = require("./models/Product");

const MONGO_URI = process.env.MONGO_URI;

const seedProducts = [
  {
    title: "Eco T-Shirt",
    price: 499,
    imageUrl: "https://picsum.photos/seed/tshirt/600/600",
    description: "100% organic cotton eco-friendly t-shirt",
    category: "clothing",
    stock: 50,
  },
  {
    title: "Reusable Water Bottle",
    price: 299,
    imageUrl: "https://picsum.photos/seed/bottle/600/600",
    description: "Stainless steel reusable bottle",
    category: "accessories",
    stock: 80,
  },
  {
    title: "Bamboo Toothbrush",
    price: 99,
    imageUrl: "https://picsum.photos/seed/toothbrush/600/600",
    description: "Biodegradable bamboo toothbrush",
    category: "personal-care",
    stock: 200,
  },
];

(async () => {
  try {
    await mongoose.connect(MONGO_URI);
    console.log("DB connected");

    await Product.deleteMany({});
    console.log("Old products cleared");

    const created = await Product.insertMany(seedProducts);
    console.log(`Seeded ${created.length} products`);

    process.exit(0);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
})();