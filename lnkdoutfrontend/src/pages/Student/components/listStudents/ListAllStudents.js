import React, {useEffect, useState, useRef} from 'react';
import {getData, postData} from "../../../../util/Fetch";
import "../../assets/studentList.css";
import SearchItem from "./components/SearchItem";
import Content from "./components/Content";

function ListAllStudents() {

    const [students, setStudents] = useState([]);
    const [search, setSearch] = useState('');
    const [error, setError] = useState(false);

    const effectRan = useRef(false);

    useEffect(() => {
        if (effectRan.current === false) {
            const fetchStudents = async () => {
                let data = await getData('/student');
                if(data.status){
                    setError(true)
                }
                setStudents(data);
            }
            fetchStudents().then()

            return () => {
                effectRan.current = true;
            }
        }
    }, []);

    const addFavoriteStudent = async (companyId, studentId) => {
        await postData(`student/add-favorite-student/${companyId}`, {studentId});
    }


    return (
        <>
            {error ? <p>You are not authorized to see this webpage!</p> : (
            <div className={"AllStudentContainer"}>
                <h2 className={"AllStudentHeader"}>List of all available CoodCooler</h2>
                <SearchItem
                search={search}
                setSearch={setSearch}
                />
                <Content
                students={students.filter(student => ((student.name).toLowerCase()).includes(search.toLowerCase()))}
                setStudents={setStudents}
                addFavoriteStudent={addFavoriteStudent}
                />
            </div>
            )}
        </>
    )
}

export default ListAllStudents;