import React from 'react';
import './NavBar.css'
import { Link, animateScroll as scroll } from "react-scroll";

const NavBar = (props) => {
    return (
<div className="links">
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

export default NavBar