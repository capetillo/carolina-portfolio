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
import {Row, Col, Image} from 'react-bootstrap';
import ScrollAnimation from 'react-animate-on-scroll';



// this is where i start making changes 

export default class App extends Component {


  render() {

    return (
      <div className="App">
      <ScrollAnimation animateIn="fadeIn" animateOnce="true" duration="3" animateIn="fadeInDown">
      <Intro />
      </ScrollAnimation>
      <Navigation/>
      <ScrollAnimation animateIn="fadeIn" animateOnce="true" duration="3" animateIn="fadeIn" animatePreScroll="false">
      <AboutMe />
      </ScrollAnimation>
      <ScrollAnimation animateIn="fadeIn" animateOnce="true" duration="3" animateIn="fadeIn" animatePreScroll="false">
      
        <Row >
        
          <Col sm={12} md={6}>
            <About />
          </Col>
          
          <Col sm={12} md={6} className="d-flex align-items-center justify-content-center img-responsive hidden-sm">
            <div className="photo">
              <div className="caro-span">
                <Image src={carolina} alt="Carolina, me, the creator of this portfolio" id="caro"/>
              </div>
            </div>
          </Col>
        </Row>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeIn" animateOnce="true" duration="3" animateIn="fadeIn" animatePreScroll="false">
      <ProjectsHeader />
      </ScrollAnimation>
      <ScrollAnimation animateIn="fadeIn" animateOnce="true" duration="3" animateIn="fadeIn" animatePreScroll="false">
      <Projects />
      </ScrollAnimation>
      <ScrollAnimation animateIn="fadeIn" animateOnce="true" duration="3" animateIn="fadeIn" animatePreScroll="false">
      <Contact/>
      </ScrollAnimation>
    </div>
    
    );
  }
}


