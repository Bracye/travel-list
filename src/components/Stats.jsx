import React from 'react';

const Stats = ({ items }) => {
  const numItems = items.length;
  const numPacked = items.filter(item => item.packed).length;
  const percentage = (numPacked / numItems) * 100;

  return (
    <footer className='stats'>
      {numItems === 0 ? (
        <h2>There are no items on the list. Ready to go?</h2>
      ) : percentage === 100 ? (
        <h2>You're all packed! Let's travel!</h2>
      ) : (
        <h3>
          You have {numItems} items on your list and you have already packed {numPacked} ({percentage.toFixed(2)}%)
        </h3>
      )}
    </footer>
  );
};

export default Stats;

