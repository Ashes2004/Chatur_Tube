import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
    
  return (
    <div>
      <footer className="d-flex justify-content-around foot ">
        
         
       
        <Link to='/'> <i className="fas fa-home footele"  ></i></Link>  
       
         
      </footer>
    </div>
  );
}

export default Footer;
