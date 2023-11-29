import React, { useState, useEffect } from 'react';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    // Fetch reviews data from your backend API
    fetch('http://backend-api-url/reviews')
      .then(response => response.json())
      .then(data => setReviews(data))
      .catch(error => console.error('Error fetching reviews:', error));
  }, []);

  return (
    <div>
      <h2>Reviews</h2>
      <div className="reviews-container">
        {reviews.map(review => (
          <div key={review.id} className="review-card">
            <h3>Reviews</h3>
            <p>Description: {review.description}</p>
            <p>User: {review.user_id}</p>
            <p>Rating: {review.star_rating}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
