import React from 'react';
import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {getData} from "../../../util/Fetch";
import StudentProfileItem from "./StudentProfileItem";

function StudentProfile() {
    const [studentData, setStudentData] = useState();
    const [favCompanies, setFavCompanies] = useState();
    const { id } = useParams();

    const getStudentById = async () => {
        return await getData(`/student/profile/${id}`)
    }

    useEffect( () => {
        getStudentById().then((result) => {
            if(!result) {
                console.log("No Company");
            } else {
                setStudentData(result);
                console.table(result);
            }
        })
    }, [])



    return (
        <div>
            <StudentProfileItem
                {...studentData}
            />
        </div>
    );
}

export default StudentProfile;