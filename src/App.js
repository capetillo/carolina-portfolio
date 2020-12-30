import React, {Component} from 'react';
import carolina from "../src/components/Images/carolina.jpg";
import './App.css';
import Navigation from './components/NavBar/NavBar';
import Intro from './components/Intro/Intro';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import {Row, Col, Image} from 'react-bootstrap';
import ScrollAnimation from 'react-animate-on-scroll';



// this is where i start making changes 

export default class App extends Component {


  render() {

    return (
      <div className="App">
        <div className="container-of-page">
        <Navigation/>
        <div className="page">
      <Intro />
      
        <Row className="about-me">
        
          <Col sm={12} md={6}>
          <ScrollAnimation animateOnce={true} duration={2} animateIn="fadeIn" animatePreScroll={false}>
            <About />
            </ScrollAnimation>
          </Col>
          <Col sm={12} md={6} className="d-flex align-items-center justify-content-center img-responsive hidden-sm">
          <ScrollAnimation animateOnce={true} duration={2} animateIn="fadeIn" animatePreScroll={false}>
            <div className="photo">
              <div className="caro-span">
                <Image src={carolina} alt="Carolina, me, the creator of this portfolio" id="caro"/>
              </div>
            </div>
            </ScrollAnimation>
          </Col>
          
        </Row>
      
      <ScrollAnimation  animateOnce={true} duration={2} animateIn="fadeIn" animatePreScroll={false}>
      <Projects />
      </ScrollAnimation>
      <ScrollAnimation animateOnce={true} duration={2} animateIn="fadeIn" animatePreScroll={false}>
      <Contact/>
      </ScrollAnimation>
      <div className="logos">
      <Footer/>
      </div>
      </div>
      </div>
    </div>
    
    );
  }
}


