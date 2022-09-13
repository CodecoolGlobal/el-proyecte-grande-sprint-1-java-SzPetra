package application.service;

import application.model.MessageModel;
import application.service.dao.InboxDao;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class InboxService {

    private InboxDao inboxDao;

    @Autowired
    public InboxService(InboxDao messageDao) {
        this.inboxDao = messageDao;
    }

    public List<MessageModel> getAllMessages() {
        return inboxDao.getAllMessages();
    }

    public void sendMessage(MessageModel message) {
        inboxDao.sendMessage(message);
    }

    public MessageModel getMessageById(int id) {
        return inboxDao.getMessageById(id);
    }
}
