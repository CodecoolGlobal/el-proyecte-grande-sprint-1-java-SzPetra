import React from 'react';
import './assets/footer.css'

function Footer(props) {
    return (
        <div className="footer">
            <div className="footer-logo">
                <p>{"Logo here"}</p>
            </div>
            <div className="footer-links">
                <a id={"cookie"} href="/#">{"Cookie Policy"}</a>
                <a id={"privacy"} href="/#">{"Privacy Policy"}</a>
                <a id={"site"} href="/#">{"Site Map"}</a>
            </div>
        </div>
    );
}

export default Footer;