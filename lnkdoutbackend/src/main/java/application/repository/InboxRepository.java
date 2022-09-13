package application.repository;

import application.model.MessageModel;
import org.springframework.data.jpa.repository.JpaRepository;

public interface InboxRepository extends JpaRepository<MessageModel, Integer> {

    MessageModel findByPublicKey(int id);
}
