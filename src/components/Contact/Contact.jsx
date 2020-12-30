import React from 'react';
import './Contact.css';
import emailjs from 'emailjs-com';
import {Row, Col, Button, Collapse} from 'react-bootstrap';


export default function Contact() {
    
    function sendEmail(e) {
        e.preventDefault();
    
        emailjs.sendForm('gmail', process.env.REACT_APP_TEMPLATE_ID, e.target, process.env.REACT_APP_USER_ID)
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset()
    }
        return (
            <div className="contact">
                <div className="contactform">
                <Row className="pb-md-3">
                    <Col sm={12} className="pb-md-3">
                <h1 className="contactme">Contact Me</h1>
                </Col>
                <Col sm={12} className="px-5">
                <p className="contact-about">I'm currently looking for work. Feel free to reach out if you are <br></br>
                    interested in my work, would like to collaborate, or if you have <br></br>
                    any questions, comments, suggestions, or just would like to get<br></br>
                    to know me as a software engineer! Stay safe and wear a mask.
                    </p>
                </Col>
                </Row>
                    <div className="get-in-touch">
                        <Button id="button" className="collapsed justify-self-center" type="button" data-toggle="collapse" data-target="#form-collapse-text" aria-controls="form-collapse-text" aria-expanded="false" aria-label="Toggle button">
                        Reach Out
                        </Button>
                    </div>
                    <Collapse in={true}>
                    <form onSubmit={sendEmail} >
                        <div className="paddingpurposes">
                            <Row className="mx-auto collapse" id="form-collapse-text">
                            <div className="email-form">
                                <Col className="form-group mx-auto" sm={12}>
                                    <input type="text" className="form-control" placeholder="Name" name="name" id="input"/>
                                </Col>
                                <Col className="form-group mx-auto " sm={12}>
                                    <input type="email" className="form-control" placeholder="Email Address" name="email" id="input"/>
                                </Col>
                                <Col className="form-group mx-auto" sm={12}>
                                    <input type="text" className="form-control" placeholder="Subject" name="subject" id="input"/>
                                </Col>
                                <Col className="form-group mx-auto" sm={12}>
                                    <textarea className="form-control" cols="40" rows="6" placeholder="Your Message" name="message" id="input"></textarea>
                                </Col>
                                <Col className="form-group pt-3 mx-auto" sm={12}>
                                    <input type="submit" className="btn" value="Send Message" id="button"/>
                                </Col>
                                </div>
                            </Row>
                            </div>
                           
                    </form>
                 
                    </Collapse>
                  
                </div>
               
            </div>
        )

}




