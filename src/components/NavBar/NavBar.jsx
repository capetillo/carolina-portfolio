import React, {Component} from 'react';
import './NavBar.css'
import { Link, animateScroll as scroll } from "react-scroll";


class Nav extends Component {
    constructor (props) {
        super(props);
        if (typeof window !== 'undefined') {
            let prevScrollPos = window.pageYOffset;
            window.onscroll = function() {
                const maxScroll = document.body.clientHeight - window.innerHeight; //actual height - what's visible
                let currentScrollPos = window.pageYOffset; 
                if (
                    //for safari UX
                    //w3 schools helped a lot ! (i don't know why w3 gets so much hate)
                    (maxScroll > 0 && prevScrollPos > currentScrollPos && prevScrollPos <= maxScroll) ||
                    (maxScroll <= 0 && prevScrollPos > currentScrollPos) ||
                    (prevScrollPos <= 0 && currentScrollPos <= 0)
                ) {
                    document.getElementById("navbar").style.top = "0";
                } else {
                    // how much is the navbar hidden 
                    document.getElementById("navbar").style.top = "-5.0rem";
                }
                prevScrollPos = currentScrollPos
            }
        }
    }


        render () {
            return (
        <div className="links" id="navbar">
            
            <Link
                activeClass="active"
                to="about"
                spy={true}
                smooth={true}
                offset={-70}
                duration={700}
            >
                about
                </Link>
                <Link
                activeClass="active"
                to="projects"
                spy={true}
                smooth={true}
                offset={-70}
                duration={700}
            >
                projects
                </Link>
                <Link
                activeClass="active"
                to="contact"
                spy={true}
                smooth={true}
                offset={-70}
                duration={700}
            >
                contact
                </Link>
           
        </div>
            )
        }
    }
    

export default Nav