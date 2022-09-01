import React from 'react';
import '../assets/landing_page.css';
import {Link} from "react-router-dom";

function GetStarted(props) {
    return (
        <div className={'get-started-container'}>

            <div className={'get-started'}>
                <p className={'get-started-label'}>Get started</p>
                <Link to={'/company/registration'}> <button className={'get-started-btn'}><b>Join us</b></button> </Link>
                <p className={'get-started-text'}>as a Company</p>
            </div>

            <div className={'get-started-border'}>

            </div>

            <div className={'get-started'}>
                <p className={'get-started-label'}>Get started</p>
                <Link to={'/student/registration'}> <button className={'get-started-btn'}><b>Join us</b></button> </Link>
                <p className={'get-started-text'}>as a Student</p>
            </div>

        </div>
    );
}

export default GetStarted;