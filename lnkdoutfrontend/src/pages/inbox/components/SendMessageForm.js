import React from 'react';
import '../assets/messageForm.css';
import {Link} from "react-router-dom";
import {FaHandPointLeft} from "react-icons/fa";

function SendMessageForm({subject, setSubject, email, setEmail, message, setMessage, sendMessage, id}) {
    return (<div className={'inbox-container'}>

            <section className={'inbox-form-container'}>
                <form className={'inbox-form'} onSubmit={sendMessage}>

                    <label htmlFor={'subject'}>Subject: </label>
                    <input
                        id={'subject'}
                        value={subject}
                        autoFocus={true}
                        placeholder={"'Next week's interview'"}
                        onChange={(e) => setSubject(e.target.value)}
                    />

                    <label htmlFor={'from'}>From: </label>
                    <input
                        id={'from'}
                        value={email}
                        required={true}
                        placeholder={'mike.wheeler@strthings.com'}
                        onChange={(e) => setEmail(e.target.value)}
                    />

                    <label htmlFor={'message'}>Message: </label>
                    <textarea
                        id={'message'}
                        value={message}
                        required={true}
                        placeholder={'we found another hole..it leads to the upside-down'}
                        onChange={(e) => setMessage(e.target.value)}
                    ></textarea>

                    <button id={'send-message-btn'} type={'submit'}>Send</button>
                </form>
            </section>
            <Link id={`student-profile-${id}`} className={'back-link'} to={`/student/profile/${id}`}>
                <FaHandPointLeft className={'hand-icon'}/>
                Back
            </Link>
        </div>);
}

export default SendMessageForm;