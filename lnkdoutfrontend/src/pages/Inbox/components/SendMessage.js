import React, {useState} from "react";
import SendMessageForm from "./SendMessageForm";
import {postData} from "../../../util/Fetch";

function SendMessage() {
    const [subject, setSubject] = useState('');
    const [fromPerson, setFromPerson] = useState('');
    const [message, setMessage] = useState('');

    const sendMessage = (e) => {
        e.preventDefault();
        postData('/inbox', {subject, fromPerson, message});
        setSubject('');
        setFromPerson('');
        setMessage('');
    }

    return (
        <div>
            <SendMessageForm
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

export default SendMessage;

