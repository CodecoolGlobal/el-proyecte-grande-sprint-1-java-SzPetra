package application.service;

import application.model.CompanyModel;
import application.model.StudentModel;
import application.repository.CompanyRepository;
import application.repository.StudentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class StudentService {

    private final StudentRepository studentRepository;

    private final CompanyRepository companyRepository;

    @Autowired
    public StudentService(StudentRepository studentRepository, CompanyRepository companyRepository) {
        this.studentRepository = studentRepository;
        this.companyRepository = companyRepository;
        initDatas();
    }

    public List<StudentModel> getAllStudent(){
        return studentRepository.findAll();
    }


    //TODO
    public void registerStudent(StudentModel student) {
        studentRepository.save(student);
    }

    public StudentModel getStudentById(int id) {
        return studentRepository.findById(id).orElse(null);

    }

    public void addFavoriteCompany(int studentId, int companyId){
           StudentModel studentModel = getStudentById(studentId);
           CompanyModel companyModel = companyRepository.getById(companyId);
           List<CompanyModel> favCompanies = studentModel.getFavoriteCompanies();
           favCompanies.add(companyModel);
           studentModel.setFavoriteCompanies(favCompanies);
           studentRepository.save(studentModel);
    }

    public List<CompanyModel> getFavoriteCompanies(int studentId) {
        StudentModel studentModel = studentRepository.getById(studentId);
        return studentModel.getFavoriteCompanies();
    }

    private void initDatas() {
        studentRepository.save(StudentModel.builder().name("Andro").phone("+362320015").city("Budapest").email("dro@gmail.com").password("111").build());
        studentRepository.save(StudentModel.builder().name("Petra").phone("+362321515").city("Budapest").email("petra@gmail.com").password("34342").build());
        studentRepository.save(StudentModel.builder().name("Kristóf").phone("+367343433").city("Budapest").email("stóf@gmail.com").password("667").build());
        studentRepository.save(StudentModel.builder().name("Gyuszi").phone("+364466454").city("Budapest").email("gyusz@gmail.com").password("93834").build());
        studentRepository.save(StudentModel.builder().name("Dani").phone("+364343747").city("Budapest").email("dani@gmail.com").password("75459475").build());
        studentRepository.save(StudentModel.builder().name("Juan").phone("+365645454").city("Budapest").email("juan@gmail.com").password("erhhefe9f4").build());
    }

    public boolean getUserExistByEmail(String email) {
        return studentRepository.existsByEmail(email);
    }

    public boolean getUserExistByUsername(String username) {
        return studentRepository.existsByName(username);
    }
}

