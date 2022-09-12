package application.controller;

import application.model.MessageModel;
import application.service.MessageService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/inbox")
public class MessageController {

    MessageService messageService;

    public MessageController(MessageService messageService) {
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
