import React from 'react';
import './PageFooter.css';
import footerImage from '../../assets/footer.png';

const PageFooter = () => {
    return (
        <footer className="page-footer">
            <div className="legal-bar">
                <div className="legal-content">
                    <div className="legal-links">
                        <a href="#">Legal notice</a>
                        <span className="separator">|</span>
                        <a href="#">Privacy policy</a>
                        <span className="separator">|</span>
                        <a href="#">Join us</a>
                        <span className="separator">|</span>
                        <a href="#">Contact</a>
                    </div>

                    <div className="social-icons">
                        <a href="#" className="social-icon facebook">
                            <svg viewBox="0 0 24 24" width="24" height="24" fill="white">
                                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                            </svg>
                        </a>
                        <a href="#" className="social-icon twitter">
                            <svg viewBox="0 0 24 24" width="24" height="24" fill="white">
                                <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                            </svg>
                        </a>
                        <a href="#" className="social-icon linkedin">
                            <svg viewBox="0 0 24 24" width="24" height="24" fill="white">
                                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                                <rect x="2" y="9" width="4" height="12"></rect>
                                <circle cx="4" cy="4" r="2"></circle>
                            </svg>
                        </a>
                        <a href="#" className="social-icon youtube">
                            <svg viewBox="0 0 24 24" width="24" height="24" fill="none">
                                <rect x="0" y="0" width="24" height="24" rx="5" fill="#FF0000" />
                                <rect x="4" y="6" width="16" height="12" rx="3.5" fill="white" />
                                <polygon points="10,9.5 16,12 10,14.5" fill="#FF0000" />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>

            <div className="bottom-decoration">
                <img src={footerImage} alt="Variantis Footer" className="footer-image" />
            </div>
        </footer>
    );
};

export default PageFooter;
