import React from 'react';

function Testimonials(props) {
  return (
    <section id='testimonials'>
      <div className='text-container'>
        <div className='row'>
          <div className='two columns header-col'>
            <h1>
              <span>Client Testimonials</span>
            </h1>
          </div>
          <div className='ten columns flex-container'>
            <div className='flexslider'>
              <ul className='slides'>
                {props.resumeData.testimonials &&
                  props.resumeData.testimonials.map((item) => {
                    return (
                      <li>
                        <blockquote>
                          <p>{item.description}</p>
                          <cite>{item.name}</cite>
                        </blockquote>
                      </li>
                    );
                  })}
              </ul>
            </div>{' '}
            {/* div.flexslider ends */}
          </div>{' '}
          {/* div.flex-container ends */}
        </div>{' '}
        {/* row ends */}
      </div>{' '}
      {/* text-container ends */}
    </section>
  );
}

export default Testimonials;
