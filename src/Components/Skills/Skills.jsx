import React from 'react';
import './Skills.css';
import web from './../../assets/coding.png';
import ML from './../../assets/machine-learning.png';
import softskills from './../../assets/Soft skills.png';
import tools from './../../assets/tools.png';

const Skills = () => {
  return (
    <div className='Skills container'>
      <h1>My Skills</h1>
      <div className='cards'>
        <li>
          <img src={web} alt='' />
          <h2>Web development</h2>
          <div className='hover-text'>
            <h3>HTML</h3>
            <h3>CSS</h3>
            <h3>Javascript</h3>
            <h3>ReactJS</h3>
            <h3>MySQL</h3>
            <h3>Django</h3>
          </div>
        </li>
        <li>
          <img src={ML} alt='' />
          <h2>Machine Learning</h2>
          <div className='hover-text'>
            <h3>Python</h3>
            <h3>Pandas</h3>
            <h3>Numpy</h3>
          </div>
        </li>
        <li>
          <img src={softskills} alt='' />
          <h2>Soft Skills/ UX Design</h2>
          <div className='hover-text'>
            <h3>Responsive Design</h3>
            <h3>Problem Solving</h3>
            <h3>Time Management</h3>
            <h3>Teamwork and Collaboration</h3>
            <h3>Creativity</h3>
          </div>
        </li>
        <li>
          <img src={tools} alt='' />
          <h2>Others / Tools</h2>
          <div className='hover-text'>
            <h3>C programming</h3>
            <h3>Git</h3>
            <h3>Github</h3>
            <h3>Figma</h3>
            <h3>Jupyter Notebooks</h3>
            <h3>Visual studio code</h3>
          </div>
        </li>
      </div>
    </div>
  );
};

export default Skills;
