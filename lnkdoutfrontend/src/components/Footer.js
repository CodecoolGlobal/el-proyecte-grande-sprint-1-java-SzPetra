import React from 'react';
import './assets/footer.css'

function Footer(props) {
    return (
        <div className="footer">
            <div className="footer-logo">
                <p>{"Logo here"}</p>
            </div>
            <div className="footer-links">
                <a href="/#">{"Cookie Policy"}</a>
                <a href="/#">{"Privacy Policy"}</a>
                <a href="/#">{"Site Map"}</a>
            </div>
        </div>
    );
}

export default Footer;