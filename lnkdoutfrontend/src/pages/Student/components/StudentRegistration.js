import React from "react";
import Registration from "./Registration";
import '../assets/student.css';
import {postData} from "../../../util/Fetch";
import {useNavigate} from "react-router-dom";


function StudentRegistration() {

    const [name, setName] = React.useState('');
    const [age, setAge] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [phone, setPhone] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [confirmPassword, setConfirmPassword] = React.useState('');
    const [city, setCity] = React.useState('');
    const navigate = useNavigate();

    const validatePasswords = () => {
        if (password === confirmPassword) {
            return true;
        }
        return false;
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validatePasswords()) {
            postData('/student', {name, email, phone, password, city});
            setName('');
            setAge('');
            setEmail('');
            setPhone('');
            setPassword('');
            setConfirmPassword('');
            setCity('');
            navigate("/");
        }
    }

    return (
        <div>
            <Registration
                name={name}
                setName={setName}
                age={age}
                setAge={setAge}
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
            />
        </div>
    );
}

export default StudentRegistration;