import React from 'react';
import NewsEvents from '../NewsEvents/NewsEvents';
import treeBackground from '../../assets/background2.png';

const NewsInsights = () => {
    return (
        <div className="main-content-background" style={{
            backgroundImage: `url(${treeBackground})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            minHeight: '100vh',
            paddingTop: '80px' // Add padding for fixed header
        }}>
            <NewsEvents />
        </div>
    );
};

export default NewsInsights;
