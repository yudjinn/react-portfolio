import React, { useState, useLayoutEffect, useRef } from 'react';

function ResumeSkills(props) {
  const [skillsProgress, setSkillsProgress] = useState(true);
  const skillsRef = useRef();

  useLayoutEffect(() => {
    const updateHeight = () => {
      if (!skillsRef.current) return;

      const { height } = skillsRef.current.getBoundingClientRect();

      setSkillsProgress(window.scrollY / (height - window.innerHeight));
    };

    updateHeight();
    window.addEventListener('scroll', updateHeight);
    return () => {
      window.removeEventListener('scroll', updateHeight);
    };
  }, []);

  const skills = {
    python: {
      level: 80,
    },
    rust: {
      level: 30,
    },
  };

  const position = Math.max(1 - skillsProgress, 0);
  const DIAMETER = 50;
  const STROKE_WIDTH = 6;
  const RADIUS = DIAMETER / 2 - STROKE_WIDTH / 2;

  return (
    <section id='resume_skills'>
      <div className='row skill'>
        <div className='three columns header-col'>
          <h1>
            <span>Skills</span>
          </h1>
        </div>
        <div>
          <svg width='400' height='110'>
            <rect width='300' height='100' />
          </svg>
        </div>

        <div className='nine columns main-col'>
          <p>{props.resumeData.skillsDescription}</p>

          <div className='bars' ref={skillsRef}>
            <ul className='skills'>
              {props.resumeData.skills &&
                props.resumeData.skills.map((item) => {
                  return (
                    <li id='baranims'>
                      <svg
                        // viewBox='0 100 600 100'
                        width='100%'
                        height='100%'
                        className='rect-progress'
                      >
                        <line
                          x1='0'
                          x2='690'
                          stroke='tomato'
                          fill='transparent'
                          strokeWidth='100'
                          style={{
                            strokeDasharray: 800,
                            strokeDashoffset: `${item.value * 8 * position}`,
                          }}
                        />
                      </svg>
                      {/* <VisibilitySensor
                        active={false}
                        onChange={setSkillsProgress}
                        delayedCall={true}
                        intervalDelay={3000}
                      >
                        <span
                          className={`bar-expand ${item.skillname.toLowerCase()} `}
                        />
                      </VisibilitySensor> */}
                      <em>{item.skillname}</em>
                    </li>
                  );
                })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ResumeSkills;
