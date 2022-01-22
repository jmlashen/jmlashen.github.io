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
<div><img className="artabout-mobile" src={aboutPro} alt="c51 logo" /></div>
<div><h1>Hi, I'm Jake!</h1></div>
<p className="paragraphs">I'm a UI/UX focused Front-End Software Developer currently based in Nashville, TN. My colleagues have described me as:</p>
<ul><li>a motivator</li><li>great in a team</li><li>always striving to be fair</li><li>a true creative</li><li>humble</li><li>an infectious personality</li><li>naturally a leader</li><li>good with challenges</li></ul>


<div className="aboutgroup"><img className="aboutgroup-img" src={group} alt="c51 logo" /></div>

</div>



{/* TECH SECTION - ME*/}


<div className="about-text-main">
<div><img className="techtool" src={techToolsMobile} alt="c51 logo" /></div>
<div><h1>Tech and Tools</h1></div>
<div className="paragraphs">
<p>I enjoy the challenge and ongoing learning process of being a developer. I have established a solid foundation with the language and framework of JavaScript and the use of State, Props, and the browser-independent DOM system of React. My styling and design skills are achieved through my knowledge using CSS, SASS, Figma, and Photoshop. I also have experience with data by building a Back-End using JSON server with fetch calls and testing APIs using Postman. Other tools included Cloudinary and the best use and practices when using Git.</p>
</div>
</div>


            
{/* UIUX SECTION - ME*/}


<div className="about-text-main">
<div><img className="artabout-uiux" src={uiux} alt="c51 logo" /></div>
<div><h1>UI/UX</h1></div>
<div>
<p className="paragraphs">I find myself naturally drawn to the user experience and client-side. With my experiences in collaboration and leadership as an educator, I have always enjoyed the intrinsic rewards of helping others achieve their goals and overcome challenges. The Nashville Software School program challenged our small group to create the Cohort's website. We gained valuable experience learning the principles and processes of UI/UX. From wireframes to prototypes, user testing, informational architecture, and visual hierarchy–we got our hands dirty with every step.<br></br><p>Based on research and data, here's two examples of personas that helped me create this portfolio:</p></p>
</div>
<div><img className="artabout-personas" src={personas} alt="c51 logo" /></div>
</div>


    
{/* ART SECTION - ME*/}


<div className="about-text-main">
<div><img className="artabout-mobile" src={art2} alt="c51 logo" /></div>
<div><h1 >Art and Design</h1></div>
<p className="paragraphs">My background in design comes from working as a freelance graphic designer. I mostly design album art for several musical artists, including Jason Wade, of Lifehouse. I also have experience working with a diverse set of clients. I have worked with companies and clients ranging from beverage companies to TV shows. Through these interactions, I have gained experience passionately working with clients to best represent their ideas with a finished product we can both be proud of.</p>
<p className="paragraphs"><a target="_blank" href="https://www.instagram.com/jake_diggity/?hl=en">Check out some of my artwork here.</a></p> 
</div>
</div>




</>
)
}