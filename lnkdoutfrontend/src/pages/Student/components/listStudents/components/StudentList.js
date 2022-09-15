import React from 'react';
import StudentCard from "./StudentCard";

function StudentList({students ,setStudents, addFavoriteStudent}) {
    console.log(students, 'list')
    return (
        <>
            {students.map((student) => (
                <StudentCard
                student={student}
                setStudent={setStudents}
                key={student.id}
                addFavoriteStudent={addFavoriteStudent}
                />
                )
            )}
        </>
    );
}

export default StudentList;