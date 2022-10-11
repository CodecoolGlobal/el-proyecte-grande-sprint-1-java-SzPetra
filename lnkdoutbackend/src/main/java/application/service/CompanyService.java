package application.service;

import application.controller.company.CompanyController;
import application.model.CompanyModel;
import application.dao.CompanyDao;
import application.dao.StudentDao;
import application.model.StudentModel;
import application.model.roles.Roles;
import application.repository.CompanyRepository;
import application.repository.StudentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CompanyService {

   private final CompanyRepository companyRepository;

   private final StudentRepository studentRepository;

   @Autowired
    public CompanyService(CompanyRepository companyRepository, StudentRepository studentRepository) {
        this.companyRepository = companyRepository;
        this.studentRepository = studentRepository;
        initCompanies();
    }

    public void registerCompany(CompanyModel company) {
       companyRepository.save(company);
    }

    public List<CompanyModel> getAllCompany() {
        return companyRepository.findAll();
    }

    public CompanyModel getCompanyById(int id) {
        return companyRepository.findById(id).orElse(null);
    }

    public void addFavoriteStudent(int companyId, int studentId) {
        CompanyModel companyModel = getCompanyById(companyId);
        StudentModel studentModel = studentRepository.getById(studentId);
        List<StudentModel> favoriteStudents = companyModel.getFavoriteStudents();
        favoriteStudents.add(studentModel);
        companyModel.setFavoriteStudents(favoriteStudents);
        companyRepository.save(companyModel);
    }

    private void initCompanies() {
       companyRepository.save(CompanyModel.builder().name("CodeCool").phone("+362151215").city("Budapest").email("code@cool.com").roles(Roles.COMPANY).build());
    }
}
