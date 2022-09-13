package application.controller.inbox;

import application.model.MessageModel;
import application.service.InboxService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/inbox")
public class InboxController {

    InboxService inboxService;

    public InboxController(InboxService messageService) {
        this.inboxService = messageService;
    }

    @GetMapping
    public List<MessageModel> getAllMessage() {
        return inboxService.getAllMessages();
    }

    @PostMapping
    @ResponseBody
    public void sendMessage(@RequestBody MessageModel message) {
        inboxService.sendMessage(message);
    }

    @GetMapping("/{id}")
    public MessageModel getMessageByPublicKey(@PathVariable("id") int id) {
        return inboxService.getMessageByPublicKey(id);
    }
}
