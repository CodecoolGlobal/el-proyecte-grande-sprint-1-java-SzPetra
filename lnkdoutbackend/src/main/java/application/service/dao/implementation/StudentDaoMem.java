package application.service.dao.implementation;

import application.model.StudentModel;
import application.service.dao.StudentDao;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.List;

@Repository
public class StudentDaoMem implements StudentDao {

    private final List<StudentModel> students = new ArrayList<>();
    @Override
    public List<StudentModel> getAllStudent() {
        fillStudents();
        return students;
    }

    private void fillStudents() {
        students.add(new StudentModel("Petrus", "q", "123", "123", "123"));
    }

    public void registerStudent(StudentModel student) {
        students.add(student);
    }
}
