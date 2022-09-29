package application.controller.inbox;

import application.model.CompanyMessageModel;
import application.model.CompanyModel;
import application.model.StudentMessageModel;
import application.model.StudentModel;
import application.service.CompanyService;
import application.service.InboxService;
import application.service.StudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/inbox")
public class InboxController {

    InboxService inboxService;
    StudentService studentService;
    CompanyService companyService;

    @Autowired
    public InboxController(InboxService inboxService, StudentService studentService, CompanyService companyService) {
        this.inboxService = inboxService;
        this.studentService = studentService;
        this.companyService = companyService;
    }

    @GetMapping("/student/{id}")
    public List<StudentMessageModel> getMessagesByStudent (@PathVariable("id") int id) {

        StudentModel student = studentService.getStudentById(id);
        return inboxService.getMessagesByStudent(student);
    }

    @GetMapping("/company/{id}")
    public List<CompanyMessageModel> getMessagesByCompany (@PathVariable("id") int id) {
        CompanyModel company = companyService.getCompanyById(id);
        return inboxService.getMessagesByCompany(company);
    }

}
