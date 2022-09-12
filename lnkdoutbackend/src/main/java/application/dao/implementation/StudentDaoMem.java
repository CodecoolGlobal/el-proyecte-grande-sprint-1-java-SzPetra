package application.dao.implementation;

import application.model.StudentModel;
import application.dao.StudentDao;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.List;

@Repository
public class StudentDaoMem implements StudentDao {

    private final List<StudentModel> students = new ArrayList<>();
    @Override
    public List<StudentModel> getAllStudent() {
        return students;
    }

    private void fillStudents() {
        students.add(StudentModel.builder().build());

    }

    public void registerStudent(StudentModel student) {
        students.add(student);
    }

    @Override
    public StudentModel getStudentById(int id) {
        return students.stream().filter(studentModel -> studentModel.getId()==id).findFirst().orElse(null);
    }

    public StudentDaoMem() {
        fillStudents();
    }
}
