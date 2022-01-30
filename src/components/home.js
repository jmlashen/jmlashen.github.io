import React from "react";
import JakeLogo from "../images/JakeLogo.svg"
import { EmbedMain } from "./embed-main";
import { EmbedMainDesk } from "./embed-main-desktop";


export const Home = () => {

    return (
        <>
            <div className='landcontainer'>
                <div className='jake-logo-containter'>
                    <img className="jakelogo" src={JakeLogo} alt="C51"></img>
                </div>
                <div >
                <EmbedMain />
            </div>
                <div>
                <EmbedMainDesk />
                </div>
                </div>

           
        </>
    )
}