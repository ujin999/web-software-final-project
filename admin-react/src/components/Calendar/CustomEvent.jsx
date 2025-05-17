import React from 'react';

const CustomEvent = ({ event }) => {
  return (
    <div
      style={{
        backgroundColor: '#576c9e',
        color: 'white',
        padding: '4px 8px',
        borderRadius: '8px',
        fontSize: '0.85rem',
        fontWeight: 400,
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
      }}
    >
      {event.title}
    </div>
  );
};

export default CustomEvent;