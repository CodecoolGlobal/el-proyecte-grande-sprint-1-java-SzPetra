import React from "react";
import MessageList from "./MessageList";
import {Link} from "react-router-dom";
import '../assets/inbox.css';

function Content({messages, id}) {
    return (
        <div>
            {messages.length ? (
                <MessageList
                    messages={messages}
                    />
            ): (
                <div style={{display:"flex", flexDirection:"column", alignItems:"center"}}>
                    <p style={{color:"plum", fontSize:"2rem", marginTop:"1em"}}>
                        No new messages...
                    </p>
                        <Link className={'back-from-inbox'} to={`/student/profile/${id}`}>
                            Back
                        </Link>
                </div>
            )}
        </div>
    );
}

export default Content;