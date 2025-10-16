import express from "express";
const router = express.Router();

// Mock database
let users = [];

// Signup
router.post("/signup", (req, res) => {
  const { name, email, password } = req.body;
  const exists = users.find(u => u.email === email);
  if (exists) return res.status(400).json({ message: "User already exists" });

  const newUser = { _id: String(users.length + 1), name, email, password };
  users.push(newUser);
  res.json({ message: "User created successfully", user: newUser });
});

// Login
router.post("/login", (req, res) => {
  const { email, password } = req.body;
  const user = users.find(u => u.email === email && u.password === password);
  if (!user) return res.status(401).json({ message: "Invalid credentials" });

  res.json({ message: "Login successful", user });
});

export default router;
