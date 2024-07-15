import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import './Social.css';
import Leetcode from './../../assets/Leetcode.png'

const Social = () => {
    return (
        <div className='Social'>
            <a href="https://github.com/AasimKhan02" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faGithub} size="2x" className='icon' />
            </a>
            <a href="https://linkedin.com/in/mohd-aasim-khan-2b9478285" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faLinkedin} size="2x" className='icon' />
            </a>
            <a href="https://leetcode.com/u/Aasim_Khan">
                <img src={Leetcode} alt="" className='Leetcode'/>
            </a>
            <a href="https://instagram.com/aasim.khan08" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faInstagram} size="2x" className='icon' />
            </a>
            <a href="https://wa.me/9372834570" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faWhatsapp} size="2x" className='icon' />
            </a>
        </div>
    );
}

export default Social;
