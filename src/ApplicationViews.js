import React from "react";
import { Route } from "react-router-dom"
import { About } from "./components/about";
import { Footer } from "./components/footer";
import { Work } from "./components/work";
import { Home } from "./components/home";

export const ApplicationViews = () => {

    return (
        <>
            
            <Route exact path="/about">
                <About />
            </Route>

            <Route exact path="/work">
                <Work />
            </Route>

            <Route exact path="/">
            <Home />
            </Route>
           
            <div className='footer-container'>
                <Footer />
            </div>

        </>
    )
}