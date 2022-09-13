import React from 'react';
import StudentList from "./StudentList";

function Content({students, setStudents}) {
    console.log(students, 'content')
    return (
        <div>
            {students.length ? (
                <StudentList
                students={students}
                setStudents={setStudents}
                />
            ): (
                <p>There are no available CodeCoolers right now :(</p>
            )}
        </div>
    );
}

export default Content;