package application.repository;

import application.model.MessageModel;
import application.model.StudentModel;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface StudentRepository extends JpaRepository<StudentModel, Integer> {

}
