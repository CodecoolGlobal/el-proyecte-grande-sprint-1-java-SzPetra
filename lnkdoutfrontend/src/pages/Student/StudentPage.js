import React from "react";
import Registration from "./components/Registration";
import './assets/student.css';

function StudentPage() {

    const [name, setName] = React.useState('');
    const [age, setAge] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [phone, setPhone] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [confirmPassword, setConfirmPassword] = React.useState('');
    const [city, setCity] = React.useState('');

    const validatePasswords = () => {
        if (password === confirmPassword) {
            return true;
        }
        return false;
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validatePasswords()) {
            setName('');
            setAge('');
            setEmail('');
            setPhone('');
            setPassword('');
            setConfirmPassword('');
            setCity('');
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

export default StudentPage;