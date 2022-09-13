package application.service.dao.implementation;

import application.model.MessageModel;
import application.service.dao.InboxDao;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.List;

@Repository
public class InboxDaoMem implements InboxDao {

    private final List<MessageModel> messages = new ArrayList<>();

    @Override
    public List<MessageModel> getAllMessages() {
        return messages;
    }

    private void fillMessages() {
        messages.add(new MessageModel("Meeting", "andrew@gmail.com", "Did you hear back from the clients?"));
        messages.add(new MessageModel("Interview", "hayley@codecool.com", "Are you ready for your interview with Innoveo? Do you want to go through it again?"));
        messages.add(new MessageModel("CV", "mads@codecool.com", "I think you should write also that job in your CV that you were talking about the other week."));
    }

    @Override
    public void sendMessage(MessageModel message) {
        messages.add(message);
    }

    @Override
    public MessageModel getMessageById(int id) {
        MessageModel searchedMessage = messages.stream()
                .filter(message ->message.getId() == id)
                .findFirst()
                .orElse(null);
        return searchedMessage;
    }

    public InboxDaoMem() {fillMessages();}
}
