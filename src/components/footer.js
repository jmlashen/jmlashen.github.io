import React from "react"
import git from '../images/git.svg'
import linkedin from '../images/linkedin.svg'
import resume from '../images/resume.svg'




export const Footer = () => {
    return (
        <>
            <div className="footer-icons">
            <a target="_blank" href="https://github.com/jmlashen"><img className="github" src={git} alt="footer image" /></a>
            <a target="_blank" href="https://www.linkedin.com/in/jake-lashenik/"><img className="linkedin" src={linkedin} alt="footer image" /></a>
            </div>
           
            
        </>
    )
}