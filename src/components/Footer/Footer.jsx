import React from 'react';
import './Footer.css';
import githubLogo from '../Images/github.png';
import linkedinLogo from '../Images/linkedin.png'



const Footer = (props) => {
    return (
        <div className="footer">
          
            <div className="sidebar">
            <img src={githubLogo} alt="github" className="github"/>
            <img src={linkedinLogo} alt="linkedin" className="linkedin"/>
           </div>
          
        </div>
    )
}

export default Footer;