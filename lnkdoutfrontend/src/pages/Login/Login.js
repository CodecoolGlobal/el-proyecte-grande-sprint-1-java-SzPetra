import React, {useState} from 'react';
import {postData} from "../../util/Fetch";
import {useNavigate} from "react-router-dom";
import '../Login/assets/login.css'


export default function Login({setIsLoggedIn}) {
    const [isError, setIsError] = useState(false);
    const [userName, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        postData('/login', {"username" : userName, password}).then((response) => {
            if (response.ok) {
                let header = response.headers.get('Authorization');
                localStorage.setItem("user", JSON.stringify({userName}));
                localStorage.setItem("header", JSON.stringify(header));
                setIsLoggedIn(true);
                navigate("/")

            } else {
                setIsError(true);
                setUsername("");
                setPassword("");
            }
        })
    }

    return (
        <>
            <div className={"welcome-register"}>
                <h1>{"Login"}</h1>
            </div>
            <div className="login">
                <img src={'https://images.unsplash.com/photo-1548142813-c348350df52b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cGVvcGxlJTIwc21pbGV8ZW58MHx8MHx8&w=1000&q=80'} alt={""}/>
                <div className="login-container">
                    <form className="login-form" onSubmit={handleSubmit}>
                        <label className="login-label">Username</label>
                        <input
                            type="text"
                            required={true}
                            autoFocus={true}
                            value={userName}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                        <label className="login-label">Password</label>
                        <input
                            type="password"
                            required={true}
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <button  className="login-btn" type={"submit"}>
                            Login
                        </button>
                        {isError && <div className="login-error">The username or password is incorrect!</div>}
                    </form>
                </div>

            </div>
        </>

    )
}