import React, {useState} from 'react';
import {postData} from "../../util/Fetch";
import {useNavigate} from "react-router-dom";

export default function Login({setIsLoggedIn}) {
    const [isError, setIsError] = useState(false);
    const [userName, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [role] = useState("");

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        postData('/login', {"username" : userName, password, role}).then((response) => {
            console.log("result", response);
            if (response.ok) {
                let header = response.headers.get('Authorization');
                localStorage.setItem("user", JSON.stringify({userName}));
                localStorage.setItem("header", JSON.stringify(header));
                localStorage.setItem("role", JSON.stringify({role}));
                setIsLoggedIn(true);
                console.log(response);
                navigate("/")

            } else {
                setIsError(true);
            }
        })
            .catch((e) => {
                setIsError(true);
                console.log(e);
            });
    }

    return (
        <div className="Auth-form-container">
            <form className="Auth-form" onSubmit={handleSubmit}>
                <div className="Auth-form-content">
                    <h3 className="Auth-form-title">Sign In</h3>
                    <div className="form-group mt-3">
                        <label>Username</label>
                        <input
                            type="username"
                            className="form-control mt-1"
                            placeholder="Enter username"
                            required={true}
                            value={userName}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </div>
                    <div className="form-group mt-3">
                        <label>Password</label>
                        <input
                            type="password"
                            className="form-control mt-1"
                            placeholder="Enter password"
                            required={true}
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <div className="d-grid gap-2 mt-3">
                        <button className="btn btn-primary" type={"submit"}>
                            Submit
                        </button>
                        {isError && <div>The username or password is incorrect.</div>}
                    </div>
                </div>
            </form>
        </div>
    )
}