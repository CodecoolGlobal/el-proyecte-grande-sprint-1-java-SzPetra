import React from 'react';
import {useEffect, useState, useContext} from "react";
import {useParams} from "react-router-dom";
import {getData} from "../../../util/Fetch";
import StudentProfileItem from "./StudentProfileItem";
import FavoriteCompaniesList from "./FavoriteCompaniesList";
import {EditValue} from "../../../App";
import EditStudentProfile from "./listStudents/EditStudentProfile";

function StudentProfile() {
    const [studentData, setStudentData] = useState({});
    const [favCompanies, setFavCompanies] = useState([]);
    const { id } = useParams();

    const {edited} = useContext(EditValue);

    const getStudentById = async () => {
        return await getData(`/student/${id}`)
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

    return (
        <>
            {edited ? <EditStudentProfile
                    {...studentData}
                    id={id}
                /> :
                (<div>
                    <StudentProfileItem
                        {...studentData}
                        id={id}
                    />
                    <FavoriteCompaniesList
                        favCompanies={favCompanies}
                    />
                </div>)
            }
        </>
    );
}

export default StudentProfile;