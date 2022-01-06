import React from "react"
import C51 from "../images/C51.svg"
import { Button } from "react-bootstrap"
import Video from "../video"





export const Work51 = () => {
    return (
        <>
            <div className="worksection">
                <div className="workbox">
                    
                    <div className="content">

                        <div><h1>Cohort Website Group Project</h1></div>
                        <div><img className="c51" src={C51} alt="c51 logo" /></div>
                        <div><h6>Description</h6></div>
                        <div>
                        <Video VideoSource="https://res.cloudinary.com/djnk0ey5p/video/upload/v1641318963/Card_Caddie_Demo_ofstlb.mp4"/>
                        </div>
                        <div className="workbuttons">
                        <div><Button>Try It Out!</Button></div>
                        <div><Button>View Repo</Button></div>
                    </div>
                    </div>
                   
                    <div className="workcontainer"></div>
                </div>
            </div>



        </>
    )
}