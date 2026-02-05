import React from 'react';
import './Header.css';
import logo from '../assets/Variantis.png';
import franceFlag from '../assets/france.png';

const Header = () => {
    return (
        <header className="header">
            <div className="logo-icon">
                <img src={logo} alt="Variantis Logo" />
            </div>

            <div className="header-top">
                <div className="container flex-between">
                    <div className="empty-space"></div>

                    <div className="header-actions">
                        <div className="language-selector">
                            <span className="language-text">FRA</span>
                            <img src={franceFlag} alt="France" className="flag" />
                            <span className="dropdown-icon">▼</span>
                        </div>
                        <div className="search-box">
                            <input type="search" placeholder="Search..." />
                        </div>
                    </div>
                </div>
            </div>

            <div className="header-bottom">
                <div className="container flex-between">

                    <nav className="main-nav">
                        <a href="#" className="nav-link active">Homepage</a>
                        <a href="#" className="nav-link">About Us</a>
                        <a href="#" className="nav-link">Quality & Regulatory</a>
                        <a href="#" className="nav-link">Contact & Inquiry Forms</a>
                        <a href="#" className="nav-link">News / Insights</a>
                    </nav>
                </div>
            </div>
        </header>
    );
};

export default Header;
