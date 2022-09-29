package application.controller.student;

import application.model.CompanyModel;
import application.model.StudentModel;
import application.service.StudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.stereotype.Controller;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
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
    public List<StudentModel> getAllStudent(){
        return studentService.getAllStudent();
    }

    @PostMapping
    public ResponseEntity<String> registerStudent(@RequestBody StudentModel student) {
        if (studentService.getUserExistByEmail(student.getEmail())) {
            return ResponseEntity
                    .status(HttpStatus.ALREADY_REPORTED)
                    .body("Email already exist!.");
        }
        if (studentService.getUserExistByUsername(student.getName())) {
            return ResponseEntity
                    .status(HttpStatus.NOT_ACCEPTABLE)
                    .body("Username already exists!");
        }
        studentService.registerStudent(student);
        return ResponseEntity
                .status(HttpStatus.CREATED)
                .body("Successful registration");

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
