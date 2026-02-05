import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';
import logo from '../../assets/Variantis.png';
import franceFlag from '../../assets/france.png';

const Header = () => {
    const location = useLocation();

    return (
        <header className="header">
            <div className="logo-icon">
                <Link to="/">
                    <img src={logo} alt="Variantis Logo" />
                </Link>
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
                        <Link to="/" className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}>Homepage</Link>
                        <a href="#" className="nav-link">About Us</a>
                        <a href="#" className="nav-link">Quality & Regulatory</a>
                        <Link to="/inquiry" className={`nav-link ${location.pathname === '/inquiry' ? 'active' : ''}`}>Contact & Inquiry Forms</Link>
                        <Link to="/news-insights" className={`nav-link ${location.pathname === '/news-insights' ? 'active' : ''}`}>News / Insights</Link>
                    </nav>
                </div>
            </div>
        </header>
    );
};

export default Header;


