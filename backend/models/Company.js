import mongoose from "mongoose";

const companySchema = new mongoose.Schema({
  name: { type: String, required: true },
  industry: { type: String, required: true },
  averageRating: { type: Number, default: 0 },
  totalReviews: { type: Number, default: 0 },
  location: { type: String },
  size: { type: String } // e.g. "1000-5000 employees"
});

const Company = mongoose.model("Company", companySchema);
export default Company;
