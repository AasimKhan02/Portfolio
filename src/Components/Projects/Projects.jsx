import React, { useState } from 'react';
import './Projects.css';
import Weatherimg from './../../assets/Weather website img.png'
import Quizimg from './../../assets/Quiz website img.png'
import library from './../../assets/Library.jpg'
import Portfolio from './../../assets/Portfolio image.png'

const Projects = () => {
    const [activePanel, setActivePanel] = useState(null);

    const togglePanel = (panel) => {
        setActivePanel(prevPanel => (prevPanel === panel ? null : panel));
    };

    const closePanel = () => {
        setActivePanel(null);
    };

    return (
        <div className='Project container'>
            <h1>My Projects</h1>
            <div className="Cards">
                <li className="Weather" onClick={() => togglePanel('Weather')}>
                    <div className="data">
                        <h2>Weather Forecasting Website</h2>
                    </div>
                </li>
                <li className="Quizes" onClick={() => togglePanel('Quizes')}>
                    <div className="data">
                        <h2>Online Quiz Website</h2>
                    </div>
                </li>
                <li className="Library" onClick={() => togglePanel('Library')}>
                    <div className="data">
                        <h2>Library Management System</h2>
                    </div>
                </li>
                <li className="Portfolio" onClick={() => togglePanel('Portfolio')}>
                    <div className="data">
                        <h2>Personal Portfolio</h2>
                    </div>
                </li>
            </div>
            <div className={`sidebar ${activePanel ? 'active' : ''}`}>
                {activePanel && (
                    <div className="panel-content">
                        {activePanel === 'Weather' && (
                            <>
                                <div className="header">
                                    <h1>description</h1>
                                    <button className="closebtn" onClick={closePanel}>×</button>
                                </div>
                                <div className="content">
                                    <div className="introduction">
                                        <h2>AXWeather</h2>
                                        <h4>Stay Ahead of the Weather: Accurate Forecasts at Your Fingertips</h4>
                                        <img src={Weatherimg} alt=""/>
                                    </div>
                                    <div className="about">
                                        <h2>About</h2>
                                        <h4>AXWeather is your go-to destination for precise weather forecasting. Explore, visualize, and stay updated with detailed weather parameters, interactive maps, and customizable alerts—all in one seamless platform.</h4>
                                    </div>
                                    <div className="tech">
                                        <h2>Tech Stack</h2>
                                        <ul>
                                            <li>HTML</li>
                                            <li>CSS</li>
                                            <li>Javascript</li>
                                            <li>API Integration</li>
                                        </ul>
                                    </div>
                                    <div className="key_features">
                                        <h2>Key Features</h2>
                                        <ul>
                                            <li>Provides current weather forecast which includes humidity, pressure, windspeed, precipitation, min and max temperature of day.</li>
                                            <li>Provides next 10 days weather forecast</li>
                                            <li>Provides interactive map</li>
                                            <li>Provides different map layers like precipitation</li>
                                            <li>Provides autocomplete or place search</li>
                                            <li>Provides Recommendation based on current Weather</li>
                                        </ul>
                                    </div>
                                    <div className="future">
                                        <h2>Future improvement</h2>
                                        <ul>
                                            <li>Better UI</li>
                                            <li>Responsive Design</li>
                                        </ul>
                                    </div>
                                    <div className="Github">
                                        <h2>Github </h2>      
                                        <a href="https://github.com/aasimkhan02/AXWeather">https://github.com/aasimkhan02/AXWeather</a>
                                    </div>
                                </div>
                            </>
                        )}
                        {activePanel === 'Quizes' && (
                            <>
                                <div className="header">
                                    <h1>description</h1>
                                    <button className="closebtn" onClick={closePanel}>×</button>
                                </div>
                                <div className="content">
                                    <div className="introduction">
                                        <h2>QuizElite</h2>
                                        <h4>Unlock Your Knowledge Potential: Dive into Fun and Interactive Quizzes!</h4>
                                        <img src={Quizimg} alt=""/>
                                    </div>
                                    <div className="about">
                                        <h2>About</h2>
                                        <h4>QuizElite is your ultimate hub for mastering knowledge. Engage with a variety of interactive quizzes, track your progress, and challenge yourself with dynamic questions— all on one user-friendly platform.</h4>
                                    </div>
                                    <div className="tech">
                                        <h2>Tech Stack</h2>
                                        <ul>
                                            <li>HTML</li>
                                            <li>CSS</li>
                                            <li>Javascript</li>
                                            <li>Django</li>
                                            <li>SQlite</li>
                                        </ul>
                                    </div>
                                    <div className="key_features">
                                        <h2>Key Features</h2>
                                        <ul>
                                            <li>Provides educational quizes</li>
                                            <li>Provides fun quizes</li>
                                            <li>Custom quiz</li>
                                            <li>Own quiz hosting</li>
                                        </ul>
                                    </div>
                                    <div className="future">
                                        <h2>Future improvement</h2>
                                        <ul>
                                            <li>Better UI</li>
                                            <li>Responsive Design</li>
                                            <li>Personalized Recommendation</li>
                                            <li>Gamification</li>
                                        </ul>
                                    </div>
                                    <div className="Github">
                                        <h2>Github </h2>      
                                        <a href="https://github.com/aasimkhan02/QuizElite">https://github.com/aasimkhan02/QuizElite</a>
                                    </div>
                                </div>
                            </>
                        )}
                        {activePanel === 'Library' && (
                            <>
                                <div className="header">
                                    <h1>description</h1>
                                    <button className="closebtn" onClick={closePanel}>×</button>
                                </div>
                                <div className="content">
                                    <div className="introduction">
                                        <h2>Library Management System</h2>
                                        <h4>Effortless Cataloging and Access for Your Library.</h4>
                                        <img src={library} alt=""/>
                                    </div>
                                    <div className="about">
                                        <h2>About</h2>
                                        <h4>Our Library Management System offers a comprehensive solution for managing and organizing your library's resources with ease. From cataloging books and tracking inventory to managing user accounts and processing checkouts, it simplifies every aspect of library management. The system provides intuitive search features, detailed reports, and seamless integration with digital resources, ensuring that librarians and patrons alike have a smooth and efficient experience. Whether you're handling a small collection or a vast archive, our system scales to meet your needs and supports a more organized, accessible, and user-friendly library environment.</h4>
                                    </div>
                                    <div className="tech">
                                        <h2>Tech Stack</h2>
                                        <ul>
                                            <li>Java</li>
                                            <li>JDBC</li>
                                            <li>Netbeans</li>
                                        </ul>
                                    </div>
                                    <div className="key_features">
                                        <h2>Key Features</h2>
                                        <ul>
                                            <li>Handle database of books</li>
                                            <li>Handle issue database of books</li>
                                            <li>Handle Student database</li>
                                            <li>Handle return database of books</li>
                                        </ul>
                                    </div>
                                    <div className="future">
                                        <h2>Future improvement</h2>
                                        <ul>
                                            <li>Better UI</li>
                                            <li>More features</li>
                                        </ul>
                                    </div>
                                    <div className="Github">
                                        <h2>Github </h2>      
                                        <a href="https://github.com/aasimkhan02/Library-Management-system">https://github.com/aasimkhan02/Library-Management-system</a>
                                    </div>
                                </div>
                            </>
                        )}
                        {activePanel === 'Portfolio' && (
                            <>
                                <div className="header">
                                    <h1>description</h1>
                                    <button className="closebtn" onClick={closePanel}>×</button>
                                </div>
                                <div className="content">
                                    <div className="introduction">
                                        <h2>Aasim.codes</h2>
                                        <h4>Showcasing your best work.</h4>
                                        <img src={Portfolio} alt="" className='weatherimg'/>
                                    </div>
                                    <div className="about">
                                        <h2>About</h2>
                                        <h4>Aasim.codes is a showcase of my journey as a web developer. Here, you’ll find a collection of my projects, demonstrating my skills in creating engaging and efficient web solutions. Dive into my work to see how I blend creativity with technical expertise to deliver high-quality, user-centric websites and applications.</h4>
                                    </div>
                                    <div className="tech">
                                        <h2>Tech Stack</h2>
                                        <ul>
                                            <li>React</li>
                                            <li>HTML</li>
                                            <li>CSS</li>
                                            <li>Javascript</li>
                                        </ul>
                                    </div>
                                    <div className="key_features">
                                        <h2>Key Features</h2>
                                        <ul>
                                            <li>Responsive Design</li>
                                            <li>Showcase my details</li>
                                            <li>Showcase my skills</li>
                                            <li>Showcase my projects</li>
                                        </ul>
                                    </div>
                                    <div className="future">
                                        <h2>Future improvement</h2>
                                        <ul>
                                            <li>Add more projects</li>
                                            <li>Add more advancements</li>
                                        </ul>
                                    </div>
                                    <div className="Github">
                                        <h2>Github </h2>      
                                        <a href="https://github.com/aasimkhan02/portfolio">https://github.com/aasimkhan02/portfolio</a>
                                    </div>
                                </div>
                            </>
                        )}
                    </div>
                )}
            </div>
            <div className="more">
                <h1>Check out more</h1>
                <button>Projects</button>
            </div>
        </div>
    );
};

export default Projects;
