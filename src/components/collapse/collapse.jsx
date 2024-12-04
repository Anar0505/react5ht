import React, { useState } from 'react';
import './collapse.css'; // CSS faylını daxil edirik

const Collapse = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCollapse = () => {
    setIsOpen(prevState => !prevState);
  };

  return (
    <div className="collapse-container">
      <div className={`collapse-btn ${isOpen ? 'open' : ''}`} onClick={toggleCollapse}>
        {isOpen ? 'Collapse' : 'Expand'}
      </div>
      <div className={`collapse-content ${isOpen ? 'show' : ''}`}>
        {children}
      </div>
    </div>
  );
};

export default Collapse;