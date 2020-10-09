import React from 'react';
import './Projects.css'
import {Row, Col} from 'react-bootstrap';

const Projects = (props) => {
    return (
        <div className="projects" id="projects">
            <Row className="text-right px-5">
            <Col sm={12} md={6} className="order-md-2">
                    <h1 className="project1">
                         Project 1
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
                <Col sm={12} md={6} className="align-self-center order-md-1">
                    <div className="project-span">
                        <img src="https://countrylakesdental.com/wp-content/uploads/2016/10/orionthemes-placeholder-image.jpg" alt="temporary placeholder" className="placeholder1"/>
                    </div>
                </Col>
            </Row>
            <Row className="text-left px-5">
            <Col sm={12} md={6} className="order-md-1">
                <h1 className="project2">
                     Project 2
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
            <Col sm={12} md={{size: 6, order: 2}} className="align-self-center order-md-2">
                <div className="project-span">
                    <img src="https://countrylakesdental.com/wp-content/uploads/2016/10/orionthemes-placeholder-image.jpg" alt="temporary placeholder" className="placeholder1"/>
                </div>
            </Col>
          
        </Row>
        <Row className="text-right px-5">
            <Col sm={12} md={6} className="order-md-2">
                <h1 className="project3">
                     Project 3
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
            <Col sm={12} md={6} className="align-self-center order-md-1">
                <div className="project-span">
                    <img src="https://countrylakesdental.com/wp-content/uploads/2016/10/orionthemes-placeholder-image.jpg" alt="temporary placeholder" className="placeholder1"/>
                </div>
            </Col>   
        </Row>
        </div>
    )
}

export default Projects