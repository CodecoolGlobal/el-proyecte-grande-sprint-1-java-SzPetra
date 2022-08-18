package application.service;

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
}
