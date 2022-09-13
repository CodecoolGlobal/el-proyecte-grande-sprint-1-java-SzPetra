import React, {useEffect, useState, useRef} from 'react';
import {getData} from "../../../../util/Fetch";
import "../../assets/studentList.css";
import SearchItem from "./components/SearchItem";
import Content from "./components/Content";

function ListAllStudents() {

    const [students, setStudents] = useState([]);
    const [search, setSearch] = useState('');
    const [newState, setNewState] = useState('');


    const effectRan = useRef(false);

    useEffect(() => {
        if (effectRan.current === false) {
            const fetchStudents = async () => {
                let data = await getData('api/get-all');
                console.log(data);
                setStudents(data);
            }
            fetchStudents().then(() => console.log(''));
            return () => {
                effectRan.current = true;
            }
        }
    }, []);


    return (
        <div className={"AllStudentContainer"}>
            <h2 className={"AllStudentHeader"}>List of all available CoodCooler</h2>
            <SearchItem
            search={search}
            setSearch={setSearch}
            />
            <Content
            students={students.filter(student => ((student.name).toLowerCase()).includes(search.toLowerCase()))}
            setStudents={setStudents}
            />
        </div>
    );
}

export default ListAllStudents;