import React from 'react';
import Hero from '../Hero/Hero';
import ContentSection from '../ContentSection/ContentSection';
import FooterStats from '../FooterStats/FooterStats';
import NewsEvents from '../NewsEvents/NewsEvents';

// Import the background image from assets
// Adjusting paths since we are now in components/Home
import labImage from '../../assets/background.png';
import treeBackground from '../../assets/background2.png';

const Home = () => {
    return (
        <>
            <Hero />
            <div className="main-content-background" style={{
                backgroundImage: `url(${treeBackground})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
            }}>

                <ContentSection
                    title="Controlled Natural Innovation"
                    imageSrc={labImage}
                    imagePosition="left"
                >
                    <p className="content-intro">
                        Variantis is a European nutraceutical partner specializing in the distribution of qualified ingredients for health.
                    </p>
                    <p className="content-intro">
                        We bridge the gap between:
                    </p>
                    <ul className="content-list">
                        <li>Natural active ingredients</li>
                        <li>Scientific validation</li>
                        <li>Regulatory compliance</li>
                        <li>Industrial scalability</li>
                    </ul>
                    <p className="content-intro">
                        Our mission is to transform natural compounds into reliable, effective and compliant health solutions.
                    </p>
                </ContentSection>

                <ContentSection
                    title="From Concept to Finished Product"
                    imageSrc={labImage}
                    imagePosition="right"
                >
                    <div className="content-subsection">
                        <h3 className="subsection-title">
                            <span className="subsection-icon">🔬</span>
                            Research & Development
                        </h3>
                        <ul className="content-list">
                            <li>Ingredient sourcing & validation</li>
                            <li>Formulation development</li>
                            <li>Stability studies</li>
                            <li>Bioavailability optimization</li>
                            <li>Technical documentation support</li>
                        </ul>
                    </div>

                    <div className="content-subsection">
                        <h3 className="subsection-title">
                            <span className="subsection-icon">🏭</span>
                            Industrial Manufacturing
                        </h3>
                        <ul className="content-list">
                            <li>Powder blends</li>
                            <li>Small to large batch capacity</li>
                            <li>Strict ISO 22000 standards, GMP food, Organic</li>
                            <li>Full traceability</li>
                        </ul>
                    </div>

                    <div className="content-subsection">
                        <h3 className="subsection-title">
                            <span className="subsection-icon">📑</span>
                            Quality & Regulatory
                        </h3>
                        <ul className="content-list">
                            <li>European regulatory compliance</li>
                            <li>Quality control & analytical testing</li>
                            <li>Raw material qualification</li>
                            <li>Documentation & export support</li>
                        </ul>
                    </div>

                    <p className="content-closing">
                        We operate as an extension of your team — combining flexibility, responsiveness and scientific discipline.
                    </p>
                </ContentSection>

                <ContentSection
                    title="Built on Precision. Driven by Quality."
                    imageSrc={labImage}
                    imagePosition="left"
                >
                    <ul className="content-list checkmark-list">
                        <li>European manufacturing standards</li>
                        <li>Integrated R&D capabilities</li>
                        <li>Transparent sourcing</li>
                        <li>Regulatory expertise</li>
                        <li>Export-oriented structure</li>
                    </ul>
                    <p className="content-closing">
                        Our commitment: delivering consistent quality with measurable performance.
                    </p>
                </ContentSection>

                <ContentSection
                    title="Science-Driven Natural Performance"
                    imageSrc={labImage}
                    imagePosition="right"
                >
                    <p className="content-intro">
                        At Variantis, we believe that natural health solutions must be:
                    </p>
                    <ul className="content-list">
                        <li>Scientifically validated</li>
                        <li>Industrially controlled</li>
                        <li>Commercially viable</li>
                    </ul>
                    <p className="content-intro">
                        We integrate natural ingredients within structured, reproducible and quality-controlled processes to ensure reliability at scale.
                    </p>
                </ContentSection>

                <ContentSection
                    title="Supporting International Growth"
                    imageSrc={labImage}
                    imagePosition="left"
                >
                    <p className="content-intro">
                        We collaborate with:
                    </p>
                    <ul className="content-list">
                        <li>Nutraceutical brands</li>
                        <li>Pharma brands</li>
                        <li>Contract Development & Manufacturing Organizations</li>
                    </ul>
                    <p className="content-intro">
                        Our production model is designed to support international expansion with regulatory confidence.
                    </p>
                </ContentSection>

                <ContentSection
                    title="Let's Build the Next Generation of Natural Health Solutions"
                    imageSrc={labImage}
                    imagePosition="right"
                >
                    <p className="content-intro">
                        Partner with Variantis to transform your formulation concepts into scalable, compliant and high-performance nutraceutical ingredients.
                    </p>
                    <div className="hero-cta">
                        <a href="#consultation" className="cta-button cta-primary">Request a Consultation</a>
                        <a href="#profile" className="cta-button cta-secondary">Download Company Profile</a>
                    </div>
                </ContentSection>

                <FooterStats />
                <NewsEvents />
            </div>
        </>
    );
};

export default Home;
