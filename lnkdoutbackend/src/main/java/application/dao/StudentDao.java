package application.dao;

import application.model.StudentModel;

import java.util.List;


public interface StudentDao {


    List<StudentModel> getAllStudent();

    void registerStudent(StudentModel student);

    StudentModel getStudentById(int id);
}
