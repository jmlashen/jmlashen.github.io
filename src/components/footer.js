//Purpose: Creates and displays the FOOTER section

import React from "react"
import git from '../images/git.svg'
import linkedin from '../images/linkedin.svg'
import mail from '../images/mail.svg'
import nssicon from '../images/nssicon.svg'
import "../styles/main.scss";





export const Footer = () => {
    return (
        <>
            <div className="footer-container-footer">
            <div className="footer-icons">
                <a target="_blank" rel="noreferrer" href="https://github.com/jmlashen"><img className="github" src={git} alt="github" /></a>
                <a href = "mailto: jmlashen@gmail.com"><img className="mail" src={mail} alt="mail" /></a>
                <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/jake-lashenik/"><img className="linkedin" src={linkedin} alt="linkedin" /></a>
                <a target="_blank" rel="noreferrer" href="https://nashvillesoftwareschool.com/"><img className="nss" src={nssicon} alt="nss" /></a>  
            </div>
            
            <div>
                <h3>
                    &copy; Jake Lashenik 2022
                </h3>
            </div>
            </div>
            
        </>
    )
}