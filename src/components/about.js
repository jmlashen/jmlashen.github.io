//Purpose: Creates and displays the ABOUT section

import React from "react"
import aboutme from "../images/aboutme.svg"
import aboutPro from "../images/aboutPro.png"
import techToolsMobile from "../images/techToolsMobile.svg"
import artboard from "../images/artboard.svg"
import guitar from "../images/guitar.svg"
import coll from "../images/coll.svg"
import bubbs from "../images/bubbs.svg"

import { Button } from "react-bootstrap"




export const About = () => {
    return (
        <>

            <div className="abouthead-img"><img className="aboutme-img" src={aboutme} alt="about" /></div>
            <div className="topabout"></div>


            <div className="aboutsection">

                <div className="about-white">
                    <div className="hijake1">
                    </div>
                    <div className="jakecloud">
                        <div className="highimjakepro"><img className="hihimjakepro-img" src={aboutPro} alt="me" /></div>
                        <div className="highimjakebubs"><img className="hihimjakepro-img" src={bubbs} alt="me" /></div>
                        
                    </div>
                    <div className="coll"><img className="coll-img" src={coll} alt="me" /></div>
                    <div className="header"><h1>My colleauges have described me as:</h1></div>
                    
                    <div className="coll-box">
                    
                   
                        <div className="list-container">
                        <ul>
                            <li>
                            A motivator
                            </li>
                            <li>
                            Great on a team
                            </li>
                            <li>
                            An infectious personality
                            </li>
                            <li>
                            Always striving to be fair
                            </li>
                            <li>
                            A true creative
                            </li>
                            <li>
                            Naturally a leader
                            </li>
                            <li>
                            Humble
                            </li>
                            <li>
                            Inspiring
                            </li>
                            <li>
                            Good with challenges
                            </li>
                        </ul>
                        </div>
                       
                    </div>
                    <div className="header"><h1>Tech and Tools</h1></div>        
                    <div><img className="techtool" src={techToolsMobile} alt="computer" /></div>
                    <div className="white-box">
                        <p className="paragraphs">I enjoy the challenge and ongoing learning process of being a desinger and developer. I have established a solid foundation with JavaScript and React. My desgin and styling skills are achieved through my knowledge of CSS, SASS, Figma, and Photoshop.
                            I also have experience building CRUD-based applications using ERDs, JSON server, fetch calls, testing APIs using Postman, and the best practices when using Git/GitHub.</p>
                        <div className="artbutton">
                            <div ><a target="_blank" rel="noreferrer" href="https://github.com/jmlashen"><Button size="lg">View GitHub</Button></a></div>
                        </div>
                    </div>


                    <div className="header"><h1>UI/UX</h1></div>
                    <div><img className="artabout-uiux" src={guitar} alt="uiux logo" /></div>
                    <div className="white-box">
                        <div>
                            <p className="paragraphs">I find myself naturally drawn to the user experience and client-side. With my experiences in collaboration and leadership as an educator, I have always enjoyed the intrinsic rewards of helping others achieve their goals and overcome challenges.
                                During my time at Nashville Software School I have gained valuable experience learning the principles and processes of UI/UX. A group project revealed a pain point in the School's requirements relating to graduation and I personally gained real world UX experience working closely with the Department of Human Services for my final project. From wireframes to prototypes, user testing, informational architecture, and visual hierarchy–we got our hands dirty with every step.
                            </p>
                            <div className="artbutton">
                                <div ><a target="_blank" rel="noreferrer" href="https://www.instagram.com/jake_diggity/"><Button size="lg">View Case Study</Button></a></div>
                            </div>
                        </div>
                    </div>


                    <div className="header"><h1 >Art and Design</h1></div>
                    <div><img className="techtool" src={artboard} alt="computer" /></div>
                    <div className="white-box">
                        <p className="paragraphs">My background in design comes from working as a freelance graphic designer.
                            Through these interactions, I have gained experience passionately working with clients to best represent their ideas with a finished product we can both be proud of. </p>
                        <div className="artbutton">
                            <div ><a target="_blank" rel="noreferrer" href="https://www.instagram.com/jake_diggity/"><Button size="lg">View Art</Button></a></div>
                        </div>
                    </div>

                </div>

            </div>




        </>
    )
}