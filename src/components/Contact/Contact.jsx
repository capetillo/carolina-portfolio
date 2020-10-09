import React from 'react';
import './Contact.css';
import emailjs from 'emailjs-com';
import {Row, Col} from 'react-bootstrap';

export default function Contact() {

    function sendEmail(e) {
        e.preventDefault();
    
        emailjs.sendForm('gmail', 'template_73mzcao', e.target, 'user_JzyA9mMxX3G7uexfqc5uS')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset()
    }
    
    
        return (
            <div className="contact" id="contact">
                <h1 className="contactme">contact me </h1>
                <form onSubmit={sendEmail}>
                    <Row className="pt-5 mx-auto">
                        <Col className="form-group mx-auto">
                            <input type="text" className="form-control" placeholder="name" name="name"/>
                        </Col>
                        <Col className="form-group mx-auto">
                            <input type="email" className="form-control" placeholder="email address" name="email"/>
                        </Col>
                        <Col className="form-group mx-auto">
                            <input type="text" className="form-control" placeholder="subject" name="subject"/>
                        </Col>
                        <Col className="form-group pt-2 mx-auto">
                            <textarea className="form-control" cols="30" rows="8" placeholder="your message" name="message"></textarea>
                        </Col>
                        <Col className="form-group pt-3 mx-auto">
                            <input type="submit" className="btn btn-info" value="send message"/>
                        </Col>
                    </Row>
                </form>
            </div>
        )

}



