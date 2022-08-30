import { Outlet, Link } from "react-router-dom";

const Header = () => {
    return (
        <>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Logo</Link>
                    </li>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/student">Student</Link>
                    </li>
                    <li>
                        <Link to="/company">Company</Link>
                    </li>
                </ul>
            </nav>

            <Outlet />
        </>
    )
};

export default Header;