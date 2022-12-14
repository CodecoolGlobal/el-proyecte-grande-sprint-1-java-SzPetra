import React from 'react';
import {Link} from "react-router-dom";
import '../NoPage.css';

function NoPage() {
    return (
        <section className="page_404">
            <div className="nopage-container">

                <h1 className="text-center ">404</h1>
                <div className="four_zero_four_bg"></div>

                <div className="contant_box_404">
                    <h3 className="h2">Look like you're lost</h3>
                    <p>the page you are looking for not available!</p>
                    <Link id={`go-home`} style={{textDecoration: "none"}} to={'/'} className="link_404">Go to Home</Link>
                </div>

            </div>
        </section>
    );
}

export default NoPage;