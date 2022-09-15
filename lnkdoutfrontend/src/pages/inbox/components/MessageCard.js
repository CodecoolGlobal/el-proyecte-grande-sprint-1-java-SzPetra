import React from 'react';
import '../assets/messageCard.css';
import {FaStar} from "react-icons/fa";

function MessageCard ({message}) {
    return (
        <div className={'message-card'}>
            <div className={'message-info'}>
                <FaStar className={'fav'} />
                <p className={'message-from'}>
                    {message.email}
                </p>
                <p className={'message-subject'}>
                    {message.subject}
                </p>
                <p className={'message-m'}>
                    {message.message}
                </p>
            </div>
        </div>
    )
}

export default MessageCard;
