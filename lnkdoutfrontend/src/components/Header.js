import { Outlet, Link } from "react-router-dom";
import './assets/navbar.css';

const Header = () => {
    return (
        <>
            <nav>
                <ul>
                    <Link className="link" to="/">Home</Link>
                    <li><a href="#about">About</a></li>
                    <li><a href="#contact">Contact</a></li>
                    <li style={{float:"right", marginRight: "0.3em"}}><a href="#">Login</a></li>
                </ul>
            </nav>

            <Outlet />
        </>
    )
};

export default Header;