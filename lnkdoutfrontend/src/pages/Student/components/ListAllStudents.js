import React, {useEffect, useState, useRef} from 'react';
import {getData} from "../../../util/Fetch";
import "../assets/studentList.css";
import {Link} from "react-router-dom";

function ListAllStudents() {

    const [students, setStudents] = useState([]);

    const effectRan = useRef(false);

    useEffect(() => {
        if (effectRan.current === false) {
            const fetchStudents = async () => {
                let data = await getData('api/get-all');
                console.log(data);
                setStudents(data);
            }
            fetchStudents().then(() => console.log('hello'));
            return () => {
                effectRan.current = true;
            }
        }
    }, []);

    const StudentCard = ({id, name, email, city, phone}) => {
        return (
            <Link to={`student/profile/${id}`}>
                <div className={"studentCard"}>
                    <p className={"studentName"}>{name}<span> in {city}</span></p>
                    <p><span>Contact info: {email}</span></p>
                    <p>Phone: {phone}</p>
                </div>
            </Link>
        );
    }

    const createCard = (student, key) => <StudentCard key={key} id={student.id} name={student.name} city={student.city}
                                                      phone={student.phone}
                                                      email={student.email}/>

    const cardList = students === undefined ? "Loading..." : students.map(company => createCard(company, company.id));

    return (
        <div>
            {cardList}
        </div>
    );
}

export default ListAllStudents;