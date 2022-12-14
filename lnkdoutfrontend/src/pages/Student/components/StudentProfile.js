import React from 'react';
import {useEffect, useState, useContext} from "react";
import {useParams} from "react-router-dom";
import {getData, putData} from "../../../util/Fetch";
import StudentProfileItem from "./StudentProfileItem";
import FavoriteCompaniesList from "./FavoriteCompaniesList";

function StudentProfile() {
    const [studentData, setStudentData] = useState({});
    const [favCompanies, setFavCompanies] = useState([]);
    const { id } = useParams();

    const getStudentById = async () => {
        return await getData(`/student/${id}`)
    }

    const saveChanges = (e) => {
        e.preventDefault();
        putData(`/student/${id}`, {studentData});
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

    useEffect(() => {
        getFavoriteCompanies(id).then(result => {
            if (!result) {
                console.log("No favorite company")
            } else {
                setFavCompanies(result);
            }
        })
    }, [])

    const getFavoriteCompanies = async (studentId) => {
        return await getData(`/student/get-favorite-companies/${studentId}`);
    }

    const handleUpdate = (e) => {
        const inputId = e.target.id;
        const value = e.target.value;
        setStudentData({...studentData, [inputId]: value})
    }

    return (
        <div>
            <StudentProfileItem
                setStudentData={setStudentData}
                handleUpdate={handleUpdate}
                studentData={studentData}
                id={id}
                saveChanges={saveChanges}
            />
            <FavoriteCompaniesList
                favCompanies={favCompanies}
            />
        </div>
    );
}

export default StudentProfile;