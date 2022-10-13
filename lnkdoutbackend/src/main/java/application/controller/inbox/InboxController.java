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

    @PostMapping("/student/send/{id}")
    public void sendMessageToStudent(@PathVariable("id") int id, @RequestBody StudentMessageModel message) {
        StudentModel student = studentService.getStudentById(id);
        message.setReceiver(student);
        inboxService.sendMessageToStudent(message);
    }

    @PostMapping("/company/send/{id}")
    public void sendMessageToCompany(@PathVariable("id") int id, @RequestBody CompanyMessageModel message) {
        CompanyModel company = companyService.getCompanyById(id);
        message.setReceiver(company);
        inboxService.sendMessageToCompany(message);
    }
}
