import React from 'react';
import StudentCard from "./StudentCard";

function StudentList({students ,setStudents, addFavoriteStudent}) {
    console.log(students, 'list')
    return (
        <div className={"student-list-con"}>
            {students.map((student) => (
                <StudentCard
                student={student}
                setStudent={setStudents}
                key={student.id}
                addFavoriteStudent={addFavoriteStudent}
                />
                )
            )}
        </div>
    );
}

export default StudentList;