//Purpose: Creates and displays the ABOUT ME sections

import React from "react"
import JakeAbout from "../images/JakeAbout.png"
import JakeGuitar from "../images/JakeGuitar.svg"
import AboutMe from "../images/AboutMe.svg"
import group from "../images/group.svg"
import art1 from "../images/art1.PNG"



export const About = () => {
    return (
        <>
            {/* ABOUT SECTION PART 2 */}
            <div id="about" className="about-section">
                <div className="about-box">
                    <div className="amoutme"><img className="aboutme-img" src={AboutMe} alt="c51 logo" /></div>
                    <div className="about-content2">
                        <div className="first-box">
                            <div className="about-green-box">
                                <div className="jakeAbout-img"><img className="JakeAbout" src={JakeAbout} alt="c51 logo" /></div>
                                <div><h6 className="about-text2">
                                    My background consists of a higher level of appreciation and understanding for design and technology. I have experience with design and technology working as a freelance graphic artist while solely managing media and technology based structures at my previous employment. I also have experience working directly with people meeting their needs through compassion and wholehearted efforts as an educator. I am now directing that experience on honing in on my skills with HTML, CSS, Javascript, and React, to become the best UX designer and front-end programmer I can be.
                                </h6>
                                </div>
                            </div>

                            {/* ABOUT SECTION PART 2
                            <div className="jakeAbout-img"><img className="JakeAbout" src={art1} alt="c51 logo" /></div>
                            <div>
                                <h6 className="about-text2">
                                    <a target="_blank" href="https://ballpitmag.com/portfolio/jake_diggity/">Ball Pit Magazine</a>
                                </h6>
                            </div>
                            <div className="aboutgroup"><img className="aboutgroup-img" src={group} alt="c51 logo" /></div> */}
                        </div>
                    </div>
                </div>
            </div>
            <div className="jakeguitar"><img src={JakeGuitar} alt="c51 logo" />
            </div>
        </>
    )
}