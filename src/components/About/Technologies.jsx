import React from 'react';
import './About.css';

const Technologies = (props) => {
    return (
    <div>
        <p>
             Here are a few technologies I've been working with recently:
        </p>
        <div className="lists"> 
        <ul className="tech">
            <li>JavaScript (ES6+)</li>
            <li> HTML + CSS</li>
            <li>React</li>
            </ul>
        <ul className="tech">
            <li>Node.js</li>
            <li> MongooseDB</li>
            <li>Express.js</li>  
        </ul>
        </div>
    </div>
    )
}

export default Technologies