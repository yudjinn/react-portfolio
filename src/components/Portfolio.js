import React from 'react';

function Portfolio(props) {
  return (
    <section id='portfolio'>
      <div className='row'>
        <div className='twelve columns collapsed'>
          <h1>Check Out Some of My Works.</h1>
          <div
            id='portfolio-wrapper'
            className='bgrid-quarters s-bgrid-thirds cf'
          >
            {props.resumeData.portfolio &&
              props.resumeData.portfolio.map((item) => {
                return (
                  <div className='columns portfolio-item'>
                    <div className='item-wrap'>
                      <a href='#modal-01'>
                        <img
                          src={`${item.imgurl}`}
                          className='item-img'
                          alt='portfolio image'
                        />
                        <div className='overlay'>
                          <div className='portfolio-item-meta'>
                            <h5>{item.name}</h5>
                            <p>{item.description}</p>
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
