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
                <a target="_blank" href="https://github.com/jmlashen"><img className="github" src={git} alt="footer image" /></a>
                <a href = "mailto: jmlashen@gmail.com"><img className="mail" src={mail} alt="footer image" /></a>
                <a target="_blank" href="https://www.linkedin.com/in/jake-lashenik/"><img className="linkedin" src={linkedin} alt="footer image" /></a>
                <a target="_blank" href="https://nashvillesoftwareschool.com/"><img className="nss" src={nssicon} alt="footer image" /></a>  
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