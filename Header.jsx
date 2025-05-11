// components/Header.jsx
import React from 'react';

function Header() {
  return (
    <header>
      <div className="header-container">
        <a href="#" className="logo">Cine<span>Booker</span></a>
        <nav>
          <ul>
            <li><a href="#" className="active">Home</a></li>
            <li><a href="#">Movies</a></li>
            <li><a href="#">Theaters</a></li>
            <li><a href="#">Offers</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </nav>
        <div className="search-login">
          <div className="search-box">
            <span className="search-icon">🔍</span>
            <input type="text" placeholder="Search movies..." />
          </div>
          <button className="login-btn">Login / Signup</button>
        </div>
      </div>
    </header>
  );
}

export default Header;