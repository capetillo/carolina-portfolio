import React from 'react';
import './Projects.css'
import {Row, Col} from 'react-bootstrap';
import ScrollAnimation from 'react-animate-on-scroll';

const Projects = (props) => {
    return (
        <div className="projects" id="projects">
            <ScrollAnimation animateIn="fadeInUp" animateOnce={true} duration={1.2}  animatePreScroll={false}>
            <h1 className="projects-header">Projects</h1>
            
            <Row className="text-right pb-5 pt-5">
            
            <Col sm={12} md={6} className="order-md-2 pb-5 pt-5">
                    <h1 className="project1">
                         "Binge" 
                    </h1>
                    <div className="project">
                    <p>
                        I created this app using React, javascript, AWS DynamoDB, AWS S3, AWS API Gateway, materialize, and CSS. 
                        This app is for users who watch Netflix with others but can't agree on what to watch.
                         The user logs in, gets a code and shares it with their friend who will be doing the same. Both parties
                         start swiping left or right on movies and shows, until there's a match! 
                    </p>
                    </div>
                </Col>
                <Col sm={12} md={6} className="align-self-center order-md-1 pb-5 pt-5">
                    <div className="project-span">
                        <a href="https://www.challahbyari.com" target="blank"><img src="https://countrylakesdental.com/wp-content/uploads/2016/10/orionthemes-placeholder-image.jpg" alt="temporary placeholder" className="placeholder1"/></a>
                    </div>
                </Col>
              
            </Row>
            </ScrollAnimation>  
            <ScrollAnimation animateIn="fadeInUp" animateOnce={true} duration={1.2} animatePreScroll={false}>
            <Row className="text-left pb-5 pt-5">
           
            <Col sm={12} md={6} className="order-md-1 pb-5 pt-5">
                <h1 className="project2">
                     "Flexnit"
                </h1>
                <div className="project">
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste a,
                    non officia possimus ad beatae magni molestias perspiciatis eveniet 
                    corrupti libero tempora praesentium, impedit explicabo, sequi 
                    labore ratione fuga ducimus!
                </p>
                </div>
            </Col>
            <Col sm={12} md={{size: 6, order: 2}} className="align-self-center order-md-2 pb-5 pt-5">
                <div className="project-span">
                    <img src="https://countrylakesdental.com/wp-content/uploads/2016/10/orionthemes-placeholder-image.jpg" alt="temporary placeholder" className="placeholder1"/>
                </div>
            </Col>
          
        </Row>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInUp" animateOnce={true} duration={1.2} animatePreScroll={false}>
        <Row className="text-right pb-5 pt-5">
            
            <Col sm={12} md={6} className="order-md-2 pb-5 pt-5">
                    <h1 className="project1">
                         "Challah by Ari" 
                    </h1>
                    <div className="project">
                    <p>
                        I built this website using React, javascript, bootstrap, and CSS.
                        Challah by Ari is front-end based site with a clean, minimalist design 
                        requested by the client where the user can reserve challah as well as sign up
                        for newsletters.

                    </p>
                    </div>
                </Col>
                <Col sm={12} md={6} className="align-self-center order-md-1 pb-5 pt-5">
                    <div className="project-span">
                        <a href="https://www.challahbyari.com" target="blank"><img src="https://countrylakesdental.com/wp-content/uploads/2016/10/orionthemes-placeholder-image.jpg" alt="temporary placeholder" className="placeholder1"/></a>
                    </div>
                </Col>
              
            </Row>
        </ScrollAnimation>
        </div>
    )
}

export default Projects