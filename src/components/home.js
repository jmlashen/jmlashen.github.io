import React from "react";
import JakeLogo from "../images/JakeLogo.svg"

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

            
                <div className="youtube-video">
                <iframe title="Intro Video" width="420" height="315"
                    src="https://www.youtube.com/embed/oUK1Co3wtCc?modestbranding=0">
                </iframe>
                

                </div>
                <div className="gtkm">
                    <h5>Get to know me in less than 60 seconds!</h5>
                </div>
               
                {/* <div className="homebutton">
                    <div><a target="_blank" rel="noreferrer" href="https://www.youtube.com/watch?v=oUK1Co3wtCc"><Button size="l">Watch Intro</Button></a></div>
                </div> */}
            </div>


        </>
    )
}