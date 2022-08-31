import React, {useState} from 'react';
import Registration from "./Registration";
import {postData} from "../../../util/Fetch";

function CompanyPage() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [city, setCity] = useState('');
    const [isValid, setIsValid] = useState(false);

    const validate = () => {
        return password === confirmPassword;
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validate()) {
            setIsValid(false);
            postData('/company/registration', {name, email, phone, password, city}).then(r => console.log(name))
            console.log(isValid);
            setName('');
            setEmail('');
            setPhone('');
            setPassword('');
            setConfirmPassword('');
            setCity('');
        } else {
            setIsValid(true);
        }
    }

    return (
        <div>
        <Registration
            name={name}
            setName={setName}
            email={email}
            setEmail={setEmail}
            phone={phone}
            setPhone={setPhone}
            password={password}
            setPassword={setPassword}
            confirmPassword={confirmPassword}
            setConfirmPassword={setConfirmPassword}
            city={city}
            setCity={setCity}
            handleSubmit={handleSubmit}
            isValid={isValid}
        />
        </div>
    );
}

export default CompanyPage;