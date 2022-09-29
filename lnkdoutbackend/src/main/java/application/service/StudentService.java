package application.service;

import application.model.CompanyModel;
import application.model.StudentModel;
import application.model.roles.Roles;
import application.repository.CompanyRepository;
import application.repository.StudentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class StudentService {

    private final StudentRepository studentRepository;

    private final CompanyRepository companyRepository;

    private final PasswordEncoder passwordEncoder;

    @Autowired
    public StudentService(StudentRepository studentRepository, CompanyRepository companyRepository, PasswordEncoder passwordEncoder) {
        this.studentRepository = studentRepository;
        this.companyRepository = companyRepository;
        this.passwordEncoder = passwordEncoder;
    }

    public List<StudentModel> getAllStudent(){
        return studentRepository.findAll();
    }


    //TODO
    public void registerStudent(StudentModel student) {
        student.setPassword(passwordEncoder.encode(student.getPassword()));
        student.setRoles(Roles.STUDENT);
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


    public boolean getUserExistByEmail(String email) {
        return studentRepository.existsByEmail(email);
    }

    public boolean getUserExistByUsername(String username) {
        return studentRepository.existsByName(username);
    }
}

