//Purpose: Creates and displays the NAV BAR section

import React from "react";
import "../styles/nav.scss";
import { Nav, Navbar } from "react-bootstrap"
import { Link } from "react-router-dom";
import home from "../images/home.svg"
import work from "../images/work.svg"
import about from "../images/about.svg"
import resumenav from "../images/resumenav.svg"


export const NavBar = () => {
    return (
        <>
            <Navbar collapseOnSelect expand="sm" fixed="top"  className="nav d-flex justify-content-end">
                <Navbar.Toggle />
                    <Navbar.Collapse id="responsive-navbar-nav" >
                        <Nav>
                <div className="navcontain">
                    <Link to="/" onClick={() => {window.scrollTo({ top: 0, behavior: "smooth"});}}><img className="navhome" src={home} alt="home" ></img></Link>
                 
                        <Link to="/about" onClick={() => {window.scrollTo({ top: 0, behavior: "smooth"});}}><img className="navabout" src={about} alt="about" /></Link>
                  
                        <Link to="/work" onClick={() => {window.scrollTo({ top: 0, behavior: "smooth"});}}><img className="navwork" src={work} alt="work" /></Link>
                

                        <a target="_blank" href="https://drive.google.com/file/d/1fyYNI-sko8b0IgMP6ZUcmIgHE1Xv01Of/view" rel="noreferrer"><img className="navresume" src={resumenav} alt="resume" /></a>
                    </div>
                
                </Nav>
                </Navbar.Collapse>
            
            </Navbar>
           
        </>
    );
};