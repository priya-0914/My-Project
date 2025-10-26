import React, { useState } from 'react';
import Header from '../components/Header';
import './Contact.css';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
        priority: 'medium'
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission here
        console.log('Form submitted:', formData);
        alert('Thank you for your message. We will get back to you soon!');
    };

    return (
        <div className="contact">
            <Header />
            <main className="main-content">
                {/* Contact Hero Section */}
                <div className="contact-hero">
                    <div className="container">
                        <h1 className="page-title">Contact Us</h1>
                        <p className="page-subtitle">
                            Get in touch with us for support, inquiries, or assistance
                        </p>
                    </div>
                </div>

                {/* Contact Methods */}
                <div className="contact-methods">
                    <div className="container">
                        <div className="contact-grid">
                            <div className="contact-card">
                                <div className="contact-icon">📞</div>
                                <h3>Phone Support</h3>
                                <p>24/7 helpline for urgent grievances</p>
                                <div className="contact-details">
                                    <p><strong>Toll-Free:</strong> 1800-123-4567</p>
                                    <p><strong>Local:</strong> +91-11-2345-6789</p>
                                    <p><strong>Emergency:</strong> 100</p>
                                </div>
                                <button className="contact-btn">Call Now</button>
                            </div>

                            <div className="contact-card">
                                <div className="contact-icon">✉️</div>
                                <h3>Email Support</h3>
                                <p>Send detailed complaints via email</p>
                                <div className="contact-details">
                                    <p><strong>General:</strong> support@grievance.gov.in</p>
                                    <p><strong>Complaints:</strong> complaints@grievance.gov.in</p>
                                    <p><strong>Technical:</strong> tech@grievance.gov.in</p>
                                </div>
                                <button className="contact-btn">Send Email</button>
                            </div>

                            <div className="contact-card">
                                <div className="contact-icon">🏢</div>
                                <h3>Visit Our Office</h3>
                                <p>Walk-in support at our regional centers</p>
                                <div className="contact-details">
                                    <p><strong>Address:</strong> 123 Government Complex</p>
                                    <p>New Delhi - 110001</p>
                                    <p><strong>Hours:</strong> Mon-Fri 9AM-6PM</p>
                                </div>
                                <button className="contact-btn">Get Directions</button>
                            </div>

                            <div className="contact-card">
                                <div className="contact-icon">💬</div>
                                <h3>Live Chat</h3>
                                <p>Instant support through our chatbot</p>
                                <div className="contact-details">
                                    <p><strong>Available:</strong> 24/7</p>
                                    <p><strong>Response:</strong> Immediate</p>
                                    <p><strong>Languages:</strong> Hindi, English</p>
                                </div>
                                <button className="contact-btn">Start Chat</button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Contact Form */}
                <div className="contact-form-section">
                    <div className="container">
                        <div className="form-container">
                            <div className="form-header">
                                <h2>Send Us a Message</h2>
                                <p>Fill out the form below and we'll get back to you as soon as possible</p>
                            </div>
                            
                            <form onSubmit={handleSubmit} className="contact-form">
                                <div className="form-row">
                                    <div className="form-group">
                                        <label htmlFor="name">Full Name *</label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                            placeholder="Enter your full name"
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="email">Email Address *</label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                            placeholder="Enter your email"
                                        />
                                    </div>
                                </div>

                                <div className="form-row">
                                    <div className="form-group">
                                        <label htmlFor="phone">Phone Number</label>
                                        <input
                                            type="tel"
                                            id="phone"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            placeholder="Enter your phone number"
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="priority">Priority Level</label>
                                        <select
                                            id="priority"
                                            name="priority"
                                            value={formData.priority}
                                            onChange={handleChange}
                                        >
                                            <option value="low">Low</option>
                                            <option value="medium">Medium</option>
                                            <option value="high">High</option>
                                            <option value="urgent">Urgent</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="form-group">
                                    <label htmlFor="subject">Subject *</label>
                                    <input
                                        type="text"
                                        id="subject"
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleChange}
                                        required
                                        placeholder="Brief description of your inquiry"
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="message">Message *</label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        rows="6"
                                        placeholder="Provide detailed information about your inquiry or complaint"
                                    ></textarea>
                                </div>

                                <button type="submit" className="submit-btn">
                                    Send Message
                                </button>
                            </form>
                        </div>
                    </div>
                </div>

                {/* FAQ Section */}
                <div className="faq-section">
                    <div className="container">
                        <h2 className="section-title">Frequently Asked Questions</h2>
                        <div className="faq-grid">
                            <div className="faq-item">
                                <h4>How long does it take to resolve a complaint?</h4>
                                <p>Most complaints are resolved within 15 days. Urgent matters are prioritized and may be resolved within 24-48 hours.</p>
                            </div>
                            <div className="faq-item">
                                <h4>Can I track my complaint status online?</h4>
                                <p>Yes, you can track your complaint status in real-time using your complaint ID on our tracking portal.</p>
                            </div>
                            <div className="faq-item">
                                <h4>What if I'm not satisfied with the resolution?</h4>
                                <p>You can file an appeal within 30 days of the resolution. Our appellate authority will review your case.</p>
                            </div>
                            <div className="faq-item">
                                <h4>Is there a fee for filing complaints?</h4>
                                <p>No, filing complaints through our grievance redressal system is completely free of charge.</p>
                            </div>
                            <div className="faq-item">
                                <h4>Can I file anonymous complaints?</h4>
                                <p>Yes, anonymous complaints are accepted, though providing contact details helps us follow up effectively.</p>
                            </div>
                            <div className="faq-item">
                                <h4>What languages are supported?</h4>
                                <p>Our system supports Hindi, English, and major regional languages for better accessibility.</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Map Section */}
                <div className="map-section">
                    <div className="container">
                        <h2 className="section-title">Our Locations</h2>
                        <div className="locations-grid">
                            <div className="location-card">
                                <h4>🏛️ Main Office</h4>
                                <p>123 Government Complex<br/>New Delhi - 110001</p>
                                <p><strong>Phone:</strong> +91-11-2345-6789</p>
                            </div>
                            <div className="location-card">
                                <h4>🏢 Regional Office - North</h4>
                                <p>456 Regional Center<br/>Chandigarh - 160001</p>
                                <p><strong>Phone:</strong> +91-172-234-5678</p>
                            </div>
                            <div className="location-card">
                                <h4>🏢 Regional Office - South</h4>
                                <p>789 Administrative Block<br/>Bangalore - 560001</p>
                                <p><strong>Phone:</strong> +91-80-2345-6789</p>
                            </div>
                            <div className="location-card">
                                <h4>🏢 Regional Office - West</h4>
                                <p>321 Government Plaza<br/>Mumbai - 400001</p>
                                <p><strong>Phone:</strong> +91-22-2345-6789</p>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Contact;