import React, { useState } from "react";
import axios from "axios";
import "../css/ReviewForm.css"; // We'll add basic styling below

const ReviewForm = () => {
  const [form, setForm] = useState({
    companyName: "",
    position: "",
    interviewType: "",
    interviewDate: "",
    duration: "",
    overallRating: 3,
    interviewExperience: 3,
    communication: 3,
    processRating: 3,
    difficulty: 3,
    outcome: "",
    reviewText: "",
    pros: "",
    cons: "",
    advice: "",
    salaryDiscussed: false,
    anonymous: false,
    name: "",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm({
      ...form,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/api/reviews", form);
      alert("Review submitted!");
      setForm({
        companyName: "",
        position: "",
        interviewType: "",
        interviewDate: "",
        duration: "",
        overallRating: 3,
        interviewExperience: 3,
        communication: 3,
        processRating: 3,
        difficulty: 3,
        outcome: "",
        reviewText: "",
        pros: "",
        cons: "",
        advice: "",
        salaryDiscussed: false,
        anonymous: false,
        name: "",
      });
    } catch (err) {
      console.error(err);
      alert("Error submitting review");
    }
  };

  return (
    <div className="review-form-container">
      <h2>Write an Interview Review</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-row">
          <input
            type="text"
            name="companyName"
            placeholder="Company Name *"
            value={form.companyName}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="position"
            placeholder="Position *"
            value={form.position}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-row">
              <select
                name="interviewType"
                placeholder="Interview Type *"
                value={form.interviewType}
                onChange={handleChange}
              >
                <option value="" disabled>
                  Select an interview type
                </option>
                <option value="Video">Video</option>
                <option value="Phone">Phone</option>
                <option value="Onsite">Onsite</option>
              </select>
        
          <input
            type="date"
            name="interviewDate"
            placeholder="Interview Date *"
            value={form.interviewDate}
            onChange={handleChange}
          />
          <input
            type="text"
            name="duration"
            placeholder="Duration *"
            value={form.duration}
            onChange={handleChange}
          />
        </div>

        <h3>Rate Your Experience</h3>
        <div className="form-row ratings">
        <div className="form-group">
          <label htmlFor="overallRating">Overall Rating</label>
          <input
            id="overallRating"
            type="number"
            name="overallRating"
            min="1"
            max="5"
            value={form.overallRating}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="interviewExperience">Interview Experience</label>
          <input
            id="interviewExperience"
            type="number"
            name="interviewExperience"
            min="1"
            max="5"
            value={form.interviewExperience}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="communication">Communication</label>
          <input
            id="communication"
            type="number"
            name="communication"
            min="1"
            max="5"
            value={form.communication}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="processRating">Process Rating</label>
          <input
            id="processRating"
            type="number"
            name="processRating"
            min="1"
            max="5"
            value={form.processRating}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="difficulty">Difficulty (1 = Easy, 5 = Hard)</label>
          <input
            id="difficulty"
            type="number"
            name="difficulty"
            min="1"
            max="5"
            value={form.difficulty}
            onChange={handleChange}
          />
        </div>
      </div>
        <div>
          <label htmlFor="outcome">Outcome</label>
          </div>
        <div className="form-row ratings">
          
          <select
            id="outcome"
            name="outcome"
            value={form.outcome}
            onChange={handleChange}
          >
            <option value="Still Pending">Still Pending</option>
            <option value="Accepted">Accepted</option>
            <option value="Rejected">Rejected</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="reviewText">Describe Your Interview Experience *</label>
          <textarea
            id="reviewText"
            name="reviewText"
            placeholder="Describe your interview experience..."
            value={form.reviewText}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="pros">Pros</label>
          <input
            id="pros"
            type="text"
            name="pros"
            placeholder="Pros"
            value={form.pros}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="cons">Cons</label>
          <input
            id="cons"
            type="text"
            name="cons"
            placeholder="Cons"
            value={form.cons}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="advice">Advice for Future Candidates</label>
          <input
            id="advice"
            type="text"
            name="advice"
            placeholder="Advice for Future Candidates"
            value={form.advice}
            onChange={handleChange}
          />
        </div>

        <div className="checkbox-row">
          <div className="form-group">
            <label>
              <input
                type="checkbox"
                name="salaryDiscussed"
                checked={form.salaryDiscussed}
                onChange={handleChange}
              />{" "}
              Salary was discussed
            </label>
          </div>
          <div className="form-group">
            <label>
              <input
                type="checkbox"
                name="anonymous"
                checked={form.anonymous}
                onChange={handleChange}
              />{" "}
              Post anonymously
            </label>
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="name">Your Name (will be public)</label>
          <input
            id="name"
            type="text"
            name="name"
            placeholder="Your name (will be public)"
            value={form.name}
            onChange={handleChange}
          />
        </div>

        <button type="submit" className="btn btn-primary">Submit Review</button>
      </form>
    </div>
  );
};

export default ReviewForm;
