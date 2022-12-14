package application.service;

import application.model.CompanyModel;
import application.model.StudentModel;
import application.repository.CompanyRepository;
import application.repository.StudentRepository;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import java.util.ArrayList;
import java.util.List;
import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.when;

@SpringBootTest
@ExtendWith(MockitoExtension.class)
class StudentServiceTest {


    @Mock
    @Autowired
    private StudentRepository studentRepository;

    @Mock
    @Autowired
    private CompanyRepository companyRepository;

    @Test
    void getAllStudent() {
        List<StudentModel> list = initList();
        studentRepository = mock(StudentRepository.class);
        when(studentRepository.findAll()).thenReturn(list);
        StudentService studentService = new StudentService(studentRepository, companyRepository);

        assertEquals(list, studentService.getAllStudent());
    }


    @Test
    void registerStudent() {
        StudentModel testStudent = StudentModel.builder().name("Andro").city("Budapest").phone("+36307870036").build();
        when(studentRepository.save(any(StudentModel.class))).thenReturn(StudentModel.builder().build());
        new StudentService(studentRepository, companyRepository).registerStudent(testStudent);
        assertTrue(testStudent.getId() > 0);
        //assertTrue(studentRepository.exists());
    }

    @Test
    void getStudentById() {
        StudentModel testStudent = StudentModel.builder().name("Andro").city("Budapest").phone("+36307870036").build();
        when(studentRepository.getById(1)).thenReturn(testStudent);
        StudentModel studentById = new StudentService(studentRepository, companyRepository).getStudentById(1);
        assertEquals(testStudent, studentById);


    }

    @Test
    void addFavoriteCompany() {

    }

    @Test
    void getFavoriteCompanies() {
        StudentModel andro = StudentModel.builder().name("Andro").build();
        List<CompanyModel> favoriteCompanies = andro.getFavoriteCompanies();
        favoriteCompanies.add(CompanyModel.builder().name("Test").build());
        andro.setFavoriteCompanies(favoriteCompanies);
        when(studentRepository.getById(1)).thenReturn(andro);
        assertEquals(favoriteCompanies, studentRepository.getById(1).getFavoriteCompanies());
    }

    private List<StudentModel> initList() {
        List<StudentModel> list = new ArrayList<>();
        list.add(StudentModel.builder().name("Andro").build());
        list.add(StudentModel.builder().name("St??f").build());
        list.add(StudentModel.builder().name("Petra").build());
        return list;
    }
}