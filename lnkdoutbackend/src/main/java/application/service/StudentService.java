package application.service;

import application.model.CompanyModel;
import application.model.StudentModel;
import application.dao.StudentDao;
import application.repository.CompanyRepository;
import application.repository.StudentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class StudentService {

    private final StudentRepository studentRepository;

    private CompanyRepository companyRepository;

    @Autowired
    public StudentService(StudentRepository studentRepository) {
        this.studentRepository = studentRepository;
    }

    public List<StudentModel> getAllStudent(){
        return studentRepository.findAll();
    }

    public void registerStudent(StudentModel student) {
        studentRepository.save(student);
    }

    public StudentModel getStudentById(int id) {
        return studentRepository.getById(id);

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
        StudentModel studentModel = getStudentById(studentId);
        return studentModel.getFavoriteCompanies();
    }
}

