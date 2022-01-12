import React from "react"
import { Button } from "react-bootstrap"
import caddie from "../images/caddie.png"
import Video from "../video"
import C51 from "../images/C51.svg"
import workhead from "../images/workhead.svg"
import mobile from "../images/mobile.svg"
import desktop from "../images/desktop.svg"






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
                        <div ><h4 className="h4">Cohort-51 Webiste</h4></div>
                        
                                <h6 className="h6">This was the best group project I have ever been apart of. Our goal was to help showcase our Cohort's software development skills with personality to facilitate getting hired quickly by an employer that is a good fit. Everyone contribtued greatly and we had so much fun!</h6>
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
                        
                                <h6 className="h6">This app helps golfers keep track of their scores as well as reflections from the rounds and the courses they play. App has full CRUD capability (React, API fetch calls, React-Routing, and JSON server) Styling was achieved through CSS, Cloudinary and reactstrap for an approachable user experience.</h6>
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
                            <div ><h4 className="h4">Prototypes</h4></div>
                                <h6 className="h6">This app helps golfers keep track of their scores as well as reflections from the rounds and the courses they play. App has full CRUD capability (React, API fetch calls, React-Routing, and JSON server) Styling was achieved through CSS, Cloudinary and reactstrap for an approachable user experience.</h6>
                            </div>
                            </div>


                         
                            
                      


                    </div>

                </div>

            </div>




            







        </>
    )
}

