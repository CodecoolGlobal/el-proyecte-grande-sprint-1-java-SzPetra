import React, {useState} from 'react';
import {postData} from "../../util/Fetch";
import {useAuth} from "./Authorization";

export default function Login() {

    const [isLoggedIn, setLoggedIn] = useState(false);
    const [isError, setIsError] = useState(false);
    const [userName, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const { setAuthTokens } = useAuth();

    const handleSubmit = (e) => {
        e.preventDefault();
        postData('/login', {userName, password}).then((result) => {
            console.log("result", result);
            if (result.status === 200) {
                setAuthTokens(result.data);
                setLoggedIn(true);
                console.log(result.data);
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