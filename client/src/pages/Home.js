import React from 'react';
import Header from '../components/Header';
import './Home.css';

const Home = () => {
    return (
        <div className="home">
            <Header />
            <main className="main-content">
                {/* Hero Section */}
                <div className="hero-section">
                    <div className="container">
                        <div className="hero-content">
                            <div className="hero-left">
                                <h1 className="hero-title">
                                    AI-BASED GRIEVANCE<br />
                                    REDRESSAL SYSTEM
                                </h1>
                                <p className="hero-description">
                                    Empowering citizens with intelligent complaint management through 
                                    artificial intelligence for faster, more efficient grievance resolution.
                                </p>
                                <div className="action-buttons">
                                    <button className="btn-primary">File a Complaint</button>
                                    <button className="btn-secondary">Track Status</button>
                                </div>
                            </div>
                            <div className="hero-right">
                                <div className="system-title">
                                    <h2>GRIEVANCE<br />REDRESSAL SYSTEM</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Features Section */}
                <div className="features-section">
                    <div className="container">
                        <h2 className="section-title">Why Choose Our System?</h2>
                        <div className="features-grid">
                            <div className="feature-card">
                                <div className="feature-icon">🤖</div>
                                <h3>AI-Powered Analysis</h3>
                                <p>Advanced AI algorithms categorize and prioritize complaints for faster resolution</p>
                            </div>
                            <div className="feature-card">
                                <div className="feature-icon">⚡</div>
                                <h3>Quick Response</h3>
                                <p>Automated acknowledgment and intelligent routing to relevant departments</p>
                            </div>
                            <div className="feature-card">
                                <div className="feature-icon">📊</div>
                                <h3>Real-time Tracking</h3>
                                <p>Monitor your complaint status and receive updates throughout the process</p>
                            </div>
                            <div className="feature-card">
                                <div className="feature-icon">🔒</div>
                                <h3>Secure & Transparent</h3>
                                <p>Complete data protection with transparent communication and accountability</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Stats Section */}
                <div className="stats-section">
                    <div className="container">
                        <div className="stats-grid">
                            <div className="stat-item">
                                <h3>10,000+</h3>
                                <p>Complaints Resolved</p>
                            </div>
                            <div className="stat-item">
                                <h3>95%</h3>
                                <p>Success Rate</p>
                            </div>
                            <div className="stat-item">
                                <h3>24/7</h3>
                                <p>System Availability</p>
                            </div>
                            <div className="stat-item">
                                <h3>2 Days</h3>
                                <p>Average Resolution Time</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="footer-banner">
                    <div className="container">
                        <p className="banner-text">
                            ⚡ Smart governance begins with listening. AI transforms grievances into insights, 
                            Ensuring accountability, speed, and trust — For a better tomorrow
                        </p>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Home;