import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { CSSPlugin } from 'gsap/CSSPlugin';
import './Reviews.css';

gsap.registerPlugin(CSSPlugin);

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const reviewsContainerRef = useRef(null);

  useEffect(() => {
    fetch('http://localhost:5556/reviews')
      .then(response => response.json())
      .then(data => {
        console.log('Received data:', data);
        setReviews(data);
        animateReviews();
      })
      .catch(error => console.error('Error fetching reviews:', error))
      .finally(() => setIsLoading(false));
  }, []);

  const animateReviews = () => {
    gsap.from(reviewsContainerRef.current, {
      opacity: 0,
      y: 20,
      duration: 1,
    });

    reviews.forEach((review, index) => {
      gsap.from(review, {
        opacity: 0,
        y: 20,
        duration: 0.5,
        delay: 0.1 * index,
      });
    });

    gsap.to(reviewsContainerRef.current, {
      boxShadow: '0 0 20px rgba(255, 255, 255, 0.8)',
      scale: 1.02,
      duration: 0.5,
      ease: 'power2.inOut',
      repeat: -1,
      yoyo: true,
    });
  };

  return (
    <div>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <div
          ref={reviewsContainerRef}
          className="reviews-container"
        >
          {reviews.map(review => (
            <div key={review.id} className="review-card">
              <h3>customer reviews</h3>
              <p>Description: {review.description}</p>
              <p>User: {review.user_id}</p>
              <p>Rating: {review.star_rating}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Reviews;