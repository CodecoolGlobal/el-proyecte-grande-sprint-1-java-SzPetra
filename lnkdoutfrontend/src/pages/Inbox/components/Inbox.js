import React, {useEffect, useRef, useState} from 'react';
import {useParams} from "react-router-dom";
import {getData} from "../../../util/Fetch";

function Inbox() {
    const [messages, setMessage] = useState([]);
    const {id} = useParams();

    const effectRan = useRef(false);

    useEffect(() => {
        if (effectRan.current === false) {
            const fetchMessages = async () => {
                let data = await getData(`/inbox/profile/${id}`);
                setMessage(data);
            }
            fetchMessages().then(() => console.log(''));
            return () => {
                effectRan.current = true;
            }
        }
    }, []);

    return (
        <div>
            {messages.map(message => <div>{message.subject}</div>)}
        </div>
    )

}

export default Inbox;