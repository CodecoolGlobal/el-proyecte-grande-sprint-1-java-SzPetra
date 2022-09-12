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
        return students;
    }

    private void fillStudents() {
        students.add(new StudentModel("Petrus", "sample@email.com", "123", "+36 30 123 456", "Damascus"));
        students.add(new StudentModel("Andrus", "sample@email.com", "123", "+36 30 123 456", "Damascus"));
        students.add(new StudentModel("Gyulus", "sample@email.com", "123", "+36 30 123 456", "Damascus"));
        students.add(new StudentModel("Andrus", "sample@email.com", "123", "+36 30 123 456", "Damascus"));
        students.add(new StudentModel("Kris", "sample@email.com", "123", "+36 30 123 456", "Damascus"));
        students.add(new StudentModel("Stóf", "sample@email.com", "123", "+36 30 123 456", "Damascus"));
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
