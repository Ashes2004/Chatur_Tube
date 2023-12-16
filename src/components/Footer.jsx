import React from 'react';
import './Footer.css';

function Footer() {
    const handleClick = () => {
        const chaturUrl = `https://mrchatur.netlify.app`;
        window.location.href = chaturUrl;
      };
  return (
    <div>
      <footer className="d-flex justify-content-around foot ">
        
         
       
          <i className="fas fa-home footele" onClick={handleClick} ></i>
       
         
      </footer>
    </div>
  );
}

export default Footer;
