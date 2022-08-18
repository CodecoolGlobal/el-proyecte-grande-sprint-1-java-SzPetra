package application.service;

import application.model.StudentModel;
import application.service.dao.StudentDao;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.stereotype.Component;

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
