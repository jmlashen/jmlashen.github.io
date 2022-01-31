//Purpose: Creates and displays the ABOUT section

import React from "react"
import aboutme from "../images/aboutme.svg"
import group from "../images/group.svg"
import art2 from "../images/art2.PNG"
import aboutPro from "../images/aboutPro.png"
import techToolsMobile from "../images/techToolsMobile.svg"
import uiux from "../images/uiux.svg"
import personas from "../images/personas.png"



export const About = () => {
    return (
        <>

            <div className="abouthead-img"><img className="aboutme-img" src={aboutme} alt="about" /></div>
            <div className="highimjakepro"><img className="hihimjakepro-img" src={aboutPro} alt="me" /></div>


            <div className="aboutsection">

                <div className="about-hi-main">
                    <div className="hiimjake">

                        <div><h1>Hi, I'm Jake!</h1></div>
                        <p className="paragraphs-me">I am a UX/UI Designer and Front-End Developer based in Nashville, TN.<b> My colleagues have described me as:</b></p>
                    </div>
                    <div className="hiimjakegroup">
                        <div>
                            <ul><li>a motivator</li><li>great in a team</li><li>always striving to be fair</li><li>a true creative</li><li>humble</li><li>an infectious personality</li><li>naturally a leader</li><li>good with challenges</li></ul>
                        </div>
                    </div>
                    <div className="aboutgroup">
                            <img className="aboutgroup-img" src={group} alt="c51 logo" />
                        </div>
                </div>




                <div className="about-text-main">
                    <div><img className="techtool" src={techToolsMobile} alt="computer" /></div>
                    <div><h1>Tech and Tools</h1></div>
                    <p className="paragraphs">I enjoy the challenge and ongoing learning process of being a desinger and developer. I have established a solid foundation with JavaScript and React. My desgin and styling skills are achieved through my knowledge of CSS, SASS, Figma, and Photoshop.
                        I also have experience building CRUD-based applications using ERDs, JSON server, fetch calls, testing APIs using Postman, and the best practices when using Git/GitHub.</p>
                </div>


                <div className="about-text-main">
                    <div><img className="artabout-uiux" src={uiux} alt="uiux logo" /></div>
                    <div><h1>UI/UX</h1></div>
                    <p className="paragraphs">I find myself naturally drawn to the user experience and client-side. With my experiences in collaboration and leadership as an educator, I have always enjoyed the intrinsic rewards of helping others achieve their goals and overcome challenges.
                        The Nashville Software School's program challenged our small group to create the Cohort's website. We gained valuable experience learning the principles and processes of UI/UX. We even revealed a pain point in the School curriculum relating to graduation requirements during the process! From wireframes to prototypes, user testing, informational architecture, and visual hierarchy–we got our hands dirty with every step.
                        <b> Based on research and data, here's two examples of personas that helped me create this portfolio:</b></p>
                    <div><img className="artabout-personas" src={personas} alt="c51 logo" /></div>
                </div>


                <div className="about-text-main">
                    <div><img className="artabout-mobile" src={art2} alt="artwork" /></div>
                    <div><h1 >Art and Design</h1></div>
                    <p className="paragraphs">My background in design comes from working as a freelance graphic designer. I mostly design album art for several musical artists, including Jason Wade, of Lifehouse.
                        Through these interactions, I have gained experience passionately working with clients to best represent their ideas with a finished product we can both be proud of. <b> <a target="_blank" rel="noreferrer" href="https://www.instagram.com/jake_diggity/?hl=en">Check out some of my artwork here.</a></b></p>

                </div>
            </div>




        </>
    )
}