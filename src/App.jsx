import React from 'react';
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Education from './Components/Education/Education';
import Skills from './Components/Skills/Skills';
import Social from './Components/Social media/Social';
import Projects from './Components/Projects/Projects';
import Contact from './Components/Contact/Contact';
import ChatbotIcon from './Components/Bot/ChatbotIcon';

const App = () => {
  return (
    <div>
      <Navbar />
      <section id="home"><Home /></section>
      <section id="about"><About /></section>
      <section id="education"><Education /></section>
      <section id="skills"><Skills /></section>
      <section id="social"><Social /></section>
      <section id="projects"><Projects /></section>
      <section id="contact"><Contact /></section>
      <ChatbotIcon />
    </div>
  );
}

export default App;
