//Purpose: Creates and displays the ABOUT section

import React from "react"
import JakeGuitar from "../images/JakeGuitar.svg"
import AboutMe from "../images/AboutMe.svg"
import group from "../images/group.svg"
import art2 from "../images/art2.PNG"
import aboutPro from "../images/aboutPro.jpg"
import techTools from "../images/techTools.svg"



export const About = () => {
    return (
        <>
            {/* ABOUT SECTION - ME*/}

            <div id="about" className="about-section">
                <div className="about-box">
                    <div className="amoutme"><img className="aboutme-img" src={AboutMe} alt="c51 logo" /></div>
                    <div className="about-content2">
                        <div className="first-box-about">
                            <div className="about-green-box">
                                <div className="jakeAbout-img"><img className="JakeAbout" src={aboutPro} alt="c51 logo" /></div>
                                <div className="about-text-main">
                                    <h1>
                                        My colleagues have described me as:
                                    </h1>
                                    <ul >
                                        <li>
                                            a motivator
                                        </li>
                                        <li>
                                            great in a team
                                        </li>
                                        <li>
                                            always striving to be fair
                                        </li>
                                        <li>
                                            a true creative
                                        </li>
                                        <li>
                                            humble
                                        </li>
                                        <li>
                                            an infectious personality
                                        </li>
                                        <li>
                                            naturally a leader
                                        </li>
                                        <li>
                                            good with challenges
                                        </li>
                                    </ul>
                                    <div className="aboutgroup"><img className="aboutgroup-img" src={group} alt="c51 logo" /></div>
                                </div>
                            </div>
            {/* ABOUT SECTION - TECH AND TOOLS*/}

                            <div className="about-green-box">
                                <div className="jakeAbout-img"><img className="artabout" src={techTools} alt="c51 logo" /></div>
                                <div><h1 className="about-text-art">Tech and Tools</h1>
                                    <h6 className="about-text2">

                                        My favorite thing about being a developer is the ongoing learning process. I have established a solid foundation with the language and framework of JavaScript and the use of State, Props, and the browser-independent DOM system of React. My styling and design skills are achieved through my knowledge using CSS, SASS, Figma, and Photoshop. I also have experience building REST APIs with JSON Server using fetch calls and testing APIs using Postman. Other tools included Cloudinary for image and video hosting and the best use and practices when using Git.

                                        I enjoy the challenge and ongoing learning process of being a developer. I have established a solid foundation with the language and framework of JavaScript and the use of State, Props, and the browser-independent DOM system of React. My styling and design skills are achieved through my knowledge using CSS, SASS, Figma, and Photoshop. I also have experience with data by building a Back-End using JSON server with fetch calls and testing APIs using Postman. Other tools included Cloudinary for image and video hosting and the best use and practices when using Git.

                                    </h6>
                                </div>
                            </div>

             {/* ABOUT SECTION - ART AND DESIGN*/}

                            <div className="about-green-box">
                                <div className="jakeAbout-img"><img className="artabout" src={art2} alt="c51 logo" /></div>
                                <div><h1 className="about-text-art">Art and Design</h1><h6 className="about-text2">

                                    My background in design comes from working as a freelance graphic designer. Most of my work is designing album art for several musical artists, including Jason Wade, of Lifehouse. I also have experience working with a diverse set of clients. I have worked with companies and clients ranging from beverage companies to TV shows. Through these interactions, I have gained experience passionately working with clients to best represent their ideas with a finished product we can both be proud of.
                                </h6>
                                    <div className="h6-about">
                                        <h6 className="h6-about-text">Check out some of my artwork <a target="_blank" href="https://www.instagram.com/jake_diggity/?hl=en">here</a> on Instagram.</h6></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="jakeguitar"><img src={JakeGuitar} alt="c51 logo" />
            </div>
        </>
    )
}