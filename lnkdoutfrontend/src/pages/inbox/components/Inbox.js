import React, {useEffect, useRef, useState} from 'react';
import {useParams} from "react-router-dom";
import {getData} from "../../../util/Fetch";
import Content from "./Content";

function Inbox() {
    const [messages, setMessage] = useState([]);
    const {id} = useParams();

    const effectRan = useRef(false);

    useEffect(() => {
        if (effectRan.current === false) {
            const fetchMessages = async () => {
                let data = await getData(`/inbox/get-messages/${id}`);
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
            <Content
                messages={messages}
                id={id}
            />
        </div>
    )

}

export default Inbox;