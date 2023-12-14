// History.js
import React, { useState, useEffect } from 'react';

const History = ({ userId }) => {
  const [searchHistory, setSearchHistory] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchSearchHistory = async () => {
      try {
        const response = await fetch(`https://shopping-database32.onrender.com/users/${userId}/search_queries`);
        if (response.ok) {
          const data = await response.json();
          setSearchHistory(data);
        } else {
          setError('Error fetching search history');
        }
      } catch (error) {
        setError('Error fetching search history');
      } finally {
        setLoading(false);
      }
    };

    fetchSearchHistory();
  }, [userId]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div className="history">
      <h2 className="text-2xl font-bold mb-4">Search History</h2>
      {searchHistory.length === 0 ? (
        <p>No search history available.</p>
      ) : (
        <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {searchHistory.map((query, index) => (
            <li key={index} className="bg-white p-4 rounded-lg shadow-md">
              <p className="text-lg font-bold mb-2">{query.search_query}</p>
              <p className="text-gray-600 mb-2">{query.timestamp}</p>
              {/* You can add more properties as needed */}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default History;