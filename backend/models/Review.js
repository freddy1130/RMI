import mongoose from "mongoose";

const reviewSchema = new mongoose.Schema({
  position: { type: String, required: true }, // Senior Software Engineer
  company: { type: mongoose.Schema.Types.ObjectId, ref: "Company", required: true },

  rating: { type: Number, required: true }, // 4.0
  interviewType: { type: String, enum: ["Video", "Phone", "Onsite", "Other"] },
  difficulty: { type: String, enum: ["Easy", "Medium", "Hard"], required: true },
  outcome: { type: String, enum: ["offer", "rejected", "pending"], required: true },

  // Category ratings (optional if you want separate)
  experienceRating: { type: Number, default: 0 },
  communicationRating: { type: Number, default: 0 },
  processRating: { type: Number, default: 0 },
  difficultyRating: { type: Number, default: 0 },

  reviewText: { type: String, required: true },
  pros: { type: String },
  cons: { type: String },
  advice: { type: String },

  candidateName: { type: String },
  date: { type: Date, default: Date.now },
  duration: { type: String }, // e.g. "4 hours"

  salaryRange: { type: String } // e.g. "$140k - $160k"
});

const Review = mongoose.model("Review", reviewSchema);
export default Review;
