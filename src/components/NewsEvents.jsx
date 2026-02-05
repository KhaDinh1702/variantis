import React from 'react';
import './NewsEvents.css';
import labImage from '../assets/background.png'; // Reusing background for news cards as placeholder

const NewsEvents = () => {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    const newsItems = [
        {
            date: 'September',
            title: 'FI India, 3-5 September, Delhi, India',
            description: 'Vitafoods Asia, 17-19 September, Bangkok, Thailand\nBiennale Photoclimat, 12-12 October, Paris, France\nTrees of Life exhibition, 27-27 November, Rouen, France',
            image: labImage
        },
        {
            date: 'September',
            title: 'FI India, 3-5 September, Delhi, India',
            description: 'Vitafoods Asia, 17-19 September, Bangkok, Thailand\nBiennale Photoclimat, 12-12 October, Paris, France\nTrees of Life exhibition, 27-27 November, Rouen, France',
            image: labImage
        },
        {
            date: 'September',
            title: 'FI India, 3-5 September, Delhi, India',
            description: 'Vitafoods Asia, 17-19 September, Bangkok, Thailand\nBiennale Photoclimat, 12-12 October, Paris, France\nTrees of Life exhibition, 27-27 November, Rouen, France',
            image: labImage
        }
    ];

    return (
        <section className="news-events">
            <div className="news-events-container">
                <div className="news-header">
                    <h2 className="news-title">NEWS & EVENTS</h2>
                    <span className="news-subtitle">Stay up to date on business latest goals.....</span>
                </div>

                <div className="news-grid">
                    {newsItems.map((item, index) => (
                        <div key={index} className="news-card">
                            <div className="news-card-image">
                                <img src={item.image} alt="News" />
                                <div className="overlay-text">RESEARCH</div>
                                <div className="overlay-graphic">
                                    <svg viewBox="0 0 100 100" className="molecule-icon">
                                        <circle cx="50" cy="50" r="45" stroke="white" strokeWidth="2" fill="none" opacity="0.5" />
                                        <circle cx="50" cy="50" r="5" fill="white" />
                                        <line x1="50" y1="50" x2="80" y2="20" stroke="white" strokeWidth="2" />
                                        <circle cx="80" cy="20" r="3" fill="white" />
                                    </svg>
                                </div>
                            </div>
                            <div className="news-card-content">
                                <div className="news-date">📅 {item.date}</div>
                                <div className="news-item-text">
                                    <p className="highlight">{item.title}</p>
                                    <p>{item.description}</p>
                                </div>
                                <div className="news-date">📅 October</div>
                                <div className="news-item-text">
                                    <p>Food Tech Summit, 8-9 October, Mexico city, Mexico</p>
                                    <p>Food Matters live, 8-9 October, Ascot, United Kingdom</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="go-to-top" onClick={scrollToTop}>
                    <div className="arrow-up"></div>
                    <span>Go to TOP</span>
                </div>
            </div>
        </section>
    );
};

export default NewsEvents;
