import React from 'react';
import '../../styles/blur-decorations.css';

const BlurDecorations: React.FC = () => {
  return (
    <div className="blur-container">
      <div className="blur-decoration blur-decoration-1"></div>
      <div className="blur-decoration blur-decoration-2"></div>
      <div className="blur-decoration blur-decoration-3"></div>
      <div className="blur-decoration blur-decoration-4"></div>
      <div className="blur-decoration blur-decoration-5"></div>
      <div className="blur-decoration blur-decoration-6"></div>
    </div>
  );
};

export default BlurDecorations;
