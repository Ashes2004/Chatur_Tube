// Navbar.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = ({ searchvalue }) => {
  const [searchInput, setSearchInput] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    console.log('searchinput', searchInput);
    searchvalue(searchInput);
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
            // Set a maximum width for the image
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
            />
            <button className="btn btn-light btn-outline-success" onClick={handleSearch}>
              <Link to={`/SearchResult/${searchInput}`}>
              <i class="fa-solid fa-magnifying-glass text-black"></i>
              </Link>
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
