import React from 'react';

const CustomEvent = ({ event }) => {
  const colors = {
    0: 'rgb(31, 148, 78)',
    1: 'rgb(13, 110, 253)',
    2: 'rgb(181, 48, 50)',
    3: 'rgb(237, 154, 20)',
    4: 'rgb(186, 22, 96)',
  }

  const color = colors[event.colorIndex];

  return (
    <div
      style={{
        backgroundColor: color,
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