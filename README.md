# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)




<!-- const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '/reviews',
    createProxyMiddleware({
      target: 'http://localhost:5556',
      changeOrigin: true,
    })
  );
};
 -->

 <!-- import React, { useState, useEffect, useRef } from 'react';
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
 -->

 <!-- h2 {
    text-align: center;
  }
  
  .reviews-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    margin: 20px;
  }
  
  .review-card {
    background-color: wheat;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
    padding: 20px;
    margin: 10px;
    width: 250px;
    text-align: left;
    transition: box-shadow 0.3s ease-in-out;
  }
  
  .review-card:hover {
    box-shadow: 0 0 20px rgba(255, 255, 255, 0.8);
  }
  
  @keyframes glow {
    0% {
      box-shadow: 0 0 20px rgba(255, 255, 255, 0.8);
    }
    50% {
      box-shadow: 0 0 40px rgba(255, 255, 255, 0.8);
    }
    100% {
      box-shadow: 0 0 20px rgba(255, 255, 255, 0.8);
    }
  }
  
  .reviews-container:hover {
    animation: glow 1.5s infinite;
  }
   -->