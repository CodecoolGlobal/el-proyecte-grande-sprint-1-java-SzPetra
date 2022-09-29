import { Outlet, Link } from "react-router-dom";
import './assets/navbar.css';

const Header = ({authTokens, handleLogout}) => {
    return (
        <>
            <nav>
                <ul>
                    <Link className="link" to="/">Home</Link>
                    <li><a href="#about">About</a></li>
                    <li><a href="#contact">Contact</a></li>
                    <li style={{float:"right", marginRight: "0.3em"}}><a href="#">Login</a></li>
                    <Link className="link" to="/student/list-all">Students</Link>
                    <Link className="link" to="/company/list-all">Companies</Link>
                    <li>
                        {authTokens ? (
                            <Link onClick={handleLogout}> Logout </Link>
                        ) : (
                            <Link to="/login">Login</Link>
                        )}
                    </li>
                </ul>
            </nav>

            <Outlet />
        </>
    )
};

export default Header;