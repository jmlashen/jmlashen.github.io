//Purpose: Creates and displays the ABOUT section

import React from "react"
import aboutme from "../images/aboutme.svg"
import group from "../images/group.svg"
import art2 from "../images/art2.PNG"
import aboutPro from "../images/aboutPro.jpg"
import techToolsMobile from "../images/techToolsMobile.svg"
import uiux from "../images/uiux.svg"
import personas from "../images/personas.png"



export const About = () => {
    return (
        <>

            <div id="about" >
            </div>

            <div className="abouthead-img"><img className="aboutme-img" src={aboutme} alt="about image" /></div>

            {/* ABOUT SECTION - ME*/}

            <div className="aboutsection">

                <div className="about-text-main">
                    <div><img className="artabout-mobile" src={aboutPro} alt="me image" /></div>
                    <div><h1>Hi, I'm Jake!</h1></div>
                    <p className="paragraphs">I'm a Software Developer based in Nashville, TN. My colleagues have described me as:I'm a Software Developer based in Nashville, TN. My colleagues have described me as:I'm a Software Developer based in Nashville, TN. My colleagues have described me as:</p>
                    <ul><li>a motivator</li><li>great in a team</li><li>always striving to be fair</li><li>a true creative</li><li>humble</li><li>an infectious personality</li><li>naturally a leader</li><li>good with challenges</li></ul>
                    <div className="aboutgroup"><img className="aboutgroup-img" src={group} alt="c51 logo" /></div>
                </div>



                {/* TECH SECTION - ME*/}


                <div className="about-text-main">
                    <div><img className="techtool" src={techToolsMobile} alt="computer image" /></div>
                    <div><h1>Tech and Tools</h1></div>
                    <p className="paragraphs">I enjoy the challenge and ongoing learning process of being a developer. I have established a solid foundation with JavaScript and React library.</p>
                    <p className="paragraphs">My desgin and styling skills are achieved through my knowledge of CSS, SASS, Figma, and Photoshop.</p>
                    <p className="paragraphs">I also have experience building CRUD-based applications using ERDs, JSON server, fetch calls, and testing APIs using Postman. Other tools include Cloudinary and the best practices when using Git.</p>
                </div>



                {/* UIUX SECTION - ME*/}


                <div className="about-text-main">
                    <div><img className="artabout-uiux" src={uiux} alt="uiux logo" /></div>
                    <div><h1>UI/UX</h1></div>
                    <p className="paragraphs">I find myself naturally drawn to the user experience and client-side. With my experiences in collaboration and leadership as an educator, I have always enjoyed the intrinsic rewards of helping others achieve their goals and overcome challenges.</p>
                    <p className="paragraphs">The Nashville Software School's program challenged our small group to create the Cohort's website. We gained valuable experience learning the principles and processes of UI/UX. From wireframes to prototypes, user testing, informational architecture, and visual hierarchy–we got our hands dirty with every step.</p>
                    <p className="paragraphs">Based on research and data, here's two examples of personas that helped me create this portfolio:</p>
                    <div><img className="artabout-personas" src={personas} alt="c51 logo" /></div>
                </div>



                {/* ART SECTION - ME*/}


                <div className="about-text-main">
                    <div><img className="artabout-mobile" src={art2} alt="artwork" /></div>
                    <div><h1 >Art and Design</h1></div>
                    <p className="paragraphs">My background in design comes from working as a freelance graphic designer. I mostly design album art for several musical artists, including Jason Wade, of Lifehouse.</p>
                    <p className="paragraphs">Through these interactions, I have gained experience passionately working with clients to best represent their ideas with a finished product we can both be proud of.</p>
                    <p className="paragraphs"><a target="_blank" href="https://www.instagram.com/jake_diggity/?hl=en">Check out some of my artwork here.</a></p>
                </div>
            </div>




        </>
    )
}