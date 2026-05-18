import React from 'react';

const MovieBadges = ({ badges = [] }) => {
  if (!badges.length) return null;
  return (
    <div className="badges-wrapper">
      {badges.map((b, i) => (
        <span key={i} className={`badge ${b.type || ''}`}>{b.label}</span>
      ))}
    </div>
  );
};

export default MovieBadges;
