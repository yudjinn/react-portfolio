import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import resumeData from './resumeData';
import About from './components/About';
import Footer from './components/Footer';
// import Contact from './components/Contact';
import Portfolio from './components/Portfolio';
import Resume from './components/Resume';
import ResumeSkills from './components/ResumeSkills';
import Testimonials from './components/Testimonials';
import Slide from 'react-reveal/Slide';
import VisibilitySensor from 'react-visibility-sensor';

function App() {
  const [aboutVisible, setAboutVisible] = useState();
  const [resumeVisible, setResumeVisible] = useState();
  const [resumeSkillsVisible, setResumeSkillsVisible] = useState();
  const [portfolioVisible, setPortfolioVisible] = useState();

  return (
    <div className='App'>
      <Header resumeData={resumeData} />
      <VisibilitySensor
        onChange={setAboutVisible}
        delayedCall={true}
        intervalDelay={1000}
        partialVisibility={true}
        offset={{ top: 150, bottom: 10 }}
      >
        <Slide left opposite duration={1000} when={aboutVisible}>
          <About resumeData={resumeData} />
        </Slide>
      </VisibilitySensor>
      <VisibilitySensor
        onChange={setResumeVisible}
        delayedCall={true}
        intervalDelay={1000}
        partialVisibility={true}
        offset={{ top: 150, bottom: 10 }}
      >
        <Slide right opposite duration={1000} when={resumeVisible}>
          <Resume resumeData={resumeData} />
        </Slide>
      </VisibilitySensor>
      <VisibilitySensor
        onChange={setResumeSkillsVisible}
        delayedCall={true}
        intervalDelay={1000}
        partialVisibility={true}
        offset={{ top: 150, bottom: 10 }}
      >
        <Slide right opposite duration={1000} when={resumeSkillsVisible}>
          <ResumeSkills resumeData={resumeData} />
        </Slide>
      </VisibilitySensor>
      <VisibilitySensor
        onChange={setPortfolioVisible}
        delayedCall={true}
        intervalDelay={1000}
        partialVisibility={true}
        offset={{ top: 150, bottom: 10 }}
      >
        <Slide left opposite duration={1000} when={portfolioVisible}>
          <Portfolio resumeData={resumeData} />
        </Slide>
      </VisibilitySensor>
      <Testimonials resumeData={resumeData} />
      {/* <Contact resumeData={resumeData} /> */}
      <Footer resumeData={resumeData} />
    </div>
  );
}

export default App;
