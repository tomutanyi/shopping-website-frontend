// Reviews.js

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Rate } from 'antd';
import './Reviews.css';

const Reviews = () => {
  const [setReviews] = useState([]);
  const [filteredReviews, setFilteredReviews] = useState([]);
  const [sortBy, setSortBy] = useState('topToLow');

  useEffect(() => {
    // Fetch reviews from the backend API
    fetch('https://shopping-database32.onrender.com/reviews')
      .then(response => response.json())
      .then(data => {
        setReviews(data);
        setFilteredReviews(sortReviews(data, sortBy));
      })
      .catch(error => console.error('Error fetching reviews:', error));
  }, [sortBy]);

  const sortReviews = (reviews, order) => {
    return reviews.slice().sort((a, b) => {
      const comparison = order === 'topToLow' ? b.star_rating - a.star_rating : a.star_rating - b.star_rating;
      return comparison !== 0 ? comparison : b.id - a.id;
    });
  };

  const handleSortChange = value => {
    setSortBy(value);
  };

  return (
    <div className="reviews-container">
      <h2>Customer Reviews</h2>
      <div className="sort-container">
        <span>Sort By: </span>
        <select value={sortBy} onChange={e => handleSortChange(e.target.value)}>
          <option value="topToLow">Top to Low</option>
          <option value="lowToTop">Low to Top</option>
        </select>
      </div>
      {filteredReviews.map(review => (
        <motion.div
          key={review.id}
          className="review-card"
          whileHover={{ borderColor: 'red' }}
        >
          <div className="review-header">
            <motion.div className="user-profile" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
              User: {review.user_id}
            </motion.div>
            <motion.div className="review-comment" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
              {review.description}
            </motion.div>
            <motion.div className="star-rating" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
              <Rate allowHalf defaultValue={review.star_rating} disabled />
            </motion.div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default Reviews;
