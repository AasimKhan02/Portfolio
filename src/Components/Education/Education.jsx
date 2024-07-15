import React from 'react';
import './Education.css';
import book from './../../assets/book.png';
import school from './../../assets/school.png';
import hat from './../../assets/college-graduation.png';

const Education = () => {
  return (
    <div className='Education'>
      <h1>My Education</h1>
      <div className="Cards">
        <li className='ssc'>
          <img src={book} alt="" />
          <h1>10TH</h1>
          <div className="hover-text">Completed My 10th from Bharat English High School scoring 77%</div>
        </li>
        <li className='hsc'>
          <img src={school} alt="" />
          <h1>12TH</h1>
          <div className="hover-text">Completed My 12th from Abdullah Patel Junior college scoring 64%</div>
        </li>
        <li className='college'>
          <img src={hat} alt="" />
          <h1>COLLEGE</h1>
          <div className="hover-text">Currently in Anjuman-i-islam kalsekar technical campus with 7.8 cgpa</div>
        </li>
      </div>
    </div>
  );
};

export default Education;
