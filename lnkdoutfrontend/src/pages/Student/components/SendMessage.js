import React from 'react';

function SendMessage({subject, setSubject, fromPerson, setFromPerson, message, setMessage, sendMessage}) {
    return (
        <div>
            <form className={'inbox-form'} onSubmit={sendMessage}>

                <label htmlFor={'subject'}>Subject: </label>
                <input
                    id={'subject'}
                    value={subject}
                    autoFocus={true}
                    placeholder={'Next week\'s interview'}
                    onChange={(e) => setSubject(e.target.value)}
                />

                <label htmlFor={'from'}>From: </label>
                <input
                    id={'from'}
                    value={fromPerson}
                    required={true}
                    placeholder={'mike.wheeler@strthings.com'}
                    onChange={(e) => setFromPerson(e.target.value)}
                />

                <label htmlFor={'message'}>Message: </label>
                <textarea
                    id={'message'}
                    value={message}
                    required={true}
                    placeholder={'we found another hole..it leads to the upside-down'}
                    onChange={(e) => setMessage(e.target.value)}
                ></textarea>

                <button type={'submit'}>Send</button>
            </form>
        </div>
    );
}

export default SendMessage;