// components/Allreviews/AllReviews.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const AllReviews = () => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await fetch('https://shopping-database32.onrender.com/reviews');
        if (response.ok) {
          const data = await response.json();
          setReviews(data);
        } else {
          setError('Error fetching reviews');
        }
      } catch (error) {
        setError('Error fetching reviews');
      } finally {
        setLoading(false);
      }
    };

    fetchReviews();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div className="all-reviews">
      <h2>All Reviews</h2>
      <ul>
        {reviews.map((review) => (
          <li key={review.id}>
            <p>User: {review.username}</p>
            <p>Rating: {review.star_rating}</p>
            <p>Comment: {review.description}</p>
            {/* Add more details as needed */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AllReviews;
