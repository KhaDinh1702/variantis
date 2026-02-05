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
                    title="To meet Consumers' expectations"
                    content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi."
                    imageSrc={labImage}
                    imagePosition="left"
                />

                <ContentSection
                    title="Inspire by \n NATURE"
                    content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi."
                    imageSrc={labImage}
                    imagePosition="right"
                />

                <ContentSection
                    title="Sustainability: our guide to Nature's gifts"
                    content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi."
                    imageSrc={labImage}
                    imagePosition="left"
                />

                <FooterStats />
                <NewsEvents />
            </div>
        </>
    );
};

export default Home;
