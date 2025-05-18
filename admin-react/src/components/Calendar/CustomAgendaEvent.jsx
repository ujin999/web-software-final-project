import React from 'react';

const CustomAgendaEvent = ({ event }) => {
  return (
    <div
      style={{
        backgroundColor: '#f1f4f9',
        borderLeft: '5px solid #4b5876',
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
