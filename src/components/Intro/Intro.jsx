import React from 'react';
import './Intro.css';
import {Row, Col} from 'react-bootstrap';

const Intro = (props) => {
    return (
    <div className="intro">
        <Row className="py-5 px-4">
            <Col sm={12}>
                <h1>Hello! I'm Carolina Capetillo.</h1>
                <h1>SOME CATCHPHRASE I GUESS</h1>
            </Col>
            <Col sm={12}>
                <p>I'm a full-stack developer based in Santa Barbara, California.
    
                  
                    I 
                    create and design beautfiul games, applications, websites, and extensions.
                </p>
            </Col>
        </Row>
    </div>
    )
}

export default Intro;