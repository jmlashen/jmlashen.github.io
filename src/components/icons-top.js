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
                <a target="_blank" rel="noreferrer" href="https://github.com/jmlashen"><img className="github" src={git} alt="github" /></a>
                <a rel="noreferrer" href="mailto: jmlashen@gmail.com"><img className="mail" src={mail} alt="footer mail" /></a>
                <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/jake-lashenik/"><img className="linkedin" src={linkedin} alt="linkedin" /></a>
                <a target="_blank" rel="noreferrer" href="https://nashvillesoftwareschool.com/"><img className="nss" src={nssicon} alt="Nashville Software School" /></a>
            </div>
            </div>
            
        </>
    )
}