import React from 'react';

const CustomAgendaEvent = ({ event }) => {
  const backgroundColors = {
    0: 'rgba(31, 148, 78, 0.20)',
    1: 'rgba(13, 109, 253, 0.20)',
    2: 'rgba(181, 48, 50, 0.20)',
    3: 'rgba(237, 154, 20, 0.20)',
    4: 'rgba(186, 22, 96, 0.20)',
  }

  const borderLeftColors = {
    0: 'rgb(31, 148, 78)',
    1: 'rgb(13, 110, 253)',
    2: 'rgb(181, 48, 50)',
    3: 'rgb(237, 154, 20)',
    4: 'rgb(186, 22, 96)',
  }

  const backgroundColor = backgroundColors[event.colorIndex];
  const borderLeftColor = borderLeftColors[event.colorIndex];
  
  return (
    <div
      style={{
        backgroundColor: backgroundColor,
        borderLeft: `5px solid ${borderLeftColor}`,
        padding: '10px 15px',
        borderRadius: '6px',
        marginBottom: '10px',
        fontFamily: 'Segoe UI, sans-serif',
      }}
    >
      <div style={{ fontSize: '1rem', fontWeight: '600', color: '#4b5876' }}>
        {event.title}
      </div>
      {event.desc && (
        <div style={{ fontSize: '0.85rem', color: '#555' }}>
          {event.desc}
        </div>
      )}
    </div>
  );
};
  
export default CustomAgendaEvent;
