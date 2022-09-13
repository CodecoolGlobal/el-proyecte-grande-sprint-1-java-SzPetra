package application.controller.inbox;

import application.model.MessageModel;
import application.model.StudentModel;
import application.service.InboxService;
import application.service.StudentService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/inbox")
public class InboxController {

    InboxService inboxService;
    StudentService studentService;

    public InboxController(InboxService messageService, StudentService studentService) {
        this.inboxService = messageService;
        this.studentService = studentService;
    }

    @GetMapping
    public List<MessageModel> getAllMessage() {
        return inboxService.getAllMessages();
    }

    @PostMapping("send-message/{id}")
    @ResponseBody
    public void sendMessage(@RequestBody MessageModel message, @PathVariable("id") int id) {
        StudentModel studentById = studentService.getStudentById(id);
        message.setStudent(studentById);
        inboxService.sendMessage(message);
    }

    @GetMapping("/profile/{id}")
    public List<MessageModel> getMessagesForProfile(@PathVariable("id") int id) {
        StudentModel studentById = studentService.getStudentById(id);
        return inboxService.getMessagesForProfile(studentById);
    }

}
