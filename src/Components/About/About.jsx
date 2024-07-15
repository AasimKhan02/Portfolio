import React from 'react'
import Person from './../../assets/person.jpg'
import './About.css'

const About = () => {
    return (
        <div className='About container'>
            <h1>About me</h1>
            <div className="holder">
                <h2>
                        Hello! I'm Aasim, a Computer Engineer student based in Mumbai, India. I specialize in front-end development, Python programming, and artificial intelligence. With a passion for creating dynamic and responsive web applications, I enjoy turning complex problems into elegant digital solutions.
                    <br /><br />
                        I am currently pursuing a Bachelor of Engineering in Computer Engineering and have a strong foundation in HTML, CSS, JavaScript, and Django. In my free time, I love exploring new technologies, participating in coding competitions, and hiking. Feel free to explore my portfolio to see some of my projects and reach out for potential collaborations.
                </h2>
                <img src={Person} alt="" className='Person' />
            </div>
        </div>
    )
}

export default About
