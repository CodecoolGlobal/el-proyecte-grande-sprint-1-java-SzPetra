import { Outlet, Link } from "react-router-dom";
import './assets/navbar.css';

const Header = ({isLoggedIn, setIsLoggedIn}) => {

    const handleLogout = () => {
        setIsLoggedIn(false)
        localStorage.removeItem("user")
        localStorage.removeItem("header")
        localStorage.removeItem("role")

    }

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
                        {isLoggedIn ? (
                            <a href={"/"} onClick={handleLogout}> Logout </a>
                        ) : (
                            <Link to="/login">Login</Link>
                        )}
                    </li>
                    {localStorage.getItem("role") === "company" &&
                        <li>
                            <Link className="link" to="/job/create-job-offer">Create job offer</Link>
                        </li>
                    }
                </ul>
            </nav>

            <Outlet />
        </>
    )
};

export default Header;