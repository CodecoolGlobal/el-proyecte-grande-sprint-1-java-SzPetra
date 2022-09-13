package application.controller.inbox;

import application.model.MessageModel;
import application.service.InboxService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/inbox")
public class InboxController {

    InboxService messageService;

    public InboxController(InboxService messageService) {
        this.messageService = messageService;
    }

    @GetMapping
    public List<MessageModel> getAllMessage() {
        return messageService.getAllMessages();
    }

    @PostMapping
    @ResponseBody
    public void sendMessage(@RequestBody MessageModel message) {
        messageService.sendMessage(message);
    }

    @GetMapping("/{id}")
    public MessageModel getMessageById(@PathVariable("id") int id) {
        return messageService.getMessageById(id);
    }
}
