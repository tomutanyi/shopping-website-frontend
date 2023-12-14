// import React, { useState, useEffect } from 'react';
// import { motion } from 'framer-motion';
// import { Rate, Avatar, message, Input, Button } from 'antd';
// import { RiUserLine, RiPencilLine } from 'react-icons/ri';
// import './Reviews.css';

// const Reviews = () => {
//   const [reviews, setReviews] = useState([]);
//   const [filteredReviews, setFilteredReviews] = useState([]);
//   const [sortBy, setSortBy] = useState('topToLow');
//   const [editReviewId, setEditReviewId] = useState(null);
//   const [newReview, setNewReview] = useState('');
//   const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
//   const [showSuccessMessage, setShowSuccessMessage] = useState(false);
//   const [cancelTimer, setCancelTimer] = useState(null);

//   useEffect(() => {
//     fetch('https://shopping-database32.onrender.com/reviews') // Replace with your actual API endpoint
//       .then(response => response.json())
//       .then(data => {
//         setReviews(data);
//         setFilteredReviews(sortReviews(data, sortBy));
//       })
//       .catch(error => console.error('Error fetching reviews:', error));
//   }, [sortBy]);

//   const sortReviews = (reviews, order) => {
//     return reviews.slice().sort((a, b) => {
//       const comparison = order === 'topToLow' ? b.star_rating - a.star_rating : a.star_rating - b.star_rating;
//       return comparison !== 0 ? comparison : b.id - a.id;
//     });
//   };

//   const handleSortChange = value => {
//     setSortBy(value);
//   };

//   const updateReview = (id, review) => {
//     return fetch(`https://shopping-database32.onrender.com/reviews/${id}`, {
//       method: 'PUT',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({ description: review }),
//     })
//       .then(response => {
//         if (!response.ok) {
//           throw new Error('Failed to update review');
//         }
//       })
//       .catch(error => {
//         throw new Error(`Error updating review: ${error.message}`);
//       });
//   };

//   const handleEditSubmit = (id, username) => {
//     if (isUserLoggedIn) {
//       updateReview(id, newReview)
//         .then(() => {
//           message.success('Review updated successfully');
//           setEditReviewId(null);
//           setNewReview('');
//           setShowSuccessMessage(true);

//           setCancelTimer(setTimeout(() => {
//             setShowSuccessMessage(false);
//           }, 15000));
//         })
//         .catch(error => {
//           message.error(error.message);
//         });
//     } else {
//       message.warning('You need to be logged in to edit a review.');
//     }
//   };

//   const handleEditClick = id => {
//     if (isUserLoggedIn) {
//       setEditReviewId(id);
//     } else {
//       message.warning('You need to be logged in to edit a review.');
//     }
//   };

//   const handleCancelEdit = () => {
//     setEditReviewId(null);
//     setNewReview('');
//   };

//   const handleEditChange = e => {
//     setNewReview(e.target.value);
//   };

//   const handleAddReview = () => {
//     if (isUserLoggedIn) {
//       addReview(newReview, 5) // Assume 5-star rating for the new review
//         .then(() => {
//           message.success('Review added successfully');
//           setNewReview('');
//           setShowSuccessMessage(true);

//           setCancelTimer(setTimeout(() => {
//             setShowSuccessMessage(false);
//           }, 15000));
//         })
//         .catch(() => {
//           message.error('Error! Failed to add review.');
//         });
//     } else {
//       message.warning('You need to be logged in to add a review.');
//     }
//   };

//   const addReview = (review, starRating) => {
//     return new Promise((resolve, reject) => {
//       // Simulating a successful server response
//       resolve();
//       // Simulating an error response
//       // reject();
//     });
//   };

//   const handleToggleCancel = () => {
//     clearTimeout(cancelTimer);
//     setShowSuccessMessage(false);
//   };

//   return (
//     <div className="reviews-container">
//       <h2>Customer Reviews</h2>
//       {showSuccessMessage && (
//         <div className="success-message">
//           {isUserLoggedIn ? (
//             <div>
//               Review updated successfully
//               <div className="success-message-buttons">
//                 <Button onClick={() => setShowSuccessMessage(false)} className="ok-button">
//                   OK
//                 </Button>
//                 <Button onClick={handleToggleCancel} className="cancel-button">
//                   Cancel
//                 </Button>
//               </div>
//             </div>
//           ) : (
//             <div>
//               Error! Failed to update review.
//               <div className="success-message-buttons">
//                 <Button onClick={() => setShowSuccessMessage(false)} className="ok-button">
//                   OK
//                 </Button>
//                 <Button onClick={handleToggleCancel} className="cancel-button">
//                   Cancel
//                 </Button>
//               </div>
//             </div>
//           )}
//           <div className="timer">15s</div>
//         </div>
//       )}
//       <div className="sort-container">
//         <span>Sort By: </span>
//         <select value={sortBy} onChange={e => handleSortChange(e.target.value)}>
//           <option value="topToLow">High to Low</option>
//           <option value="lowToTop">Low to High</option>
//         </select>
//       </div>
//       {filteredReviews.map(review => (
//         <motion.div
//           key={review.id}
//           className="review-card"
//           whileHover={{ borderColor: 'red' }}
//         >
//           <div className="review-header">
//             <motion.div className="user-profile" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
//               <Avatar icon={<RiUserLine />} size={24} style={{ marginRight: '8px' }} />
//               {review.username}
//             </motion.div>
//             {editReviewId === review.id ? (
//               <motion.div className="review-comment" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
//                 <Input.TextArea
//                   value={newReview}
//                   onChange={handleEditChange}
//                   placeholder="Write your edited review..."
//                 />
//                 <Button onClick={() => handleEditSubmit(review.id, review.username)}>Submit</Button>
//                 <Button onClick={handleCancelEdit}>Cancel</Button>
//               </motion.div>
//             ) : (
//               <motion.div className="review-comment" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
//                 {review.description}
//               </motion.div>
//             )}
//             <motion.div className="star-rating" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
//               <Rate allowHalf defaultValue={review.star_rating} disabled />
//             </motion.div>
//             {isUserLoggedIn && (
//               <motion.div
//                 className="edit-button"
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 whileHover={{ opacity: 1 }}
//                 onClick={() => handleEditClick(review.id)}
//               >
//                 <RiPencilLine />
//               </motion.div>
//             )}
//           </div>
//         </motion.div>
//       ))}
//     </div>
//   );
// };

// export default Reviews;



// Reviews.js
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Rate, Avatar, message } from 'antd';
import { RiUserLine } from 'react-icons/ri';
import './Reviews.css';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [filteredReviews, setFilteredReviews] = useState([]);
  const [sortBy, setSortBy] = useState('topToLow');

  useEffect(() => {
    fetch('https://shopping-database32.onrender.com/reviews') // Replace with your actual API endpoint
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
          <option value="topToLow">High to Low</option>
          <option value="lowToTop">Low to High</option>
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
              <Avatar icon={<RiUserLine />} size={24} style={{ marginRight: '8px' }} />
              {review.username}
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
