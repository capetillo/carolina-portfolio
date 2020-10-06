import React from 'react';
import './About.css';
import Header from './Header';
import Bio from './Bio';
import Interests from './Interests';
import Education from './Education';
import Technologies from './Technologies';
import {Row, Col, Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button, Container} from 'react-bootstrap';


const About = (props) => {
    return (
        <div>
            <Header/>
        <Row>
            
            <Col>
                <Bio />
            </Col>
            <Col>
                <Interests />
            </Col>
            <Col>
                <Education />
            </Col>
            <Col>
                <Technologies />
            </Col>
        </Row>
        </div>
    )
}


export default About;