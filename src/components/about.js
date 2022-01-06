import React from "react"
import JakeAbout from "../images/JakeAbout.png"


export const About = () => {
    return (
        <>
            <div className="about-section">
                <div className="about-box">
                    <div className="about-content">
                        <div><h1>About Me</h1></div>
                        <div><img className="JakeAbout" src={JakeAbout} alt="c51 logo" /></div>
                        <div><h6 className="about-text">
My background consists of a higher level of appreciation and understanding for design and technology. I have experience with design and technology working as a freelance graphic artist while solely managing media and technology based structures at my previous employment. I also have experience working directly with people meeting their needs through compassion and wholehearted efforts as an educator. I am now directing that experience on honing in on my skills with HTML, CSS, Javascript, and React, to become the best UX designer and front-end programmer I can be.</h6></div>
                    </div>
                    <div className="about-container"></div>
                </div>
            </div>
        </>
    )
}