import React from 'react';

function About(props) {
  return (
    <section id='about'>
      <div className='row'>
        <div className='three columns'>
          <img className='profile-pic' src='images/profilepic.png' alt='' />
        </div>

        <div className='nine columns main-col'>
          <h2>About Me</h2>
          <p className='aboutme-details'>{props.resumeData.aboutme}</p>

          <div className='row'>
            <div className='columns contact-details'>
              <h2>Contact Details</h2>
              <p className='address'>
                <span>{props.resumeData.name}</span>
                <br></br>
                <span>{props.resumeData.address}</span>
                <br></br>
                <span>{props.resumeData.website}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
