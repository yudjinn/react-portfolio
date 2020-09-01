import React from 'react';

function Resume(props) {
  return (
    <section id='resume'>
      <div className='row education'>
        <div className='three columns header-col'>
          <h1>
            <span>Education</span>
          </h1>
        </div>

        <div className='nine columns main-col'>
          {props.resumeData.education &&
            props.resumeData.education.map((item) => {
              return (
                <div className='row item'>
                  <div className='twelve columns'>
                    <h3>{item.UniversityName}</h3>
                    <p className='info'>
                      {item.specialization}
                      <span>&bull;</span>{' '}
                      <em className='date'>
                        {item.MonthOfPassing} {item.YearOfPassing}
                      </em>
                    </p>
                    <p>{item.Achievements}</p>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
      <div className='row work'>
        <div className='three columns header-col'>
          <h1>
            <span>Work</span>
          </h1>
        </div>

        <div className='nine columns main-col'>
          {props.resumeData.work &&
            props.resumeData.work.map((item) => {
              return (
                <div className='row item'>
                  <div className='twelve columns'>
                    <h3>{item.CompanyName}</h3>
                    <p className='info'>
                      {item.specialization}
                      <span>&bull;</span>{' '}
                      <em className='date'>
                        {item.MonthOfLeaving} {item.YearOfLeaving}
                      </em>
                    </p>
                    <p>{item.Achievements}</p>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </section>
  );
}

export default Resume;
