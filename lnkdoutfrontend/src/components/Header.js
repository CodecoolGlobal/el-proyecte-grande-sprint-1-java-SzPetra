import { Outlet, Link } from "react-router-dom";
import './assets/navbar.css';

const Header = () => {
    return (
        <>
            <nav>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">News</a></li>
                    <li><a href="#">Contact</a></li>

                    <li style={{float:"right"}}><a href="#">About</a></li>
                </ul>
            </nav>

            <Outlet />
        </>
    )
};

export default Header;