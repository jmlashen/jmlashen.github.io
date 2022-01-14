//Purpose: Creates and displays the WORK sections

import React from "react"
import { Button } from "react-bootstrap"
import caddie from "../images/caddie.png"
import Video from "../video"
import C51 from "../images/C51.svg"
import workhead from "../images/workhead.svg"
import mobile from "../images/mobile.svg"
import desktop from "../images/desktop.svg"
import { WorkButton } from "./butttons"






export const Work = () => {
    return (
        <>
<div id="work" className="content"></div>
            <div className="mainworkcontainer">
                <div className="workhead-container"><img className="workhead" src={workhead} alt="Card Caddie logo" /></div>
                
                    
                    
                </div>
               
                <div className="worksection">
                
                    <div className="workbox">
                    
                        <div className="caddie-content">
                            
                        
                    <div className="workmain-left" >
                    <div className="first-box">
                    
                        <div className="workcontain-main">
                        
                        </div>
                        <div className="c51logo-top"><img className="c51" src={C51} alt="Card Caddie logo" /></div>
                       
                        
                        <div className="C51-description">
                        <div ><h4 className="h4">Cohort-51 Website</h4></div>
                        
                                <h6 className="h6">This group project was the most rewarding project I've ever had the pleasure of working on. Our goal was to showcase our software development and UI/UX skills with a personality and flair to facilitate getting hired quickly by an employer that is a good fit. With significant group planning, data collection, and user testing, we learned a lot about UX and the processes that precede the launch of the final product. We even revealed a pain point in the School curriculum relating to graduation requirements during the process!<h6 className="h6">Everyone in the group equally made significant contributions. My key contributions include logo design, the design and styling of the developer section, and prototyping. One favorite piece of code was the helper function I wrote that changes the colored ring around a developer's photo. The color-coordinated conditional was to help distinguish between one of two developer types. We had such a terrific time creating this website together!</h6></h6>
                            </div>
                            </div>
                            
                            
                            
                            
                    </div>
                            
                    
                           
                      
                    <div className="workbuttons">
                                <div><a target="_blank" href="https://nss-day-cohort-51.github.io/"><Button>Try It Out</Button></a></div>
                                <div><a target="_blank" href="https://github.com/nss-day-cohort-51/nss-day-cohort-51.github.io"><Button>View Repo</Button></a></div>
                            </div>

                       
                            <div className="first-box-video">
                            <div className="caddie-video-container">
                                <Video VideoSource="https://res.cloudinary.com/djnk0ey5p/video/upload/v1641503245/My_Movie_2_hghfez.mp4" />
                            </div>
                            </div>
                            
                            

                            <div className="workmain-left">
                            <div className="first-box">
                                
                            
                    
                        <div className="workcontain-main">
                        
                            
                        </div>
                        
                        <div className="C51-description">
                        <div className="c51logo-top-caddie"><img className="caddie" src={caddie} alt="Card Caddie logo" /></div>
                        <div ><h4 className="h4">Card Caddie</h4></div>
                        
                                <h6 className="h6">This user-specific app helps golfers keep track of scores and reflections from their rounds. Users can also add a new course and crowdsource courses from other users. Card Caddie has full CRUD capability (React, API fetch calls, React-Routing, and JSON server) with styling achieved through CSS, Cloudinary, and Reactstrap for an approachable user experience.</h6>
                            </div>
                            </div>
                            
                            
                    </div>
                            
                    
                           
                      
                    <div className="workbuttons">
                                <div><a target="_blank" href="https://card-caddie.herokuapp.com/"><Button>Try It Out</Button></a></div>
                                <div><a target="_blank" href="https://github.com/jmlashen/cardcaddie"><Button>View Repo</Button></a></div>
                            </div>

                       
                            <div className="first-box-video">     
                            <div className="caddie-video-container">
                                <Video VideoSource="https://res.cloudinary.com/djnk0ey5p/video/upload/v1641503833/My_Movie_2_aagjvj.mp4" />
                            </div>
                            </div>

                            
                            
                            <div className="first-box">
                            <div className="C51-description">
                        
                        <div className="prototype">
                            <div className="logo-prototype-mobile"><a target="_blank" href="https://www.figma.com/proto/5TqtET6dRZyc1YjqgODj0X/C-51-Prototype---Mobile?page-id=0%3A1&node-id=2%3A818&viewport=241%2C48%2C0.34&scaling=scale-down&starting-point-node-id=2%3A818"><img className="mobile" src={mobile} alt="prototype mobile" /></a></div>
                            <div className="logo-prototype-desktop"><a target="_blank" href="https://www.figma.com/proto/RjPnJ4xrvjgEBBPvwayI9M/C-51-Prototype---Desktop?page-id=0%3A1&node-id=54%3A700&viewport=241%2C48%2C0.18&scaling=scale-down&starting-point-node-id=54%3A700&show-proto-sidebar=1"><img className="desktop" src={desktop} alt="prototype desktop" /></a></div>
                            </div>
                            
                            <div className="proto-head" ><h4 className="h4">Prototypes</h4> <div className="planning"><h6>view all planning resources for the Cohort-51 Website Group Project  <a target="_blank" href="https://github.com/nss-day-cohort-51/nss-day-cohort-51.github.io">here.</a></h6></div></div>
                            
                                <h6 className="h6">Based on user data and group planning for the Cohort-51 Website, I created mobile and desktop prototypes for the project using Figma. Prototyping is one of my favorite processes that precede the launch of the final product and helps present a clear vision.</h6>
                            </div>
                            </div>


                         
                            
                      


                    </div>

                </div>

            </div>




            







        </>
    )
}

