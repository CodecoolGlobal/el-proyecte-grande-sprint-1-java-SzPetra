import React from 'react';
import Content from "./components/Content";
// import Footer from "../../components/Footer";
import GetStarted from "./components/GetStarted";
import About from "./components/About";

function LandingPage(props) {
    return (
        <>
            <Content />
            <GetStarted />
            <About />
            {/*<Footer/>*/}
        </>
    );
}

export default LandingPage;