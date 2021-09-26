import React from 'react';

const Icon = ({ icon, size = 18 }) => {
  return (
    <span className="material-icons" style={{ fontSize: `${size}px` }}>{icon}</span>
  );
};

export default Icon;
