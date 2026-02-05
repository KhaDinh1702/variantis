import React from 'react';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import ContentSection from './components/ContentSection/ContentSection';
import FooterStats from './components/FooterStats/FooterStats';
import NewsEvents from './components/NewsEvents/NewsEvents';
import PageFooter from './components/PageFooter/PageFooter';
import './App.css';

// Import the background image from assets
import labImage from './assets/background.png';
import treeBackground from './assets/background2.png';

function App() {
  return (
    <div className="app">
      <Header />
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
      <PageFooter />
    </div>
  );
}

export default App;
