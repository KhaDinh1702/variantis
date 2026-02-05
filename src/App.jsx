import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ContentSection from './components/ContentSection';
import FooterStats from './components/FooterStats';
import './App.css';

// Import the background image from assets
import labImage from './assets/background.png';

function App() {
  return (
    <div className="app">
      <Header />
      <Hero />

      <ContentSection
        title="To meet Consumers' expectations"
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi."
        imageSrc={labImage}
        imagePosition="left"
      />

      <ContentSection
        title="NATURE"
        smallText="Inspire by"
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
    </div>
  );
}

export default App;
