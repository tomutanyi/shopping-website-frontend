// components/Allreviews/AllReviews.js
import React, { useState, useEffect } from 'react';
import { FaStar } from 'react-icons/fa';

const AllReviews = () => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const reviewsPerPage = 10;

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

  // Calculate current reviews based on pagination
  const indexOfLastReview = currentPage * reviewsPerPage;
  const indexOfFirstReview = indexOfLastReview - reviewsPerPage;
  const currentReviews = reviews.slice(indexOfFirstReview, indexOfLastReview);

  const renderStarRating = (rating) => {
    return (
      <div className="flex items-center">
        {Array.from({ length: rating }, (_, index) => (
          <FaStar key={index} className="text-yellow-500" />
        ))}
      </div>
    );
  };

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const pageNumbers = Array.from({ length: Math.ceil(reviews.length / reviewsPerPage) }, (_, index) => index + 1);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div className="all-reviews grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {currentReviews.map((review) => (
        <div key={review.id} className="bg-white p-4 rounded-md shadow-md">
          <p className="text-lg font-semibold">{review.username}</p>
          {renderStarRating(review.star_rating)}
          <p>{review.description}</p>
        </div>
      ))}

      <div className="pagination flex justify-center mt-4">
        {pageNumbers.map((number) => (
          <span
            key={number}
            className={`px-3 py-2 mx-1 cursor-pointer ${
              currentPage === number ? 'bg-blue-500 text-white' : 'bg-gray-300 text-gray-700'
            }`}
            onClick={() => paginate(number)}
          >
            {number}
          </span>
        ))}
      </div>
    </div>
  );
};

export default AllReviews;
