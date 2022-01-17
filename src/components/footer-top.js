//Purpose: Creates and displays the ABOUT ME sections

import React from "react"
import git from '../images/git.svg'
import linkedin from '../images/linkedin.svg'
import mail from '../images/mail.svg'
import "../styles/main.scss";





export const FooterTop = () => {
    return (
        <>
            <div className="footer-container-top">
            <div className="footer-icons">
                <a target="_blank" href="https://github.com/jmlashen"><img className="github" src={git} alt="footer image" /></a>
                <a href = "mailto: jmlashen@gmail.com"><img className="mail" src={mail} alt="footer image" /></a>
                <a target="_blank" href="https://www.linkedin.com/in/jake-lashenik/"><img className="linkedin" src={linkedin} alt="footer image" /></a>
                
              
            </div>
            <div>
                <h3>
                    this website is not a template - designed and developed by me, for you!
                </h3>
            </div>
            </div>
            
        </>
    )
}