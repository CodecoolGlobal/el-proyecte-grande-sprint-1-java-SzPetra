import React from 'react';
import Content from "./components/Content";
import {AuthContext} from "../Login/Authorization";
// import Footer from "../../components/Footer";
import GetStarted from "./components/GetStarted";
import About from "./components/About";
import Contact from "./components/Contact";
import Login from "../Login/Login";
import {useState} from "@types/react";

function LandingPage({authTokens, setAuthTokens}) {

    return (
        <>
            <Content />
            <GetStarted />
            <About />
            <Contact />
            <Login />
            <AuthContext.Provider value={{authTokens, setAuthTokens}}></AuthContext.Provider>
            {/*<Footer/>*/}
        </>
    );
}

export default LandingPage;