package application.service;

import application.model.MessageModel;
import application.dao.InboxDao;
import application.repository.InboxRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class InboxService {

   private InboxRepository inboxRepository;

   @Autowired
    public InboxService(InboxRepository inboxRepository) {
        this.inboxRepository = inboxRepository;
    }

    public List<MessageModel> getAllMessages() {
        return inboxRepository.findAll();
    }

    public void sendMessage(MessageModel message) {
        inboxRepository.save(message);
    }

    public MessageModel getMessageByPublicKey(int id) {
        return inboxRepository.findByPublicKey(id);
    }
}
