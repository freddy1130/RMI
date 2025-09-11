import express from "express";
const router = express.Router();

// Mock users
const users = [
  { _id: "1", name: "Alice", email: "alice@example.com" },
  { _id: "2", name: "Bob", email: "bob@example.com" },
];

// GET all users
router.get("/", (req, res) => {
  res.json(users);
});

// CREATE a user (optional)
router.post("/", (req, res) => {
  const { name, email } = req.body;
  const newUser = { _id: String(users.length + 1), name, email };
  users.push(newUser);
  res.json(newUser);
});

export default router;
