import React, { useEffect, useState } from "react";
import axios from "axios";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5001/api/reviews").then(res => setReviews(res.data));
  }, []);

  return (
    <div className="reviews-container">
      <h2 className="reviews-title">Reviews</h2>
      <div className="reviews-list">
        {reviews.map(r => (
          <div key={r._id} className="container">
            <h3 className="review-user">{r.user}</h3>
            <p className="review-text">{r.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
