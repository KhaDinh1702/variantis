import React from 'react';
import './ContentSection.css';

const ContentSection = ({ title, content, imageSrc, imagePosition = 'left', smallText = '' }) => {
    const isImageLeft = imagePosition === 'left';

    return (
        <section className={`content-section ${isImageLeft ? 'image-left' : 'image-right'}`}>
            <div className="content-section-container">
                {isImageLeft && (
                    <div className="image-container">
                        <div className="circular-image">
                            <img src={imageSrc} alt={title} />
                        </div>

                    </div>
                )}

                <div className="text-container">
                    <h2 className="section-title">{title}</h2>
                    {smallText && <p className="small-text">{smallText}</p>}
                    <p className="section-content">{content}</p>
                </div>

                {!isImageLeft && (
                    <div className="image-container">
                        <div className="circular-image">
                            <img src={imageSrc} alt={title} />
                        </div>

                    </div>
                )}
            </div>
        </section>
    );
};

export default ContentSection;
