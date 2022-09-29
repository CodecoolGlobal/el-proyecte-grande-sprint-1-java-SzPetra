import React from 'react';
import '../assets/landing_page.css';
import {Link} from "react-router-dom";

function GetStarted() {
    return (
        <>
            <div className={"get-started-con"}>

                <h2>Get Started</h2>
            </div>
        <section className={'get-started-container'}>
            <div className={'get-started-section'}>
                <img src={"https://www.firmaxhungary.com/wp-content/uploads/2019/09/company-formation-hungary.jpg"}/>
                <div className={'get-started-content'}>
                    <p className={'get-started-label'}>Get started</p>
                    <Link to={'/company/registration'}> <button className={'get-started-btn'}><b>Join us</b></button> </Link>
                    <p className={'get-started-text'}>as a Company</p>
                </div>
            </div>

            <div className={'get-started-border'}>

            </div>

            <div className={'get-started-section'}>
                <img src={'https://miro.medium.com/max/1400/0*fq8PxWnuHi8uNZD-'}/>
                <div className={'get-started-content'}>
                    <p className={'get-started-label'}>Get started</p>
                    <Link to={'/student/registration'}> <button className={'get-started-btn'}><b>Join us</b></button> </Link>
                    <p className={'get-started-text'}>as a Student</p>
                </div>
            </div>
        </section>
        </>
    );
}

export default GetStarted;