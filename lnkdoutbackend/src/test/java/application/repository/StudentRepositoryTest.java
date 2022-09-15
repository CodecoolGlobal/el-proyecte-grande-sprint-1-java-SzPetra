package application.repository;

import application.model.StudentModel;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest
class StudentRepositoryTest {

    @Autowired StudentRepository studentRepository;

    @BeforeEach
    void setup() {
        StudentModel testModel = StudentModel.builder().name("Andro").city("Budapest").build();
        studentRepository.saveAndFlush(testModel);
    }

    @Test
    void isStudentExistByName() {
        assertTrue(studentRepository.existsByName("Andro"));
    }

}