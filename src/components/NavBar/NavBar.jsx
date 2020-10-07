import React, {Component} from 'react';
import './NavBar.css'
import { Link, animateScroll as scroll } from "react-scroll";


class NavBar extends Component {
    constructor (props) {
        super(props);
        if (typeof window !== 'undefined') {
            let prevScrollPos = window.pageYOffset;
            window.onscroll = function() {
                const maxScroll = document.body.clientHeight - window.innerHeight;
                let currentScrollPos = window.pageYOffset;
                if (
                    (maxScroll > 0 && prevScrollPos > currentScrollPos && prevScrollPos <= maxScroll) ||
                    (maxScroll <= 0 && prevScrollPos > currentScrollPos) ||
                    (prevScrollPos <= 0 && currentScrollPos <= 0)
                ) {
                    document.getElementById("navbar").style.top = "0";
                } else {
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
            duration={500}
        >
            about
            </Link>
            <Link
            activeClass="active"
            to="projects"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
        >
            projects
            </Link>
            <Link
            activeClass="active"
            to="contact"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
        >
            contact
            </Link>
        </div>
            )
        }
    }
    

export default NavBar