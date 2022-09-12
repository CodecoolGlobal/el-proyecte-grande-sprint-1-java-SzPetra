import React, {useState} from "react";
import SendMessage from "./SendMessage";

function SendMessageToStudent() {
    const [subject, setSubject] = useState('');
    const [fromPerson, setFromPerson] = useState('');
    const [message, setMessage] = useState('');

    const sendMessage = (e) => {
        e.preventDefault();
    }

    return (
        <div>
            <SendMessage
                subject={subject}
                setSubject={setSubject}
                fromPerson={fromPerson}
                setFromPerson={setFromPerson}
                message={message}
                setMessage={setMessage}
                sendMessage={sendMessage}
            />
        </div>
    );
}

export default SendMessageToStudent;

