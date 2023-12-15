// components/Allreviews/AllReviews.js
import React, { useState, useEffect } from 'react';
import { FaStar } from 'react-icons/fa';
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

  const renderStarRating = (rating) => {
    return (
      <div className="flex items-center">
        {Array.from({ length: rating }, (_, index) => (
          <FaStar key={index} className="text-yellow-500" />
        ))}
      </div>
    );
  };

  return (
    <div className="all-reviews grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {reviews.map((review) => (
        <div key={review.id} className="bg-white p-4 rounded-md shadow-md">
          <p className="text-lg font-semibold">{review.username}</p>
          {renderStarRating(review.star_rating)}
          <p>{review.description}</p>
        </div>
      ))}
    </div>
  );
};

export default AllReviews;
