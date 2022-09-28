package application.controller.student;

import application.model.CompanyModel;
import application.model.StudentModel;
import application.service.StudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
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


    @GetMapping
    @PreAuthorize("hasAnyRole('ROLE_ADMIN', 'ROLE_COMPANY')")
    public List<StudentModel> getAllStudent(){
        return studentService.getAllStudent();
    }

    @PostMapping
    public void registerStudent(@RequestBody StudentModel student) {
        studentService.registerStudent(student);
    }

    @GetMapping(value = "{id}")
    public StudentModel getStudentById(@PathVariable int id) {
        return studentService.getStudentById(id);
    }

    @PostMapping(value = "add-favorite-company/{studentId}")
    public void addFavoriteCompany(@PathVariable int studentId, @RequestBody int companyId) {
        studentService.addFavoriteCompany(studentId, companyId);
    }

    @GetMapping(value = "get-favorite-companies/{studentId}")
    public List<CompanyModel> getFavoriteCompanies(@PathVariable int studentId){
        return studentService.getFavoriteCompanies(studentId);
    }

}
