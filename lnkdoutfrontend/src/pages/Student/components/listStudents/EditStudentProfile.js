import React from "react";
import {Link} from "react-router-dom";
import {FaAt, FaBirthdayCake, FaEnvelopeOpen, FaGithub, FaHouseUser, FaPhone, FaRegEnvelope} from "react-icons/fa";

function EditStudentProfile ({name, email, phone, city, id}) {
    return (
        <div>
            <h1 className={'my-prof'}>My profile:</h1>
            <div className={'prof-container'}>
                <div className={'prof-pic-div'}>
                    <img className="prof-pic" src="/prof_pic.jpg" />
                    <Link to="/student/profile/edit">
                        <button className={'prof-btn'} onClick={() => setEdited(true)}>Edit profile</button>
                    </Link>
                </div>
                <div className={'prof-card'}>
                    <h2 className={'prof-name'}> {name}
                        <p className={'prof-birth'}><FaBirthdayCake/> No birthday added</p>
                        <p className={'prof-city'}><FaHouseUser/> {city}</p>
                    </h2>

                    <h3 className={'info-heading'}>Contact info: </h3>
                    <div>
                        <p className={'prof-email'}><FaAt/> {email}</p>
                        <p className={'prof-phone'}><FaPhone/> {phone}</p>
                    </div>

                    <h3 className={'info-heading'}>Other: </h3>
                    <p className={'prof-github'}><FaGithub/> No github repository added</p>
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
    );
}

export default EditStudentProfile;