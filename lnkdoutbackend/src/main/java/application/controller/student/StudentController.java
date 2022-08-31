package application.controller.student;

import application.model.StudentModel;
import application.service.StudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("student")
public class StudentController{

    private final StudentService studentService;

    @Autowired
    public StudentController(StudentService studentService) {
        this.studentService = studentService;
    }


    @GetMapping(value = "api/get-all")
    public List<StudentModel> getAllStudent(){
        return studentService.getAllStudent();
    }

    @PostMapping(value = "registration")
    @ResponseBody
    public void registerStudent(@RequestBody StudentModel student) {
        studentService.registerStudent(student);
    }

}
