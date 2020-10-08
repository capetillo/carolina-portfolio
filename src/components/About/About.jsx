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
           
            <Row className="text-left px-5" >
               
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