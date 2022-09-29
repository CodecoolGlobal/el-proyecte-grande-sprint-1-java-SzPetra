package application.service;

import application.model.StudentMessageModel;
import application.model.StudentModel;
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

    public List<StudentMessageModel> getAllMessages() {
        return inboxRepository.findAll();
    }

    public void sendMessage(StudentMessageModel message) {
        inboxRepository.save(message);
    }

    public List<StudentMessageModel> getMessagesForProfile(StudentModel student) {
        return inboxRepository.findMessageModelsByStudent(student);
    }

}