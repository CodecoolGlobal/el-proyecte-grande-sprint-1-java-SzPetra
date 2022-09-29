package application.repository;

import application.model.StudentMessageModel;
import application.model.StudentModel;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface InboxRepository extends JpaRepository<StudentMessageModel, Integer> {

    List<StudentMessageModel> findMessageModelsByStudent(StudentModel student);
}
