import React from 'react';
import Typed from 'react-typed';
import Delay from 'react-delay';
import FadeIn from 'react-fade-in';

function Header(props) {
  return (
    <>
      <header id='home'>
        <nav id='nav-wrap'>
          <a className='mobile-btn' href='#nav-wrap' title='Show navigation'>
            Show navigation
          </a>
          <a className='mobile-btn' href='#' title='Hide navigation'>
            Hide navigation
          </a>
          <ul id='nav' className='nav'>
            <li className='current'>
              <a className='smoothscroll' href='#home'>
                Home
              </a>
            </li>
            <li>
              <a className='smoothscroll' href='#about'>
                About
              </a>
            </li>
            <li>
              <a className='smoothscroll' href='#resume'>
                Resume
              </a>
            </li>
            <li>
              <a className='smoothscroll' href='#portfolio'>
                Works
              </a>
            </li>
            <li>
              <a className='smoothscroll' href='#testimonials'>
                Testimonials
              </a>
            </li>
            <li>
              <a className='smoothscroll' href='#contact'>
                Contact
              </a>
            </li>
          </ul>
        </nav>

        <div className='row banner'>
          <div className='banner-text'>
            <h1 className='responsive-headline'>
              <Typed
                strings={[`I am ${props.resumeData.name}.`]}
                typeSpeed={40}
              />
            </h1>
            <FadeIn delay={2000} transitionDuration={800}>
              <h3 style={{ color: '#fff', fontFamily: 'sans-serif ' }}>
                I am a {props.resumeData.role}.
                {props.resumeData.roleDescription}
              </h3>
            </FadeIn>
            <hr />
            <ul className='social'>
              {props.resumeData.socialLinks &&
                props.resumeData.socialLinks.map((item) => {
                  return (
                    <li key={item.name}>
                      <a href={item.url} target='_blank'>
                        <i className={item.className}></i>
                      </a>
                    </li>
                  );
                })}
            </ul>
          </div>
        </div>

        <p className='scrolldown'>
          <a className='smoothscroll' href='#about'>
            <i className='icon-down-circle'></i>
          </a>
        </p>
      </header>
    </>
  );
}

export default Header;
