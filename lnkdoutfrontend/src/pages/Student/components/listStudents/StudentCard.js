import React from 'react';
import {Link} from "react-router-dom";
import {FaHeart, FaRegEnvelope} from "react-icons/fa";

function StudentCard({student}) {
        return (
            <Link className={"Link"} style={{textDecoration: 'none'}} to={`/student/profile/${student.id}`}>
                <div className={"studentCard"}>
                    <div className={"StudentInfo"}>
                        <p className={"studentName"}>{student.name}<span> in {student.city}</span></p>
                        <p><span>Contact info: {student.email}</span></p>
                        <p>Phone: {student.phone}</p>
                    </div>
                    <FaHeart className={"heart"}/>
                    <FaRegEnvelope className={"envelope"}/>
                </div>
            </Link>
        );
}

export default StudentCard;