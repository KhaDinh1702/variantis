import React, { useState } from 'react';
import './Hero.css';
import backgroundImage from '../assets/background.png';

const Hero = () => {
    const [activeCircle, setActiveCircle] = useState(null);

    const circles = [
        { id: 1, title: 'Products', subtitle: '& Solutions', top: '15%' },
        { id: 2, title: 'R&D', subtitle: 'Capabilities', top: '42%' },
        { id: 3, title: 'CDMO', subtitle: 'Services', top: '69%' }
    ];

    return (
        <section className="hero">
            <div className="hero-background" style={{ backgroundImage: `url(${backgroundImage})` }}></div>
            <div className="hero-overlay"></div>

            <div className="hero-content">
                <div className="circular-nav">
                    {circles.map((circle, index) => (
                        <div
                            key={circle.id}
                            className={`circle-button ${activeCircle === circle.id ? 'active' : ''}`}
                            style={{
                                top: circle.top,
                                animationDelay: `${index * 0.2}s`
                            }}
                            onMouseEnter={() => setActiveCircle(circle.id)}
                            onMouseLeave={() => setActiveCircle(null)}
                        >
                            <div className="circle-outer"></div>
                            <div className="circle-inner">
                                <div className="circle-title">{circle.title}</div>
                                <div className="circle-subtitle">{circle.subtitle}</div>
                            </div>
                            <div className="circle-ripple"></div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Hero;
