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
                         Challah Website
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
                     Binge App
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
                         Challah Website
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