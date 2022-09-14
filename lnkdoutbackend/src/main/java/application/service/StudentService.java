package application.service;

import application.model.StudentModel;
import application.dao.StudentDao;
import application.repository.StudentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class StudentService {

    private final StudentRepository studentRepository;

    @Autowired
    public StudentService(StudentRepository studentRepository) {
        this.studentRepository = studentRepository;
    }

    public List<StudentModel> getAllStudent(){
        return studentRepository.findAll();
    }

    public void registerStudent(StudentModel student) {
        studentRepository.save(student);
    }

    public StudentModel getStudentById(int id) {
        return studentRepository.findById(id)
                .orElse(null);

    }
}

