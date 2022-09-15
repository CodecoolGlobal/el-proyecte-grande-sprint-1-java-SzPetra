import React from 'react';
import StudentList from "./StudentList";

function Content({students, setStudents, addFavoriteCompany}) {
    console.log(students, 'content')
    return (
        <div>
            {students.length ? (
                <StudentList
                students={students}
                setStudents={setStudents}
                addFavoriteCompnay={addFavoriteCompany}
                />
            ): (
                <p>There are no available CodeCoolers right now :(</p>
            )}
        </div>
    );
}

export default Content;