import React from "react";
import resume2022 from "../images/resume2022.png"
import "../styles/resume.scss";

export const Resume = () => {
    return (
        <>
        <div className="resume2022" >
        <img src={resume2022} alt="resume2022"/>
        <p>View PDF HERE<a href="https://drive.google.com/file/d/1fyYNI-sko8b0IgMP6ZUcmIgHE1Xv01Of/view"></a></p>
        </div>
        </>
    )
}