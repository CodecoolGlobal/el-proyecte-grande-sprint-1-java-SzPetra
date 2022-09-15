import React from 'react';
import StudentCard from "./StudentCard";

function StudentList({students ,setStudents, addFavoriteCompany}) {
    console.log(students, 'list')
    return (
        <>
            {students.map((student) => (
                <StudentCard
                student={student}
                setStudent={setStudents}
                key={student.id}
                addFavoriteCompany={addFavoriteCompany}
                />
                )
            )}
        </>
    );
}

export default StudentList;