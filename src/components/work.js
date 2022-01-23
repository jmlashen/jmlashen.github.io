//Purpose: Creates and displays the WORK sections

import React from "react"
import { Button } from "react-bootstrap"
import Video from "../video"
import C51 from "../images/C51.svg"
import caddielogo from "../images/caddielogo.png"
import workhead from "../images/workhead.svg"
import mobile from "../images/mobile.svg"
import desktop from "../images/desktop.svg"
import { EmbedVideoCaddie } from "./embed-video-caddie"
import { EmbedVideoC51 } from "./embed-video-c51"







export const Work = () => {
    return (
        <>
            <div id="work" className="mainworkcontainer"></div>
            <div className="workhead-img"><img className="workme" src={workhead} alt="Card Caddie logo" /></div>

            {/* C-51 WEBSITE SECTION */}

            <div className="worksection">
                <div className="first-box">
                    <div className="c51logo-top"><img className="c51" src={C51} alt="C-51 logo" /></div>
                    <div className="C51-description">
                        <div><h1>Cohort-51 Website</h1></div>
                        <p className="paragraphs">The logo above was designed using Figma and was one of my contributions for the most rewarding group project I've ever had the pleasure of working on. Our goal was to showcase our software development and UI/UX skills with a personality and flair to facilitate getting hired quickly by an employer that is a good fit. </p>
                        <p className="paragraphs">With significant group planning, data collection, and user testing, we learned a lot about UX and the processes that precede the launch of the final product. We even revealed a pain point in the School curriculum relating to graduation requirements during the process! </p>
                        <p className="paragraphs">Everyone in the group equally made significant contributions. My key contributions include logo design, the design and styling of the developer section, and prototyping. One favorite piece of code was the helper function I wrote that changes the colored ring around a developer's photo. The color-coordinated conditional was to help distinguish between one of two developer types. We had such a terrific time creating this website together!</p>
                        <div className="main-video-container-mobile"><EmbedVideoC51/></div>
                        <div className="workbuttons">
                            <div><a target="_blank" href="https://nss-day-cohort-51.github.io/"><Button size="lg">Try It Out</Button></a></div>
                            <div><a target="_blank" href="https://github.com/nss-day-cohort-51/nss-day-cohort-51.github.io"><Button Button size="lg">View Repo</Button></a></div>
                        </div>
                        <div className="first-box-video">
                            
                            <div className="caddie-video-container"><Video VideoSource="https://res.cloudinary.com/djnk0ey5p/video/upload/v1642519654/c51demo_fjo5ic.mp4" /></div>
                        </div>
                    </div>
                </div>
            </div>

            {/* CARD CADDIE SECTION */}

            <div className="worksection">
                <div className="first-box">
                    <div className="caddielogo-top"><img className="caddie-baby" src={caddielogo} alt="Card Caddie logo"></img></div>
                    <div className="C51-description">
                        <div><h1>Card Caddie</h1></div>
                        <p className="paragraphs">
                            This user-specific app helps golfers keep track of scores and reflections from their rounds. Users can also add a new course and crowdsource courses from other users. Card Caddie has full CRUD capability (React, API fetch calls, React-Routing, and JSON server) with styling achieved through CSS, Cloudinary, and Reactstrap for an approachable user experience.</p>
                            <div className="main-video-container-mobile"><EmbedVideoCaddie/></div>
                        <div className="workbuttons">
                            <div><a target="_blank" href="https://card-caddie.herokuapp.com/"><Button Button size="lg">Try It Out</Button></a></div>
                            <div><a target="_blank" href="https://github.com/jmlashen/cardcaddie"><Button Button size="lg">View Repo</Button></a></div>
                        </div>
                        <div className="first-box-video">
                            <div className="caddie-video-container"><Video VideoSource="https://res.cloudinary.com/djnk0ey5p/video/upload/v1641503833/My_Movie_2_aagjvj.mp4" /></div>
                        </div>
                    </div>
                </div>
            </div>

            {/* PROTOTYPE SECTION */}

            <div className="worksection">
                <div className="first-box">
                    <div className="C51-description">
                        <div className="prototype">
                            <div className="logo-prototype-mobile">
                                <a target="_blank" href="https://www.figma.com/proto/5TqtET6dRZyc1YjqgODj0X/C-51-Prototype---Mobile?page-id=0%3A1&node-id=2%3A818&viewport=241%2C48%2C0.34&scaling=scale-down&starting-point-node-id=2%3A818">
                                    <img className="mobile" src={mobile} alt="prototype mobile" /></a>
                            </div>
                            <div className="logo-prototype-desktop">
                                <a target="_blank" href="https://www.figma.com/proto/RjPnJ4xrvjgEBBPvwayI9M/C-51-Prototype---Desktop?page-id=0%3A1&node-id=54%3A700&viewport=241%2C48%2C0.18&scaling=scale-down&starting-point-node-id=54%3A700&show-proto-sidebar=1">
                                    <img className="desktop" src={desktop} alt="prototype desktop" />
                                </a>
                            </div>
                        </div>
                            <div><h1>Prototypes</h1></div>
                            <p className="paragraphs">
                                Based on user data and group planning for the Cohort-51 Website, I created mobile and desktop prototypes for the project using Figma. Prototyping is one of my favorite processes that precede the launch of the final product and helps present a clear vision.</p>
                            <p className="paragraphs"><a target="_blank" href="https://github.com/nss-day-cohort-51/nss-day-cohort-51.github.io">View all planning resources for the Cohort-51 Website Group Project here.</a></p>
                    </div>
                </div>
            </div>

        </>
    )
}

