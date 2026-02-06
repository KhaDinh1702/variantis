import React from 'react';
import './Inquiry.css';
import treeBackground from '../../assets/background2.png';

const Inquiry = () => {
    return (
        <div className="inquiry-page" style={{
            backgroundImage: `url(${treeBackground})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
        }}>
            <div className="inquiry-container">
                <div className="inquiry-card">
                    <h2>Get in Touch</h2>
                    <p className="inquiry-subtitle">Have a question or proposal? We'd love to hear from you.</p>

                    <form className="inquiry-form">
                        <div className="form-group">
                            <label htmlFor="name">Full Name</label>
                            <input type="text" id="name" placeholder="John Doe" required />
                        </div>

                        <div className="form-group">
                            <label htmlFor="email">Email Address</label>
                            <input type="email" id="email" placeholder="john@example.com" required />
                        </div>

                        <div className="form-group">
                            <label htmlFor="phone">Phone Number</label>
                            <input type="tel" id="phone" placeholder="(+84) " />
                        </div>

                        <div className="form-group">
                            <label htmlFor="subject">Subject</label>
                            <input type="text" id="subject" placeholder="Project Inquiry" required />
                        </div>

                        <div className="form-group">
                            <label htmlFor="message">Message</label>
                            <textarea id="message" rows="5" placeholder="Tell us about your project..." required></textarea>
                        </div>

                        <button type="submit" className="submit-btn">Send Message</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Inquiry;
