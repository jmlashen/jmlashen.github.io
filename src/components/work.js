import React from "react"
import { Button } from "react-bootstrap"
import caddie from "../images/caddie.png"
import Video from "../video"





export const Work = () => {
    return (
        <>
            <div id="work" className="worksection">
                <div className="workbox">
                    <div className="caddie-content">
                        <div><h1>Front-End Capstone Project</h1></div>
                        <div><img className="caddie" src={caddie} alt="Card Caddie logo" /></div>
                        <div><h6>Description</h6></div>
                        <div className="caddie-video-container">
                            <Video VideoSource="https://res.cloudinary.com/djnk0ey5p/video/upload/v1641318963/Card_Caddie_Demo_ofstlb.mp4" />
                        </div>
                        <div className="workbuttons">
                        <div><a target="_blank" href="https://nss-day-cohort-51.github.io/"><Button>Try It Out!</Button></a></div>
                        <div><Button>View Repo</Button></div>
                    </div>
                    </div>
                    
                    <div className="caddie-container"></div>
                </div>
            </div>



        </>
    )
}