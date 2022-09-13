import React, {useState} from "react";
import SendMessageForm from "./SendMessageForm";
import {postData} from "../../../util/Fetch";
import {useParams} from "react-router-dom";

function SendMessage() {
    const [subject, setSubject] = useState('');
    const [fromPerson, setFromPerson] = useState('');
    const [message, setMessage] = useState('');
    const { id } = useParams();

    const sendMessage = (e) => {
        e.preventDefault();
        postData(`/inbox/send-message/${id}`, {subject, fromPerson, message});
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

