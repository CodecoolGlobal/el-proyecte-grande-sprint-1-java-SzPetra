import React, {useState} from 'react';
import '../assets/studentProfile.css';
import {Link} from "react-router-dom";
import {FaAt, FaBirthdayCake, FaEnvelopeOpen, FaGithub, FaHouseUser, FaPhone, FaRegEnvelope} from "react-icons/fa";
import {postData} from "../../../util/Fetch";


function StudentProfileItem({name, email, phone, city, age, id}) {
    const [edit, setEdit] = useState(false);

    const [newEmail, setNewEmail] = useState(email);
    const [newPhone, setNewPhone] = useState(phone);
    const [newCity, setNewCity] = useState(city);
    const [newGitRepo, setNewGitRepo] = useState('');

    const saveChanges = (e) => {
        e.preventDefault();
        postData(`/student/${id}`, {newEmail, newPhone, newCity, newGitRepo});
    }

    return (
        <div>
            <h1 className={'my-prof'}>My profile:</h1>
            <div className={'prof-container'}>
                <div className={'prof-pic-div'}>
                    <img className="prof-pic" src="/prof_pic.jpg" />
                    {edit ?
                    <button id={'save-btn'} type={'submit'} className={'prof-btn'} onClick={(e) => {setEdit(false); saveChanges(e)}}>
                        Save changes
                    </button>
                        :
                    <button id={'edit-btn'} className={'prof-btn'} onClick={() => setEdit(true)}>
                        Edit profile
                    </button>
                    }
                </div>
                <div className={'prof-card'}>
                    <h2 className={'prof-name'}> {name}
                        <div className={'info-container'}>
                            <p className={'prof-birth'}><FaBirthdayCake/> {age}</p>
                            {edit?
                                <label htmlFor={'city'}>
                                    <FaHouseUser/>
                                    <input id={'city'} value={newCity} onChange={(e) => setNewCity(e.target.value)} />
                                </label>
                                :
                                <p className={'prof-city'}><FaHouseUser/> {city}</p>
                            }
                        </div>
                    </h2>

                    <h3 className={'info-heading'}>Contact info: </h3>
                    <div className={'info-container'}>
                        {edit?
                        <label htmlFor={'email'}>
                            <FaAt/>
                        <input id={'email'} value={newEmail} onChange={(e) => setNewEmail(e.target.value)}/>
                        </label>
                            :
                        <p className={'prof-email'}><FaAt/> {email}</p>
                        }
                        {edit?
                        <label htmlFor={'phone'}>
                            <FaPhone/>
                        <input id={'phone'} value={newPhone} onChange={(e) => setNewPhone(e.target.value)}/>
                        </label>
                            :
                        <p className={'prof-phone'}><FaPhone/> {phone}</p>
                        }
                    </div>

                    <h3 className={'info-heading'}>Other:
                        <div className={'info-container'}>
                            {edit?
                            <label htmlFor={'git'}>
                                <FaGithub/>
                            <input id={'git'} value={newGitRepo} onChange={(e) => setNewGitRepo(e.target.value)}/>
                            </label>
                                :
                            <p className={'prof-github'}><FaGithub/> No github repository added</p>
                            }
                        </div>
                    </h3>
                </div>

                <div className={'prof-links'}>
                    <Link className={'prof-link'} to={`/inbox/${id}/send-message`}>
                        <FaRegEnvelope className={'prof-envelope'}/>
                        Send message
                    </Link>
                    <Link className={'prof-link'} to={`/inbox/${id}`}>
                        <FaEnvelopeOpen className={'prof-envelope'}/>
                        My inbox
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default StudentProfileItem;