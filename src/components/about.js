//Purpose: Creates and displays the ABOUT section

import React from "react"
import AboutMe from "../images/AboutMe.svg"
import group from "../images/group.svg"
import art2 from "../images/art2.PNG"
import aboutPro from "../images/aboutPro.jpg"
import techToolsMobile from "../images/techToolsMobile.svg"
import uiux from "../images/uiux.svg"
import personas from "../images/personas.png"



export const About = () => {
    return (
        <>
            {/* ABOUT SECTION - ME*/}

           

            <div id="about" className="amoutme"><img className="aboutme-img" src={AboutMe} alt="c51 logo" /></div>


            <div className="about-section">



                <div className="first-box-about">

                    <div className="about-green-box">

                        <div className="about-text-main">

                            <div className="aboutgroup">
                                <img className="aboutgroup-img" src={group} alt="c51 logo" />
                            </div>

                            <div className="colleagues">
                            <h1>
                                My colleagues have described me as:
                            </h1>
                            </div>

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

                            <div className="aabout=text-main">
                                <img className="artabout-mobile" src={aboutPro} alt="c51 logo" />
                                <div />
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            {/* TECH SECTION - ME*/}

            <div id="about" className="about-section">

                <div className="first-box-about">

                    <div className="about-green-box">

                        <div className="about-text-main">

                            <div><img className="artabout-mobile" src={techToolsMobile} alt="c51 logo" /></div>
                            <div className="tech-text-box"><h1 className="about-text-art">Tech and Tools</h1></div>
                            <p className="about-text2">

                                I enjoy the challenge and ongoing learning process of being a developer. I have established a solid foundation with the language and framework of JavaScript and the use of State, Props, and the browser-independent DOM system of React. My styling and design skills are achieved through my knowledge using CSS, SASS, Figma, and Photoshop. I also have experience with data by building a Back-End using JSON server with fetch calls and testing APIs using Postman. Other tools included Cloudinary and the best use and practices when using Git.

                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* UIUX SECTION - ME*/}

            <div id="about" className="about-section">

                <div className="first-box-about">

                    <div className="about-green-box">

                        <div className="about-text-main">






                            <div><img className="artabout-mobile" src={uiux} alt="c51 logo" /></div>
                            <div><h1 className="about-text-art">UI/UX</h1></div>
                            <p className="about-text2">

                                I find myself naturally drawn to the user experience and client-side. With my experiences in collaboration and leadership as an educator, I have always enjoyed the intrinsic rewards of helping others achieve their goals and overcome challenges. The Nashville Software School program challenged our small group to create the Cohort's website. We gained valuable experience learning the principles and processes of UI/UX. From wireframes to prototypes, user testing, informational architecture, and visual hierarchy–we got our hands dirty with every step.
                               {/* Based on research and data, here's two examples of personas that helped me create this portfolio. */}
                                </p>
                                
                               
                               
                           

                            <div><img className="artabout-personas" src={personas} alt="c51 logo" /></div>
                            
                            {/* <a classname="h6" target="_blank" href="https://github.com/nss-day-cohort-51/nss-day-cohort-51.github.io">
                                 <p>View wireframes, personas, planning resources for the Cohort-51 Website Group Project here.</p>
                            </a> */}
                        </div>
                    </div>
                </div>
            </div>

            {/* ART SECTION - ME*/}

            <div id="about" className="about-section">

                <div className="first-box-about">

                    <div className="about-green-box">

                        <div className="about-text-main">

                            <div><img className="artabout-mobile" src={art2} alt="c51 logo" /></div>
                            <div><h1 className="about-text-art">Art and Design</h1></div>

                            <p className="about-text2">



                                My background in design comes from working as a freelance graphic designer. I mostly design album art for several musical artists, including Jason Wade, of Lifehouse. I also have experience working with a diverse set of clients. I have worked with companies and clients ranging from beverage companies to TV shows. Through these interactions, I have gained experience passionately working with clients to best represent their ideas with a finished product we can both be proud of.
                            </p>
                            <p className="about-text2"><a target="_blank" href="https://www.instagram.com/jake_diggity/?hl=en">Check out some of my artwork here.</a></p>
                            
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}