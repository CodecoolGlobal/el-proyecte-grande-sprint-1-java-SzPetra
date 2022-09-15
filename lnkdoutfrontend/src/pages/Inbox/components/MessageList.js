import React from 'react';
import MessageCard from "./MessageCard";

function MessageList ({messages}) {
    console.table(messages)
    return (
        <>
            {messages.map((message) => (
                <MessageCard
                    message={message}
                    key={message.id}
                />
                )
            )}
        </>
    );
}

export default MessageList;