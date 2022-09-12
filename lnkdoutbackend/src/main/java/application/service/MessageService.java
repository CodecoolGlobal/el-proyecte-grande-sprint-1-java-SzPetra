package application.service;

import application.model.MessageModel;
import application.service.dao.MessageDao;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class MessageService {

    private MessageDao messageDao;

    @Autowired
    public MessageService(MessageDao messageDao) {
        this.messageDao = messageDao;
    }

    public List<MessageModel> getAllMessages() {
        return messageDao.getAllMessages();
    }

    public void sendMessage(MessageModel message) {
        messageDao.sendMessage(message);
    }

    public MessageModel getMessageById(int id) {
        return messageDao.getMessageById(id);
    }
}
