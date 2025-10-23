import express from "express";
import Company from "../models/Company.js";

const router = express.Router();

// POST /api/companies
router.post("/", async (req, res) => {
  try {
    const { name, industry, rating, reviewCount, location, size } = req.body;

    if (!name) {
      return res.status(400).json({ message: "Company name is required" });
    }

    // Check if already exists
    const existing = await Company.findOne({ name });
    if (existing) {
      return res.status(400).json({ message: "Company already exists" });
    }

    const company = await Company.create({
      name,
      industry,
      rating: rating || 0,
      reviewCount: reviewCount || 0,
      location,
      size,
    });

    res.status(201).json(company);
  } catch (error) {
    console.error("Error creating company:", error);
    res.status(500).json({ message: "Server error" });
  }
});

export default router;
