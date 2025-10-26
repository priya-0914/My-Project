import React from 'react';
import Header from '../components/Header';
import './About.css';

const About = () => {
    return (
        <div className="about">
            <Header />
            <main className="main-content">
                {/* About Hero Section */}
                <div className="about-hero">
                    <div className="container">
                        <h1 className="page-title">About Us</h1>
                        <p className="page-subtitle">
                            AI-powered grievance management for transparent governance
                        </p>
                    </div>
                </div>

                {/* Mission & Vision Combined */}
                <div className="mission-vision-section">
                    <div className="container">
                        <div className="mission-vision-grid">
                            <div className="mission-card">
                                <div className="card-icon">🎯</div>
                                <h2>Our Mission</h2>
                                <p>
                                    To transform public grievance management through intelligent AI technology, 
                                    ensuring every citizen's voice is heard and addressed efficiently.
                                </p>
                            </div>
                            <div className="vision-card">
                                <div className="card-icon">🚀</div>
                                <h2>Our Vision</h2>
                                <p>
                                    Creating responsive governance where AI-driven insights enable 
                                    proactive problem-solving and transparent accountability.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Core Values - Compact */}
                <div className="values-section">
                    <div className="container">
                        <h2 className="section-title">Our Values</h2>
                        <div className="values-compact">
                            <div className="value-item">
                                <span className="value-icon">💡</span>
                                <div>
                                    <h4>Innovation</h4>
                                    <p>Cutting-edge AI solutions</p>
                                </div>
                            </div>
                            <div className="value-item">
                                <span className="value-icon">🤝</span>
                                <div>
                                    <h4>Transparency</h4>
                                    <p>Open & clear processes</p>
                                </div>
                            </div>
                            <div className="value-item">
                                <span className="value-icon">⚖️</span>
                                <div>
                                    <h4>Accountability</h4>
                                    <p>Responsible outcomes</p>
                                </div>
                            </div>
                            <div className="value-item">
                                <span className="value-icon">👥</span>
                                <div>
                                    <h4>Citizen-First</h4>
                                    <p>Prioritizing citizen needs</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Simple Process Overview */}
                <div className="process-section">
                    <div className="container">
                        <h2 className="section-title">How It Works</h2>
                        <div className="process-flow">
                            <div className="process-step">
                                <div className="step-number">1</div>
                                <h4>Submit</h4>
                                <p>File complaint online</p>
                            </div>
                            <div className="step-arrow">→</div>
                            <div className="process-step">
                                <div className="step-number">2</div>
                                <h4>Analyze</h4>
                                <p>AI categorizes & routes</p>
                            </div>
                            <div className="step-arrow">→</div>
                            <div className="process-step">
                                <div className="step-number">3</div>
                                <h4>Track</h4>
                                <p>Monitor progress</p>
                            </div>
                            <div className="step-arrow">→</div>
                            <div className="process-step">
                                <div className="step-number">4</div>
                                <h4>Resolve</h4>
                                <p>Get solution</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Quick Stats */}
                <div className="stats-section">
                    <div className="container">
                        <div className="stats-grid">
                            <div className="stat-card">
                                <h3>10K+</h3>
                                <p>Resolved</p>
                            </div>
                            <div className="stat-card">
                                <h3>95%</h3>
                                <p>Success Rate</p>
                            </div>
                            <div className="stat-card">
                                <h3>24/7</h3>
                                <p>Available</p>
                            </div>
                            <div className="stat-card">
                                <h3>2 Days</h3>
                                <p>Avg Response</p>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default About;