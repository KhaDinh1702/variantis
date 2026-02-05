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
                    {smallText && <p className="small-text">{smallText}</p>}
                    <h2 className="section-title">{title.replace(/\\n/g, '\n')}</h2>

                    {(() => {
                        // Split content specific to user request: Bold first part, normal second part starting with "Ut wisi"
                        const splitMarker = "Ut wisi";
                        let mainText = content;
                        let description = "";

                        if (content.includes(splitMarker)) {
                            const parts = content.split(splitMarker);
                            mainText = parts[0];
                            description = splitMarker + parts.slice(1).join(splitMarker);
                        }

                        return (
                            <div className="text-content-wrapper">
                                <p className="section-content bold-text">{mainText}</p>
                                {description && <p className="section-content normal-text">{description}</p>}
                            </div>
                        );
                    })()}
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
