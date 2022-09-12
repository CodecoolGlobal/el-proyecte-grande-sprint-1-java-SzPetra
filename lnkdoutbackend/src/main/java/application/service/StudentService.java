package application.service;

import application.model.StudentModel;
import application.dao.StudentDao;

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

    public StudentModel getStudentById(int id) {
        return studentDao.getStudentById(id);

    }
}

