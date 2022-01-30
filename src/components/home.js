import React from "react";
import Video from "../video";
import { EmbedVideo } from "./embed-video";
import JakeLogo from "../images/JakeLogo.svg"


export const Home = () => {

    return (
        <>
            <div className='landcontainer'>
                <div className='jake-logo-containter'>
                    <img className="jakelogo" src={JakeLogo} alt="C51"></img>
                </div>

                <div className='main-video-container'>
                    <Video VideoSource="https://res.cloudinary.com/djnk0ey5p/video/upload/v1643040057/sxhprvndi3ztnot2kadk.mp4" />
                </div>
            </div>

            <div className='main-video-container-main'>
                <EmbedVideo />
            </div>
        </>
    )
}