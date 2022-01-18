//Purpose: Creates and displays the NAV BAR section

import React from "react";
import "../styles/nav.scss";
import { Navbar } from "react-bootstrap"
import home from "../images/home.svg"
import work from "../images/work.svg"
import about from "../images/about.svg"
import resumenav from "../images/resumenav.svg"

export const NavBarBS = () => {
    return (
        <>
            <Navbar fixed="top" className=" nav d-flex justify-content-center">
                <div className="navcontain">
                    <div onClick={() => {
                        window.scrollTo({ top: 0, behavior: "smooth"});
                    }}>
                        <img className="navhome" src={home} alt="home" />
                    </div>

                    <div>
                        <a href="#about"><img className="navabout" src={about} alt="about" /></a>
                    </div>

                    <div>
                        <a href="#work"><img className="navwork" src={work} alt="work" /></a>
                    </div>

                    <div>
                        <a target="_blank" href="https://drive.google.com/file/d/1qWfI4xuKsbo4cv1dX5e9IHmsA8XTs-Q3/view?usp=sharing"><img className="navresume" src={resumenav} alt="resume" /></a>
                    </div>
                </div>

                


            </Navbar>
           
        </>
    );
};