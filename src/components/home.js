import React from "react";
import JakeLogo from "../images/JakeLogo.svg"
import { Button } from "react-bootstrap";
import JakeStand from "../images/JakeStand.svg"


export const Home = () => {

    return (
        <>
            <div className='landcontainer'>
                <div className='jake-logo-containter'>
                    <img className="jakelogo" src={JakeLogo} alt="C51"></img>
                </div>
                <div className="jakestandcontainer">
                    <img src={JakeStand} className="jakestand" alt="jake"></img>
                </div>
                <div className="gtkm">
                    <h5>Get to know me in less than 60 seconds!</h5>
                </div>
                <div className="homebutton">
                    <div><a target="_blank" rel="noreferrer" href="https://www.youtube.com/watch?v=oUK1Co3wtCc"><Button size="l">Watch Intro</Button></a></div>
                </div>
            </div>


        </>
    )
}