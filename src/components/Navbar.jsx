import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import 'react-toastify/dist/ReactToastify.css';
import './Navbar.css';

const Navbar = ({ searchvalue ,showToast}) => {
  const [searchInput, setSearchInput] = useState('');
  
  const handleSearch = (e) => {
    e.preventDefault();
    console.log('searchinput', searchInput);
    searchvalue(searchInput);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      showToast();
    }
  };

 

  return (
    <div>
      <nav className="navbar das fixed-top">
        <div className="container-fluid">
          <Link className="logo" to="/">
            <img
              src="https://icones.pro/wp-content/uploads/2021/02/youtube-logo-icone-bleue.png"
              alt="Logo"
              height={40}
              width={40}
            />
          </Link>
          
          <div className="d-flex float-right">
            <input
              className="form-control me-1 search-input"
              type="search"
              placeholder="Search"
              aria-label="Search"
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
              onKeyDown={handleKeyPress}
            />
            <button className="btn btn-light btn-outline-success" onClick={handleSearch}>
              <Link to={`/SearchResult/${searchInput}`}>
                <i className="fa-solid fa-magnifying-glass text-black"></i>
              </Link>
            </button>
          </div>
        </div>
      </nav>
      
    </div>
  );
};

export default Navbar;
