package application.controller.student;

import application.model.CompanyModel;
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

    @GetMapping(value = "profile/{id}")
    @ResponseBody
    public StudentModel getStudentById(@PathVariable int id) {
        return studentService.getStudentById(id);
    }

    @PostMapping(value = "add-favorite-company/{studentId}")
    @ResponseBody
    public void addFavoriteCompany(@PathVariable int studentId, @RequestBody int companyId) {
        studentService.addFavoriteCompany(studentId, companyId);
    }

}
