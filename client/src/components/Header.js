import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';

const Header = () => {
    const location = useLocation();
    
    const isActive = (path) => {
        return location.pathname === path;
    };

    return (
        <header className="header">
            <div className="container">
                <div className="logo-section">
                    <div className="logo">
                        <div className="logo-placeholder">🏛️</div>
                    </div>
                    <div className="logo-text">
                        <Link to="/" className="logo-title">Grievance Portal</Link>
                    </div>
                </div>
                
                <nav className="nav">
                    <ul className="nav-list">
                        <li className="nav-item">
                            <Link 
                                to="/" 
                                className={`nav-link ${isActive('/') ? 'active' : ''}`}
                            >
                                Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link 
                                to="/about" 
                                className={`nav-link ${isActive('/about') ? 'active' : ''}`}
                            >
                                About us
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link 
                                to="/services" 
                                className={`nav-link ${isActive('/services') ? 'active' : ''}`}
                            >
                                Services
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link 
                                to="/contact" 
                                className={`nav-link ${isActive('/contact') ? 'active' : ''}`}
                            >
                                Contact us
                            </Link>
                        </li>
                    </ul>
                </nav>

                <div className="auth-buttons">
                    <Link to="/login" className="btn login-btn">Log in</Link>
                    <Link to="/signup" className="btn signin-btn">Sign up</Link>
                </div>
            </div>
        </header>
    );
};

export default Header;