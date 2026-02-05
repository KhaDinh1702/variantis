import React from 'react';
import './NewsEvents.css';
import researchImage from '../../assets/research.png';

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
            image: researchImage
        },
        {
            date: 'September',
            title: 'FI India, 3-5 September, Delhi, India',
            description: 'Vitafoods Asia, 17-19 September, Bangkok, Thailand\nBiennale Photoclimat, 12-12 October, Paris, France\nTrees of Life exhibition, 27-27 November, Rouen, France',
            image: researchImage
        },
        {
            date: 'September',
            title: 'FI India, 3-5 September, Delhi, India',
            description: 'Vitafoods Asia, 17-19 September, Bangkok, Thailand\nBiennale Photoclimat, 12-12 October, Paris, France\nTrees of Life exhibition, 27-27 November, Rouen, France',
            image: researchImage
        }
    ];

    return (
        <section className="news-events">
            <div className="news-header-wrapper">
                <div className="news-header-container">
                    <div className="news-header">
                        <h2 className="news-title">NEWS & EVENTS</h2>
                        <span className="news-subtitle">Stay up to date on business latest goals.....</span>
                    </div>
                </div>
            </div>

            <div className="news-events-container">

                <div className="news-grid">
                    {newsItems.map((item, index) => (
                        <div key={index} className="news-card">
                            <div className="news-card-image">
                                <img src={item.image} alt="News" />

                            </div>
                            <div className="news-card-content">
                                <div className="news-date"> {item.date}</div>
                                <div className="news-item-text">
                                    <p className="highlight">{item.title}</p>
                                    <p>{item.description}</p>
                                </div>
                                <div className="news-date"> October</div>
                                <div className="news-item-text">
                                    <p>Food Tech Summit, 8-9 October, Mexico city, Mexico</p>
                                    <p>Food Matters live, 8-9 October, Ascot, United Kingdom</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="go-to-top" onClick={scrollToTop}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#2d3748" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="arrow-icon">
                        <path d="M17 11l-5-5-5 5" />
                        <path d="M17 18l-5-5-5 5" />
                    </svg>
                    <span>Go to TOP</span>
                </div>
            </div>
        </section>
    );
};

export default NewsEvents;
