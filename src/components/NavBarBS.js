import React from "react";
import "../styles/nav.scss";
import {Navbar} from "react-bootstrap"
import home from "../images/home.svg"
import work from "../images/work.svg"
import about from "../images/about.svg"
import resumenav from "../images/resumenav.svg"

export const NavBarBS = () => {
    return (
        <>
            <Navbar fixed="top" className=" nav d-flex justify-content-center">
                <div className="navboxes">
                    <div>
                    <a href="home"><img className="navhome" src={home} alt="home" /></a>
                    </div>

                    <div>
                    <a href="#work"><img className="navwork" src={work} alt="work" /></a>
                    </div>

                    <div>
                    <a href="c"><img className="navresume" src={resumenav} alt="resume" /></a>
                    </div>

                    <div>
                    <a href="d"><img className="navabout" src={about} alt="about" /></a>
                    </div>
                </div>

                
            </Navbar>
        </>
    );
};