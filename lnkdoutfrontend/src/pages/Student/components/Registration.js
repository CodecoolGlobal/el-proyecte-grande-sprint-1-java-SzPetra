import React from 'react';

function Registration({name, setName, age, setAge, email, setEmail, phone, setPhone, password, setPassword,
                              confirmPassword, setConfirmPassword, city, setCity, handleSubmit}) {
    return (
        <form className={'container'} onSubmit={handleSubmit}>

            <label htmlFor={'name'}>Name:</label>
            <input
                id={'name'}
                value={name}
                autoFocus={true}
                required={true}
                placeholder={"Mike Wheeler"}
                onChange={(e) => setName(e.target.value)}
            />

            <label htmlFor={'age'}>Age: </label>
            <input
                id={'age'}
                value={age}
                required={true}
                placeholder={"15"}
                onChange={(e) => setAge(e.target.value)}
            />

            <label htmlFor={'email'}>Email: </label>
            <input
                id={'email'}
                value={email}
                type={"email"}
                required={true}
                placeholder={'mike.wh@strangerthings.com'}
                onChange={(e) => setEmail(e.target.value)}
            />

            <label htmlFor={'phone'}>Phone: </label>
            <input
                id={'phone'}
                value={phone}
                placeholder={'walkie talkie'}
                onChange={(e) => setPhone(e.target.value)}
            />

            <label htmlFor={'psw'}>Password: </label>
            <input
                id={'psw'}
                value={password}
                type={"password"}
                required={true}
                onChange={(e) => setPassword(e.target.value)}
            />

            <label htmlFor={'psw_again'}>Confirm Password: </label>
            <input
                id={'psw_again'}
                value={confirmPassword}
                type={"password"}
                required={true}
                onChange={(e) => setConfirmPassword(e.target.value)}
            />

            <label htmlFor={'city'}>City: </label>
            <input
                id={'city'}
                value={city}
                placeholder={"Hawkins"}
                onChange={(e) => setCity(e.target.value)}
            />

            <button type={"submit"}>Register</button>
        </form>
    );
}

export default Registration;