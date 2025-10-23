import express from "express";
const router = express.Router();
import Company from "../models/Company.js"; // Ensure you import your models correctly
import Review from "../models/Review.js";  // Ensure you import your models correctly

router.post("/", async (req, res) => {
  console.log(req.body);
  try {
    const {
      companyName,
      position,
      interviewType,
      interviewDate,     // ✅ from form
      duration,
      overallRating,     // ✅ from form
      interviewExperience,
      communication,
      processRating,
      difficulty,
      outcome,
      reviewText,
      pros,
      cons,
      advice,
      salaryDiscussed,
      anonymous,
      name,
    } = req.body;

    if (!companyName || !position || !overallRating) {
      return res.status(400).json({ message: "Company name, position, and rating are required" });
    }

    // Find the company by name
    const company = await Company.findOne({ name: companyName });
    if (!company) {
      return res.status(404).json({ message: "Company not found" });
    }

    // Create the review
    const review = await Review.create({
      company: company._id,
      position,
      interviewType,
      interviewDate,
      duration,
      rating: overallRating,            // ✅ mapped correctly
      interviewExperience,
      communication,
      processRating,
      difficulty,
      outcome,
      reviewText,
      pros,
      cons,
      advice,
      salaryDiscussed,
      anonymous,
      name,
    });

    // OPTIONAL: Update company rating/review count
    company.reviewCount += 1;
    company.rating = ((company.rating * (company.reviewCount - 1)) + overallRating) / company.reviewCount;
    await company.save();

    res.status(201).json(review);

  } catch (error) {
    console.error("Error creating review:", error);
    res.status(500).json({ message: "Server Error" });
  }
});

export default router;
