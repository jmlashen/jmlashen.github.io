//Purpose: Creates and displays the ICONS at the top of the page

import React from "react"
import git from '../images/git.svg'
import linkedin from '../images/linkedin.svg'
import mail from '../images/mail.svg'
import nssicon from '../images/nssicon.svg'
import "../styles/main.scss";





export const IconsTop = () => {
    return (
        <>
            <div className="footer-container-top">
            <div className="footer-icons">
                <a target="_blank" href="https://github.com/jmlashen"><img className="github" src={git} alt="footer image" /></a>
                <a href = "mailto: jmlashen@gmail.com"><img className="mail" src={mail} alt="footer image" /></a>
                <a target="_blank" href="https://www.linkedin.com/in/jake-lashenik/"><img className="linkedin" src={linkedin} alt="footer image" /></a>
                <a target="_blank" href="https://nashvillesoftwareschool.com/"><img className="nss" src={nssicon} alt="footer image" /></a>
            </div>
            </div>
            
        </>
    )
}