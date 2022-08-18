package application.controller.student;

import application.service.StudentService;
import org.springframework.beans.factory.annotation.Autowired;

public class StudentController {

    private StudentService studentService;

    @Autowired
    public StudentController(StudentService studentService) {
        this.studentService = studentService;
    }
}
