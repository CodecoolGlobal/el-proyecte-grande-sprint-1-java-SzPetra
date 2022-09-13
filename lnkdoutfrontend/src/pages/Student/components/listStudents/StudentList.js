import React from 'react';
import StudentCard from "./StudentCard";

function StudentList({students ,setStudents}) {
    console.log(students, 'list')
    return (
        <>
            {students.map((student) => (
                <StudentCard
                student={student}
                setStudent={setStudents}
                key={student.publicKey}
                />
                )
            )}
        </>
    );
}

export default StudentList;