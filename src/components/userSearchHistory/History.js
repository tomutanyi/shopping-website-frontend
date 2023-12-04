import React from 'react';
import { motion } from 'framer-motion';

const History = ({ historyItem, onClick }) => {

  if (!historyItem) {
    return null; 
  }

  return (
    <motion.div
      className="history-card"
      whileHover={{ borderColor: '#808080' }}
      onClick={() => onClick(historyItem.pageUrl)}
    >
      <p>{historyItem.pageUrl}</p>
      <p className="date-time" style={{ color: 'green' }}>{historyItem.dateTime}</p>
    </motion.div>
  );
};

export default History;
