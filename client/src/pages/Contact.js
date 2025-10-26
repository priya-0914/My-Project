import React, { useState } from 'react';
import Header from '../components/Header';
import './Contact.css';

export default function Contact() {
  const [form, setForm] = useState({name:'', email:'', message:''});
  const [status, setStatus] = useState('');

  function handleChange(e){
    const {name, value} = e.target;
    setForm(prev => ({...prev, [name]: value}));
  }

  function handleSubmit(e){
    e.preventDefault();
    setStatus('Message sent successfully!');
    // Reset form after 3 seconds
    setTimeout(() => {
      setStatus('');
      setForm({name:'', email:'', message:''});
    }, 3000);
  }

  return (
    <div className="contact">
      {/* Navigation Bar */}
      <Header />
      
      <div className="contact-page">
        <div className="contact-hero">
          <h1>Contact Us</h1>
          <p>Get in touch with our team for any questions or support</p>
        </div>

        {/* Horizontal layout container */}
        <div className="contact-horizontal">
          {/* Contact Form - Left side */}
          <div className="contact-form-section">
            <div className="card">
              <h2>Send us a message</h2>
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-row">
                  <input 
                    className="input" 
                    name="name" 
                    placeholder="Your name" 
                    value={form.name} 
                    onChange={handleChange} 
                    required 
                  />
                  <input 
                    className="input" 
                    name="email" 
                    type="email" 
                    placeholder="Email address" 
                    value={form.email} 
                    onChange={handleChange} 
                    required 
                  />
                </div>
                <textarea 
                  className="input" 
                  name="message" 
                  rows="5" 
                  placeholder="Your message..." 
                  value={form.message} 
                  onChange={handleChange} 
                  required 
                />
                <div className="form-actions">
                  <button type="submit" className="btn-primary">Send Message</button>
                  {status && <span className="hint success-text">{status}</span>}
                </div>
              </form>
            </div>
          </div>

          {/* Contact Info - Center */}
          <div className="contact-info-section">
            <div className="card">
              <h3>Get in Touch</h3>
              <div className="contact-methods">
                <div className="contact-item">
                  <div className="contact-icon">📧</div>
                  <div>
                    <strong>Email</strong>
                    <p>support@grievanceportal.com</p>
                  </div>
                </div>
                <div className="contact-item">
                  <div className="contact-icon">📞</div>
                  <div>
                    <strong>Phone</strong>
                    <p>+1 (555) 123-4567</p>
                  </div>
                </div>
                <div className="contact-item">
                  <div className="contact-icon">📍</div>
                  <div>
                    <strong>Address</strong>
                    <p>123 Main Street<br/>City, State 12345</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Office Hours - Right side */}
          <div className="contact-hours-section">
            <div className="card">
              <h3>Office Hours</h3>
              <div className="hours-list">
                <div className="hours-item">
                  <span>Monday - Friday</span>
                  <span>9:00 AM - 6:00 PM</span>
                </div>
                <div className="hours-item">
                  <span>Saturday</span>
                  <span>10:00 AM - 4:00 PM</span>
                </div>
                <div className="hours-item">
                  <span>Sunday</span>
                  <span>Closed</span>
                </div>
              </div>
              
              <div className="quick-actions">
                <h4>Quick Actions</h4>
                <button className="btn-ghost-alt" style={{width:'100%', marginBottom:'8px'}}>
                  View FAQ
                </button>
                <button className="btn-ghost-alt" style={{width:'100%'}}>
                  Track Complaint
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}