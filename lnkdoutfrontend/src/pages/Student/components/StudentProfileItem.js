import React, {useState} from 'react';
import '../assets/studentProfile.css';
import {Link} from "react-router-dom";
import {FaAt, FaBirthdayCake, FaEnvelopeOpen, FaGithub, FaHouseUser, FaPhone, FaRegEnvelope} from "react-icons/fa";



function StudentProfileItem({studentData, handleUpdate, id, saveChanges}) {
    const [edit, setEdit] = useState(false);

    return (
        <div>
            <h1 className={'my-prof'}>My profile:</h1>
            <div className={'prof-container'}>
                <div className={'prof-pic-div'}>

                    <img className="prof-pic" src="/prof_pic.jpg" />
                    {edit ?
                    <button id={'save-btn'} type={'submit'} className={'prof-btn'} onClick={(e) => {
                        setEdit(false);
                        console.log(e)
                        saveChanges(e)}
                    }>
                        Save changes
                    </button>
                        :
                    <button id={'edit-btn'} className={'prof-btn'} onClick={() => setEdit(true)}>
                        Edit profile
                    </button>
                    }

                </div>
                <div className={'prof-card'}>
                    <h2 className={'prof-name'}> {studentData.name}
                        <div className={'info-container'}>
                            <p className={'prof-birth'}><FaBirthdayCake/> {studentData.age}</p>
                            {edit?
                                <label htmlFor={'city'}>
                                    <FaHouseUser/>
                                    <input id={'city'} value={studentData.city} onChange={(e) =>
                                        handleUpdate(e)
                                    }/>
                                </label>
                                :
                                <p className={'prof-city'}><FaHouseUser/> {studentData.city}</p>
                            }
                        </div>
                    </h2>

                    <h3 className={'info-heading'}>Contact info: </h3>
                    <div className={'info-container'}>
                        {edit?
                        <label htmlFor={'email'}>
                            <FaAt/>
                        <input id={'email'} value={studentData.email} onChange={(e) => handleUpdate(e)}/>
                        </label>
                            :
                        <p className={'prof-email'}><FaAt/> {studentData.email}</p>
                        }
                        {edit?
                        <label htmlFor={'phone'}>
                            <FaPhone/>
                        <input id={'phone'} value={studentData.phone} onChange={(e) => handleUpdate(e)}/>
                        </label>
                            :
                        <p className={'prof-phone'}><FaPhone/> {studentData.phone}</p>
                        }
                    </div>

                    {/*<h3 className={'info-heading'}>Other:
                        <div className={'info-container'}>
                            {edit?
                            <label htmlFor={'git'}>
                                <FaGithub/>
                            <input id={'git'} value={studentData} onChange={(e) => setNewGitRepo(e.target.value)}/>
                            </label>
                                :
                            <p className={'prof-github'}><FaGithub/> No github repository added</p>
                            }
                        </div>
                    </h3>*/}
                </div>

                <div className={'prof-links'}>
                    <Link id={`profile-inbox-send-${id}`} className={'prof-link'} to={`/inbox/${id}/send-message`}>
                        <FaRegEnvelope className={'prof-envelope'}/>
                        Send message
                    </Link>
                    <Link id={`profile-inbox-receive-${id}`} className={'prof-link'} to={`/inbox/${id}`}>
                        <FaEnvelopeOpen className={'prof-envelope'}/>
                        My inbox
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default StudentProfileItem;