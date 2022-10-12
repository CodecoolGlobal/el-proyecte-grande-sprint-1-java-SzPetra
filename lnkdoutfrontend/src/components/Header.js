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
                    <Link id={"home"} className="link" to="/">Home</Link>
                    <li><a id={"about"} href="#about">About</a></li>
                    <li><a id={"contact"} href="#contact">Contact</a></li>
                    {isLoggedIn &&
                        <Link id={"student-list"} className="link" to="/student/list-all">Students</Link>
                    }
                    {isLoggedIn &&
                        <Link id={"company-list"} className="link" to="/company/list-all">Companies</Link>
                    }
                    <li style={{float:"right", marginRight: "3em"}}>
                        {isLoggedIn ? (
                            <a id={"logout"} href={"/"} onClick={handleLogout}> Logout </a>
                        ) : (
                            <Link id={"login"} to="/login">Login</Link>
                        )}
                    </li>
                    {localStorage.getItem("role") === "company" &&
                        <li>
                            <Link id={"job-offer"} className="link" to="/job/create-job-offer">Create job offer</Link>
                        </li>
                    }
                </ul>
            </nav>

            <Outlet />
        </>
    )
};

export default Header;