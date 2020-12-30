import React from 'react';
import './About.css';

const Technologies = (props) => {
    return (
    <div>
        <p>
             Here are a some of the technologies that I've been coding with recently:
        </p>
        <div className="lists"> 
            <ul className="tech">
                <li>JavaScript (ES6+)</li>
                <li>HTML + CSS</li>
                <li>React</li>
                <li>AWS DynamoDB</li>
                </ul>
            <ul className="tech">
                <li>Node.js</li>
                <li>Express.js</li>
                <li>AWS API Gateway</li>  
                <li>AWS S3</li>
            </ul>
        </div>
    </div>
    )
}

export default Technologies