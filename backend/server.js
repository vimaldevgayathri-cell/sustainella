const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 5000;

// Middlewares
app.use(cors());
app.use(express.json());

// Temporary storage (in memory)
let users = [];

// 1️⃣ Health Check
app.get("/", (req, res) => {
  res.send("My backend is working 🌿");
});

// 2️⃣ Signup
app.post("/signup", (req, res) => {
  const { name, email, password } = req.body;

  const newUser = { name, email, password };
  users.push(newUser);

  res.json({ message: "User registered successfully", user: newUser });
});

// 3️⃣ Login
app.post("/login", (req, res) => {
  const { email, password } = req.body;

  const user = users.find(
    u => u.email === email && u.password === password
  );

  if (user) {
    res.json({ message: "Login successful" });
  } else {
    res.status(401).json({ message: "Invalid credentials" });
  }
});

// 4️⃣ Explore
app.get("/explore", (req, res) => {
  const brands = [
    { name: "EcoWear", category: "Sustainable Fashion" },
    { name: "GreenGlow", category: "Organic Cosmetics" },
    { name: "PureCycle", category: "Period Care" }
  ];

  res.json(brands);
});

app.listen(PORT, () => {
  console.log("Server running on http://localhost:5000");
});