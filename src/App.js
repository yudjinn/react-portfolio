import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import resumeData from './resumeData';
import About from './components/About';
import Footer from './components/Footer';
import Contact from './components/Contact';
import Portfolio from './components/Portfolio';
import Resume from './components/Resume';
import Testimonials from './components/Testimonials';
import Bounce from 'react-reveal/Bounce';
import VisibilitySensor from 'react-visibility-sensor';

function App() {
  const [aboutVisible, setAboutVisible] = useState();
  const [resumeVisible, setResumeVisible] = useState();
  const [portfolioVisible, setPortfolioVisible] = useState();

  return (
    <div className='App'>
      <Header resumeData={resumeData} />
      <VisibilitySensor
        onChange={setAboutVisible}
        delayedCall={true}
        intervalDelay={1000}
        partialVisibility={true}
        offset={{ top: 150, bottom: 75 }}
      >
        <Bounce left opposite duration={1000} when={aboutVisible}>
          <About resumeData={resumeData} />
        </Bounce>
      </VisibilitySensor>
      <VisibilitySensor
        onChange={setResumeVisible}
        delayedCall={true}
        intervalDelay={1000}
        partialVisibility={true}
        offset={{ top: 150, bottom: 75 }}
      >
        <Bounce right opposite duration={1000} when={resumeVisible}>
          <Resume resumeData={resumeData} />
        </Bounce>
      </VisibilitySensor>
      <VisibilitySensor
        onChange={setPortfolioVisible}
        delayedCall={true}
        intervalDelay={1000}
        partialVisibility={true}
        offset={{ top: 150, bottom: 75 }}
      >
        <Bounce left opposite duration={1000} when={portfolioVisible}>
          <Portfolio resumeData={resumeData} />
        </Bounce>
      </VisibilitySensor>
      <Testimonials resumeData={resumeData} />
      {/* <Contact resumeData={resumeData} /> */}
      <Footer resumeData={resumeData} />
    </div>
  );
}

export default App;
