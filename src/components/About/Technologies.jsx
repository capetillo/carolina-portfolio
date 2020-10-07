import React from 'react';
import {ListGroup, ListGroupItem} from 'react-bootstrap';
import './About.css';

const Technologies = (props) => {
    return (
    <div>
        <p>
             Here are a few technologies I've been working with recently:
        </p>
        <ListGroup horizontal className="list">
            <ListGroup.Item >
                JavaScript (ES6+)
            </ListGroup.Item>
            <ListGroup.Item >
                HTML + CSS
            </ListGroup.Item>
            </ListGroup>
            <ListGroup horizontal className="list">
             <ListGroup.Item >
                 React
            </ListGroup.Item>
            <ListGroup.Item>
                Node.js
            </ListGroup.Item>
        </ListGroup>
        <ListGroup horizontal className="list">
             <ListGroup.Item >
                 MongooseDB
            </ListGroup.Item>
            <ListGroup.Item>
                Express.js
            </ListGroup.Item>
        </ListGroup>
    </div>
    )
}

export default Technologies