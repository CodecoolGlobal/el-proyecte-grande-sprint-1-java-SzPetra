import { Outlet, Link } from "react-router-dom";
import './assets/navbar.css';

const Header = () => {
    return (
        <>
            <nav>
                <ul className="navbar">
                    <li className="nav-item">
                        <Link to="/" className="link">Home</Link>
                    </li>
                    <li className="nav-item">
                        <a href="/about" className="link">About</a>
                    </li>
                    <li className="nav-item">
                        <a href="/contact" className="link">Contact</a>
                    </li>
                    <li className="nav-item">
                        <Link to="/login" className="login-link">Login</Link>
                    </li>
                </ul>
            </nav>

            <Outlet />
        </>
    )
};

export default Header;