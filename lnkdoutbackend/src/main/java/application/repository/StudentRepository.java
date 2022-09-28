package application.repository;

import application.model.StudentModel;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface StudentRepository extends JpaRepository<StudentModel, Integer> {
    boolean existsByName(String name);

    Optional<StudentModel> findByName(String name);

    boolean existsByEmail(String email);
}
