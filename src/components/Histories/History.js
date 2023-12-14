import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { useSpring, animated } from 'react-spring';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import classNames from 'classnames';
import './history.css';
import { useAuth } from './AuthContext';
import Typed from 'typed.js';

const History = () => {
  const { user } = useAuth();
  const [history, setHistory] = useState([]);
  const [fontIndex, setFontIndex] = useState(0);
  const historyHeaderRef = useRef(null);

  useEffect(() => {
    const userLoggedIn = !!user;
    if (userLoggedIn) {
      axios
        .get(`/api/history/${user.id}`)
        .then((response) => setHistory(response.data))
        .catch((error) => console.error('Error fetching history:', error));
    }

    const options = {
      strings: ['MY HISTORY'],
      typeSpeed: 50,
      backSpeed: 50,
      startDelay: 1000,
      backDelay: 1000,
      showCursor: false,
      cursorChar: '|',
      onComplete: () => setFontIndex((prevFontIndex) => (prevFontIndex + 1) % 5),
    };

    const headerElement = historyHeaderRef.current;
    if (headerElement) {
      const typed = new Typed(headerElement, options);

      return () => {
        typed.destroy();
      };
    }

    return () => {};
  }, [user, setFontIndex, historyHeaderRef]);

  const fontAnimation = useSpring({
    config: { duration: 7000 },
    to: { opacity: 1 },
    reset: true,
    onRest: () => setFontIndex((prevFontIndex) => (prevFontIndex + 1) % 5),
  });

  if (!user) {
    return (
      <div className="history-container">
        <p>
          Please <Link to="/login" className="login-link">login</Link> to view your history.
        </p>
      </div>
    );
  }

  return (
    <Router>
      <div className="history-container">
        <animated.header
          ref={historyHeaderRef}
          className={classNames(`history-header font${fontIndex + 1}`)}
          style={fontAnimation}
        />
        <div className="history-card">
          {history.map((item, index) => (
            <Link key={index} to={`/history/${item.id}`}>
              <div className="history-item">
                <span>{item.search_query}</span>
                <span className="date-time">{item.timestamp}</span>
              </div>
            </Link>
          ))}
        </div>
        <Route path="/history/:id" component={HistoryDetail} />
      </div>
    </Router>
  );
};

const HistoryDetail = ({ match }) => {
  const [detail, setDetail] = useState(null);

  useEffect(() => {
    const historyId = match.params.id;
    axios
      .get(`/api/history/detail/${historyId}`)
      .then((response) => setDetail(response.data))
      .catch((error) => console.error('Error fetching history detail:', error));
  }, [match.params.id]);

  if (!detail) {
    return <div>Loading...</div>;
  }

  return (
    <div className="history-detail">
      <h2>{detail.search_query}</h2>
      <p>{detail.timestamp}</p>
    </div>
  );
};

export default History;
