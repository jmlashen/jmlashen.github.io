//Purpose: Creates and displays the NAV BAR section

import React from "react";
import "../styles/nav.scss";
import { Nav, Navbar } from "react-bootstrap"
import home from "../images/home.svg"
import work from "../images/work.svg"
import about from "../images/about.svg"
import resumenav from "../images/resumenav.svg"
import NavbarToggle from "react-bootstrap/esm/NavbarToggle";

export const NavBar = () => {
    return (
        <>
            <Navbar collapseOnSelect expand="sm" fixed="top" className="nav d-flex justify-content-end">
                <Navbar.Toggle />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav>
                <div className="navcontain">
                    <Nav.Link onClick={() => {
                        window.scrollTo({ top: 0, behavior: "smooth"});
                    }}>
                        <img className="navhome" src={home} alt="home" ></img></Nav.Link>
                 
                        <Nav.Link href="#about"><img className="navabout" src={about} alt="about" /></Nav.Link>
                  
                        <Nav.Link href="#work"><img className="navwork" src={work} alt="work" /></Nav.Link>
                
                        <Nav.Link target="_blank" href="https://drive.google.com/file/d/1qWfI4xuKsbo4cv1dX5e9IHmsA8XTs-Q3/view?usp=sharing"><img className="navresume" src={resumenav} alt="resume" /></Nav.Link>
                    </div>
                
                </Nav>
                </Navbar.Collapse>
            
            </Navbar>
           
        </>
    );
};