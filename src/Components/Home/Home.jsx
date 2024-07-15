import React, { useState, useEffect } from 'react';
import './Home.css';

const professions = ['Web developer', 'AI Enthusiast', 'Python developer'];

const Frame1 = () => {
    const [currentProfession, setCurrentProfession] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentProfession((prevProfession) => (prevProfession + 1) % professions.length);
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className='Home container'>
            <h3>Hi! My name is</h3>
            <h1>Aasim Khan</h1>
            <div className="profession">
                <li className='profession-item'>{professions[currentProfession]}</li>
            </div>
        </div>
    );
}

export default Frame1;
