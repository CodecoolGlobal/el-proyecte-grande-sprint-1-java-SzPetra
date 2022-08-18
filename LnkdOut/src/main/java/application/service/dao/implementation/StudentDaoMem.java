package application.service.dao.implementation;

import application.model.StudentModel;
import application.service.dao.StudentDao;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class StudentDaoMem implements StudentDao {
    @Override
    public List<StudentModel> getAllStudent() {
        return null;
    }
}
