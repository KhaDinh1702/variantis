import React from 'react';
import './FooterStats.css';
import variantisLogo from '../../assets/Variantis2.png';
import countriesImg from '../../assets/Tree/countries.png';
import employeeImg from '../../assets/Tree/employee.png';
import experienceImg from '../../assets/Tree/experience.png';
import goalsImg from '../../assets/Tree/goals.png';
import supplierImg from '../../assets/Tree/suplier.png';

const FooterStats = () => {
    return (
        <section className="footer-stats">
            <div className="footer-stats-container">
                <div className="stats-layout">
                    {/* Top Stat - Goals (Centered) */}
                    <div className="stat-item stat-top centered">
                        <img src={goalsImg} alt="Outstanding goals" className="stat-image small-icon" />
                        <div className="stat-text">
                            <div className="stat-number">30</div>
                            <div className="stat-label">Outstanding goals</div>
                        </div>
                    </div>

                    {/* Left Stat - Countries (Icon Left, Text Right) */}
                    <div className="stat-item stat-left row-layout">
                        <img src={countriesImg} alt="Countries" className="stat-image" />
                        <div className="stat-text text-left">
                            <div className="stat-number">20</div>
                            <div className="stat-label">Countries</div>
                        </div>
                    </div>

                    {/* Center Variantis Logo */}
                    <div className="tree-logo">
                        <img src={variantisLogo} alt="Variantis Logo" className="variantis-tree-image" />
                    </div>

                    {/* Right Stat - Experience (Text Left, Icon Right) */}
                    <div className="stat-item stat-right row-layout reverse">
                        <div className="stat-text text-right">
                            <div className="stat-number">20</div>
                            <div className="stat-label">Years of experience</div>
                        </div>
                        <img src={experienceImg} alt="Years of excellence" className="stat-image" />
                    </div>

                    {/* Bottom Left Stat - Employee (Icon Left, Text Right) */}
                    <div className="stat-item stat-bottom-left row-layout">
                        <img src={employeeImg} alt="World level experts" className="stat-image" />
                        <div className="stat-text text-left">
                            <div className="stat-number">500</div>
                            <div className="stat-label">Employees</div>
                        </div>
                    </div>

                    {/* Bottom Right Stat - Supplier (Text Left, Icon Right) */}
                    <div className="stat-item stat-bottom-right row-layout reverse">
                        <div className="stat-text text-right">
                            <div className="stat-number">15</div>
                            <div className="stat-label">Worldwide suppliers</div>
                        </div>
                        <img src={supplierImg} alt="Partnerships" className="stat-image" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FooterStats;
