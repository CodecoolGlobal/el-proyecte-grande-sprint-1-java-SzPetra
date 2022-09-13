package application.service.dao;

import application.model.MessageModel;

import java.util.List;

public interface InboxDao {

    List<MessageModel> getAllMessages();

    void sendMessage(MessageModel message);

    MessageModel getMessageById(int id);
}
