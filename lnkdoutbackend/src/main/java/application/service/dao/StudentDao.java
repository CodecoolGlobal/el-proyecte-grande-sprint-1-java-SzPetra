package application.service.dao;

import application.model.StudentModel;
import org.springframework.stereotype.Component;

import java.util.List;


public interface StudentDao {


    List<StudentModel> getAllStudent();
}
