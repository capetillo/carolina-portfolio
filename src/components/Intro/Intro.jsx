import React from 'react';
import './Intro.css';
import {Row, Col} from 'react-bootstrap';
import ScrollAnimation from 'react-animate-on-scroll';

const Intro = (props) => {
    return (
    <div className="introduction">
        <Row className="py-5">
            <Col sm={12}>
                <ScrollAnimation animateOnce={true} duration={2} animateIn="fadeInUp" delay={500}>
                    <p className="intro">Hey there! My name is </p>
                </ScrollAnimation>
                <ScrollAnimation animateOnce={true} duration={2} animateIn="fadeInUp" delay={600} >
                    <h1 className="name">Carolina Capetillo.</h1>
                </ScrollAnimation>
                <ScrollAnimation animateOnce={true} duration={2} animateIn="fadeInUp" delay={700}>
                    <h1 className="catchphrase">I create stuff.</h1>
                </ScrollAnimation>
            </Col>
            <Col sm={12}>
            <ScrollAnimation animateOnce={true} duration={2} animateIn="fadeInUp" delay={800}>
                <p className="short-intro">I'm a full-stack engineer living in sunny Santa Barbara, California.
                <br>
                </br>
                    I create and design aesthetically pleasing games, applications, and websites.
                </p>
                </ScrollAnimation>
            </Col>
        </Row>
    </div>
    )
}

export default Intro;