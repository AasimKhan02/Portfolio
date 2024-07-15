import React, { useState } from 'react';
import { Link } from 'react-scroll';
import './Navbar.css';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    }

    const closeMenu = () => {
        setIsOpen(false);
    }

    return (
        <nav className="items">
            <div className="logo">Aasim.codes</div>
            <div className={`menu-icon ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
                <div className="line1"></div>
                <div className="line2"></div>
                <div className="line3"></div>
            </div>
            <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
                <button className="close-btn" onClick={closeMenu}>&times;</button>
                <li><Link to="home" smooth={true} duration={500}>Home</Link></li>
                <li><Link to="about" smooth={true} duration={500}>About</Link></li>
                <li><Link to="skills" smooth={true} duration={500}>Skills</Link></li>
                <li><Link to="projects" smooth={true} duration={500}>Projects</Link></li>
                <li><Link to="contact" smooth={true} duration={500}>Contact</Link></li>
                <a href="/Resume.pdf" download className="btn">Resume</a>
            </ul>
        </nav>
    )
}

export default Navbar;
