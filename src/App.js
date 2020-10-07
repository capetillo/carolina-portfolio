import React from 'react';
import carolina from "../src/components/Images/carolina.jpg";
import './App.css';
import NavBar from './components/NavBar/NavBar'
import AboutMe from './components/Header/AboutMe';
import ProjectsHeader from './components/Header/ProjectsHeader';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact'
import {Row, Col} from 'react-bootstrap';


function App() {
  return (
    <div className="App">
      <NavBar/>
      <AboutMe />
        <Row >
          <Col sm={12} md={6}>
            <About />
          </Col>
          <Col sm={12} md={6} className="align-self-center">
            <div className="photo">
            <img src={carolina} alt="Carolina, me, the creator of this portfolio" className="caro"/>
            </div>
          </Col>
        </Row>
      <ProjectsHeader />
      <Projects />
      <Contact/>
    </div>
  );
}

export default App;
