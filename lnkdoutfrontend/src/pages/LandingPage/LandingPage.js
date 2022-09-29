import React from 'react';
import Content from "./components/Content";

// import Footer from "../../components/Footer";
import GetStarted from "./components/GetStarted";
import About from "./components/About";
import Contact from "./components/Contact";
import Login from "../Login/Login";

function LandingPage() {

    return (
        <>
            <Content />
            <GetStarted />
            <About />
            <Contact />
            <Login />
            {/*<Footer/>*/}
        </>
    );
}

export default LandingPage;