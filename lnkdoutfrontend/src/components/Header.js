import { Outlet, Link } from "react-router-dom";
import './assets/navbar.css';

const Header = ({isLoggedIn, setIsLoggedIn}) => {

    const handleLogout = () => {
        setIsLoggedIn(false)
        localStorage.removeItem("user")
        localStorage.removeItem("header")

    }

    return (
        <>
            <nav>
                <ul>
                    <Link className="link" to="/">Home</Link>
                    <li><a href="#about">About</a></li>
                    <li><a href="#contact">Contact</a></li>
                    {isLoggedIn &&
                        <Link className="link" to="/student/list-all">Students</Link>
                    }
                    {isLoggedIn &&
                        <Link className="link" to="/company/list-all">Companies</Link>
                    }
                    <li style={{float:"right", marginRight: "3em"}}>
                        {isLoggedIn ? (
                            <a href={"/"} onClick={handleLogout}> Logout </a>
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