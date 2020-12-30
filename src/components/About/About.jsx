import React from 'react';
import './About.css';
import Bio from './Bio';
import Interests from './Interests';
import Education from './Education';
import Technologies from './Technologies';
import {Row, Col} from 'react-bootstrap';


const About = (props) => {
    return (
        <div className="about" id="about">
           <div className="title"> 
                <h1 className="aboutme">About Me</h1> 
            </div>
            <Row className="text-left" >
               
                <Col sm={12}>
                    <Bio />
                </Col>
                <Col sm={12}>
                    <Interests />
                </Col>
                <Col sm={12}>
                    <Education />
                </Col>
                <Col sm={12}>
                    <Technologies />
                </Col>
              
            </Row>  
       
        </div>
    )
}


export default About;