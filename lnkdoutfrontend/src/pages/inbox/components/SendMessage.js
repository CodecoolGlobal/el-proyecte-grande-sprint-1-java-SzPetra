import React, {useState} from "react";
import SendMessageForm from "./SendMessageForm";
import {postData} from "../../../util/Fetch";
import {useParams} from "react-router-dom";

function SendMessage() {
    const [subject, setSubject] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const { id } = useParams();

    const sendMessage = (e) => {
        e.preventDefault();
        postData(`/inbox/send-message/${id}`, {subject, email, message});
        setSubject('');
        setEmail('');
        setMessage('');
    }

    return (
        <div>
            <SendMessageForm
                subject={subject}
                setSubject={setSubject}
                email={email}
                setEmail={setEmail}
                message={message}
                setMessage={setMessage}
                id={id}
                sendMessage={sendMessage}
            />
        </div>
    );
}

export default SendMessage;