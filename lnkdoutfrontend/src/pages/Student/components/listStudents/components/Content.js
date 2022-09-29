import React from 'react';
import StudentList from "./StudentList";

function Content({students, setStudents, addFavoriteStudent}) {
    console.log(students, 'content')
    return (
        <div style={{backgroundColor: "inherit"}}>
            {students.length ? (
                <StudentList
                students={students}
                setStudents={setStudents}
                addFavoriteStudent={addFavoriteStudent}
                />
            ): (
                <p>There are no available CodeCoolers right now :(</p>
            )}
        </div>
    );
}

export default Content;