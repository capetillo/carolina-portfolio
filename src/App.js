import React, {Component} from 'react';
import carolina from "../src/components/Images/carolina.jpg";
import './App.css';
import Navigation from './components/NavBar/NavBar';
import Intro from './components/Intro/Intro';
import AboutMe from './components/Header/AboutMe';
import ProjectsHeader from './components/Header/ProjectsHeader';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact'
import {Row, Col} from 'react-bootstrap';



// this is where i start making changes 

export default class App extends Component {


  render() {

    return (
      <div className="App">
      
      <Intro />
      <Navigation/>
      <AboutMe />
        <Row >
        
          <Col sm={12} md={6}>
            <About />
          </Col>
          
          <Col sm={12} md={6} className="d-flex align-items-center justify-content-center">
            <div className="photo">
              <div className="caro-span">
                <img src={carolina} alt="Carolina, me, the creator of this portfolio" className="caro"/>
              </div>
            </div>
          </Col>
         
        </Row>
      <ProjectsHeader />
      <Projects />
      <Contact/>
    </div>
    
    );
  }
}


