import React, { useState } from 'react';
import './Hero.css';
import backgroundImage from '../../assets/background.png';

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
                <div className="hero-text">
                    <p className="hero-tagline">Where Nature Meets Scientific Precision</p>
                    <h1 className="hero-title">Advanced Nutraceutical Formulation & Manufacturing</h1>
                    <p className="hero-subheadline">We combine botanical expertise with scientific rigor to develop, formulate and manufacture high-quality nutraceutical solutions for global partners.</p>
                    <p className="hero-supporting">From concept to commercialization, Variantis delivers controlled natural innovation — powered by research, regulatory excellence, and industrial performance.</p>
                    <div className="hero-cta">
                        <a href="#capabilities" className="cta-button cta-primary">Discover Our Capabilities</a>
                        <a href="#contact" className="cta-button cta-secondary">Contact Our Experts</a>
                    </div>
                </div>
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
                            title={circle.fullTitle || `${circle.title} ${circle.subtitle}`}
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
