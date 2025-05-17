import React from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const CustomToolbar = ({ date, label, onNavigate, onView, view }) => {

  const labelDate = new Date(date);
  const formattedLabel = `${labelDate.getFullYear()}년 ${labelDate.getMonth() + 1}월`;

  return (
    <div
      className="rbc-toolbar"
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#fcfeff',
        padding: '1rem',
        borderRadius: '8px',
        // boxShadow: '0 2px 6px rgba(0,0,0,0.1)',
        marginBottom: '0.3rem',
        fontFamily: 'Poppins, sans-serif',
      }}
    >
      {/* 왼쪽: 이전 / 오늘 / 다음 */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
        <button className="nav-btn" onClick={() => onNavigate('PREV')}>
          <FaChevronLeft />
        </button>
        <button className="today-btn" onClick={() => onNavigate('TODAY')}>
          Today
        </button>
        <button className="nav-btn" onClick={() => onNavigate('NEXT')}>
          <FaChevronRight />
        </button>
      </div>

      {/* 가운데: 현재 라벨 */}
      <div style={{ fontSize: '1.3rem', fontWeight: '700', color: '#2c3e50' }}>
        {formattedLabel}
      </div>

      {/* 오른쪽: 뷰 전환 */}
      <div style={{ display: 'flex', gap: '0.5rem' }}>
        <button
          className={`view-btn ${view === 'month' ? 'active' : ''}`}
          onClick={() => onView('month')}
        >
          Month
        </button>
        <button
          className={`view-btn ${view === 'agenda' ? 'active' : ''}`}
          onClick={() => onView('agenda')}
        >
          Agenda
        </button>
      </div>
    </div>
  );
};

export default CustomToolbar;
