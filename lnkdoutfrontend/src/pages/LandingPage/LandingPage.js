import React from 'react';
import Content from "./components/Content";
import GetStarted from "./components/GetStarted";
import About from "./components/About";
import Contact from "./components/Contact";

function LandingPage(props) {
    return (
        <>
            <Content />
            <GetStarted />
            <About />
            <Contact />
            {/*<Footer/>*/}
        </>
    );
}

export default LandingPage;