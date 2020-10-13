import React from 'react';
import './Footer.css';
import githubLogo from '../Images/github.png';
import linkedinLogo from '../Images/linkedin.png';
import whatsappLogo from '../Images/whatsapp.png';
import {Row, Col} from 'react-bootstrap'



const Footer = (props) => {
    return (
        <div className="footer">
          <Row>
            <div className="sidebar">
                <Col sm={12}>
                    <img src={githubLogo} alt="github" className="github"/>
                </Col>
                <Col sm={12}>
                    <img src={linkedinLogo} alt="linkedin" className="linkedin"/>
                </Col>
                <Col sm={12}>
                    <img src={whatsappLogo} alt="whatsapp" className="whatsapp"/>
                </Col>
           </div>
         </Row>
       
        </div>
    )
}

export default Footer;