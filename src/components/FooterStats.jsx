import React from 'react';
import './FooterStats.css';
import variantisLogo from '../assets/Variantis2.png';

const FooterStats = () => {
    const stats = [
        {
            icon: '🌍',
            number: '20',
            label: 'Countries',
            position: 'left'
        },
        {
            icon: '🎯',
            number: '30',
            label: 'Outstanding goals',
            position: 'top'
        },
        {
            icon: '⚙️',
            number: '20',
            label: 'Years of excellence',
            position: 'right'
        },
        {
            icon: '👥',
            number: '500',
            label: 'World level experts',
            position: 'bottom-left'
        },
        {
            icon: '🧩',
            number: '15',
            label: 'Partnerships',
            position: 'bottom-right'
        }
    ];

    return (
        <section className="footer-stats">
            <div className="footer-stats-container">
                <div className="stats-layout">
                    {/* Top Stat */}
                    <div className="stat-item stat-top">
                        <div className="stat-icon">🎯</div>
                        <div className="stat-number">30</div>
                        <div className="stat-label">Outstanding goals</div>
                    </div>

                    {/* Left Stat */}
                    <div className="stat-item stat-left">
                        <div className="stat-icon">🌍</div>
                        <div className="stat-number">20</div>
                        <div className="stat-label">Countries</div>
                    </div>

                    {/* Center Variantis Logo */}
                    <div className="tree-logo">
                        <img src={variantisLogo} alt="Variantis Logo" className="variantis-tree-image" />
                    </div>

                    {/* Right Stat */}
                    <div className="stat-item stat-right">
                        <div className="stat-icon">⚙️</div>
                        <div className="stat-number">20</div>
                        <div className="stat-label">Years of excellence</div>
                    </div>

                    {/* Bottom Left Stat */}
                    <div className="stat-item stat-bottom-left">
                        <div className="stat-icon">👥</div>
                        <div className="stat-number">500</div>
                        <div className="stat-label">World level experts</div>
                    </div>

                    {/* Bottom Right Stat */}
                    <div className="stat-item stat-bottom-right">
                        <div className="stat-icon">🧩</div>
                        <div className="stat-number">15</div>
                        <div className="stat-label">Partnerships</div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FooterStats;
