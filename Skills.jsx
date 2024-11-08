import React from 'react';
import '../styles/styleskills.css'; 

const liste = [
  { skill: 'HTML', level: '100%', icon: 'bi bi-filetype-html' },
  { skill: 'CSS', level: '100%', icon: 'bi bi-filetype-css' },
  { skill: 'JavaScript', level: '70%', icon: 'bi bi-filetype-js' },
  { skill: 'React', level: '60%', icon: 'bi bi-badge-3d' },
  { skill: 'Python', level: '40%', icon: 'bi bi-box' },
  { skill: 'Bootstrap', level: '100%', icon: 'bi bi-bootstrap' },
];

function Skills (){
  return (
    <section className="skills" id='skills'>
      <div className="container">
        <h2 className="text-center">Mes Compétences</h2>
        <div className="row justify-content-center">
          <div className="col-12">
            <div className="d-flex justify-content-around flex-wrap">
              {liste.map((skillData, index) => (
                <div className="col-md-4 mb-4" key={index}>
                  <div className="card">
                    <div className="card-body">
                      <h5 className="card-title">
                        <i className={skillData.icon}></i>
                        {skillData.skill}
                      </h5>
                      <div className="progress">
                        <div
                          className="progress-bar"
                          role="progressbar"
                          style={{ width: skillData.level }}
                          aria-valuenow={parseInt(skillData.level)}
                          aria-valuemin="0"
                          aria-valuemax="100"
                        >
                          {skillData.level}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
