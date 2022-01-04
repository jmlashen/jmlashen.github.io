import React from "react"
import git from '../images/git.svg'
import linkedin from '../images/linkedin.svg'
import resume from '../images/resume.svg'




export const Footer = () => {
    return (
        <>
            <div className="footer-icons">
            <img className="github" src={git} alt="footer image" />
            <img className="linkedin" src={linkedin} alt="footer image" />
            </div>
           
            
        </>
    )
}