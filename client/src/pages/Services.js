import React from 'react';
import Header from '../components/Header';
import './Services.css';

const Services = () => {
    return (
        <div className="services">
            <Header />
            <main className="main-content">
                {/* Services Hero Section */}
                <div className="services-hero">
                    <div className="container">
                        <h1 className="page-title">Our Services</h1>
                        <p className="page-subtitle">
                            Comprehensive AI-powered solutions for efficient grievance management
                        </p>
                    </div>
                </div>

                {/* Main Services Section */}
                <div className="main-services">
                    <div className="container">
                        <div className="services-grid">
                            <div className="service-card featured">
                                <div className="service-icon">📝</div>
                                <h3>Online Complaint Filing</h3>
                                <p>Submit your grievances through our user-friendly online portal with automatic categorization and priority assignment.</p>
                                <ul className="service-features">
                                    <li>24/7 complaint submission</li>
                                    <li>Auto-categorization using AI</li>
                                    <li>Instant acknowledgment receipt</li>
                                    <li>Multi-language support</li>
                                </ul>
                                <button className="service-btn">File Complaint</button>
                            </div>

                            <div className="service-card">
                                <div className="service-icon">📊</div>
                                <h3>Real-time Tracking</h3>
                                <p>Monitor your complaint status in real-time with detailed progress updates and estimated resolution times.</p>
                                <ul className="service-features">
                                    <li>Live status updates</li>
                                    <li>Progress timeline</li>
                                    <li>SMS & Email notifications</li>
                                    <li>Resolution time estimates</li>
                                </ul>
                                <button className="service-btn">Track Status</button>
                            </div>

                            <div className="service-card">
                                <div className="service-icon">🤖</div>
                                <h3>AI-Powered Analysis</h3>
                                <p>Advanced artificial intelligence analyzes complaints for faster resolution and better resource allocation.</p>
                                <ul className="service-features">
                                    <li>Sentiment analysis</li>
                                    <li>Priority classification</li>
                                    <li>Trend identification</li>
                                    <li>Predictive routing</li>
                                </ul>
                                <button className="service-btn">Learn More</button>
                            </div>

                            <div className="service-card">
                                <div className="service-icon">📞</div>
                                <h3>Multi-Channel Support</h3>
                                <p>Access our services through multiple channels - web, mobile app, phone, and in-person assistance.</p>
                                <ul className="service-features">
                                    <li>Web portal access</li>
                                    <li>Mobile application</li>
                                    <li>Helpline support</li>
                                    <li>Walk-in centers</li>
                                </ul>
                                <button className="service-btn">Get Support</button>
                            </div>

                            <div className="service-card">
                                <div className="service-icon">🔍</div>
                                <h3>Investigation & Resolution</h3>
                                <p>Systematic investigation process with trained officials ensuring fair and timely resolution of grievances.</p>
                                <ul className="service-features">
                                    <li>Expert investigation team</li>
                                    <li>Evidence collection</li>
                                    <li>Fair hearing process</li>
                                    <li>Appeal mechanism</li>
                                </ul>
                                <button className="service-btn">View Process</button>
                            </div>

                            <div className="service-card">
                                <div className="service-icon">📋</div>
                                <h3>Feedback & Analytics</h3>
                                <p>Comprehensive feedback system with detailed analytics to improve service quality and citizen satisfaction.</p>
                                <ul className="service-features">
                                    <li>Satisfaction surveys</li>
                                    <li>Performance metrics</li>
                                    <li>Public dashboards</li>
                                    <li>Annual reports</li>
                                </ul>
                                <button className="service-btn">View Analytics</button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Service Categories */}
                <div className="service-categories">
                    <div className="container">
                        <h2 className="section-title">Complaint Categories We Handle</h2>
                        <div className="categories-grid">
                            <div className="category-item">
                                <h4>🏢 Public Services</h4>
                                <p>Water supply, electricity, sanitation, road maintenance</p>
                            </div>
                            <div className="category-item">
                                <h4>🏥 Healthcare</h4>
                                <p>Hospital services, medical negligence, healthcare access</p>
                            </div>
                            <div className="category-item">
                                <h4>🎓 Education</h4>
                                <p>School facilities, teacher issues, educational services</p>
                            </div>
                            <div className="category-item">
                                <h4>🚔 Law & Order</h4>
                                <p>Police misconduct, security issues, legal matters</p>
                            </div>
                            <div className="category-item">
                                <h4>🌱 Environment</h4>
                                <p>Pollution complaints, waste management, environmental issues</p>
                            </div>
                            <div className="category-item">
                                <h4>🏛️ Administrative</h4>
                                <p>Documentation, licensing, government procedures</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Process Timeline */}
                <div className="process-section">
                    <div className="container">
                        <h2 className="section-title">Our Resolution Process</h2>
                        <div className="process-timeline">
                            <div className="timeline-item">
                                <div className="timeline-number">1</div>
                                <div className="timeline-content">
                                    <h4>Submit Complaint</h4>
                                    <p>File your grievance through any of our available channels</p>
                                    <span className="timeline-duration">Immediate</span>
                                </div>
                            </div>
                            <div className="timeline-item">
                                <div className="timeline-number">2</div>
                                <div className="timeline-content">
                                    <h4>AI Analysis</h4>
                                    <p>Our AI system categorizes and assigns priority to your complaint</p>
                                    <span className="timeline-duration">Within 1 hour</span>
                                </div>
                            </div>
                            <div className="timeline-item">
                                <div className="timeline-number">3</div>
                                <div className="timeline-content">
                                    <h4>Department Assignment</h4>
                                    <p>Complaint is routed to the relevant department for action</p>
                                    <span className="timeline-duration">Within 24 hours</span>
                                </div>
                            </div>
                            <div className="timeline-item">
                                <div className="timeline-number">4</div>
                                <div className="timeline-content">
                                    <h4>Investigation</h4>
                                    <p>Detailed investigation and evidence collection</p>
                                    <span className="timeline-duration">2-7 days</span>
                                </div>
                            </div>
                            <div className="timeline-item">
                                <div className="timeline-number">5</div>
                                <div className="timeline-content">
                                    <h4>Resolution</h4>
                                    <p>Final resolution with detailed explanation and actions taken</p>
                                    <span className="timeline-duration">Within 15 days</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Services;