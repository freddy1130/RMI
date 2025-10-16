import express from "express";
const router = express.Router();

// Mock reviews
const reviews = [
  { _id: "1", user: "Alice", text: "Great product!" },
  { _id: "2", user: "Bob", text: "Not bad." }
];

// Route to handle GET requests for reviews
router.get("/", (req, res) => {
  console.log("GET /api/reviews called"); // Debugging log
  res.json(reviews);
});

export default router;
