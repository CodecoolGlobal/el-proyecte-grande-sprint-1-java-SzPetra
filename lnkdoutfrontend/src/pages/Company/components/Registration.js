import React, {useState} from 'react';

function Registration({name, setName, email, setEmail, phone, setPhone,
                          password, setPassword, confirmPassword, setConfirmPassword,
                          city, setCity, handleSubmit, isValid}) {
    return (
        <form className="form" onSubmit={handleSubmit}>
            {isValid && <div>Password or Name is invalid</div>}
            <div className="form-body">
                <div className="username">
                    <label className="form_label" htmlFor="name" >Name</label>
                    <input
                        required={true}
                        className="form_input"
                        type="text"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Enter name here"
                    />
                </div>
                <div className="email">
                    <label className="form_label" htmlFor="email">Email</label>
                    <input
                        required={false}
                        type="email"
                        id="email"
                        className="form_input"
                        placeholder="Enter email here"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className="password">
                    <label className="form_label" htmlFor="password">Password </label>
                    <input
                        required={true}
                        className="form_input"
                        type="password"
                        id="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <div className="confirm-password">
                    <label className="form_label" htmlFor="confirmPassword">Confirm Password </label>
                    <input
                        required={true}
                        className="form_input"
                        type="password"
                        id="confirmPassword"
                        placeholder="Confirm Password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                </div>
                <div className="phone">
                    <label className="form_label" htmlFor="phone">Phone number</label>
                    <input
                        required={true}
                        className="form_input"
                        type="phone"
                        id="phone"
                        placeholder="Enter phone number"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                    />
                </div>
                <div className="city">
                    <label className="form_label" htmlFor="city">City</label>
                    <input
                        required={true}
                        className="form_input"
                        type="text"
                        id="city"
                        placeholder="Enter city here"
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                    />
                </div>
            </div>
            <div className="registration-footer">
                <button
                    type="submit"
                    className="btn">Register</button>
            </div>
        </form>
    )
}

export default Registration;