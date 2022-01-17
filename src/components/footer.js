import React from "react"
import git from '../images/git.svg'
import linkedin from '../images/linkedin.svg'
import mail from '../images/mail.svg'





export const Footer = () => {
    return (
        <>
            <div className="footer-container">
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

            <div className="footer-container-bottom">
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