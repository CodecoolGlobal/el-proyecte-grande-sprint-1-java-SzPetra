package application.service;

import application.controller.student.StudentController;
import application.model.StudentModel;
import application.service.dao.StudentDao;

import java.util.List;


public class StudentService {


    private StudentDao studentDao;

    public StudentService(StudentDao studentDao) {
        this.studentDao = studentDao;
    }

    public List<StudentModel> getAllStudent(){
        return studentDao.getAllStudent();
    }

    public void registerStudent(StudentModel student) {
        studentDao.registerStudent(student);
    }
}

