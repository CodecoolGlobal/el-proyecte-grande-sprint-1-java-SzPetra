package application.service;

import application.controller.company.CompanyController;
import application.model.CompanyModel;
import application.dao.CompanyDao;
import application.dao.StudentDao;
import application.model.StudentModel;
import application.repository.CompanyRepository;
import application.repository.StudentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CompanyService {

   private final CompanyRepository companyRepository;

   private StudentRepository studentRepository;

   @Autowired
    public CompanyService(CompanyRepository companyRepository) {
        this.companyRepository = companyRepository;
        initCompanies();
    }

    public void registerCompany(CompanyModel company) {
       companyRepository.save(company);
    }

    public List<CompanyModel> getAllCompany() {
        return companyRepository.findAll();
    }

    public CompanyModel getCompanyById(int id) {
        return companyRepository.getById(id);
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
       companyRepository.save(CompanyModel.builder().name("CodeCool").phone("+362151215").city("Budapest").email("code@cool.com").build());
       companyRepository.save(CompanyModel.builder().name("Tigra").phone("+34557843").city("Budapest").email("tigra@cool.com").build());
       companyRepository.save(CompanyModel.builder().name("MorganStanly").phone("+362151215").city("Budapest").email("morgan@cool.com").build());
       companyRepository.save(CompanyModel.builder().name("Ericsen").phone("+362151215").city("Budapest").email("ericsen@cool.com").build());
       companyRepository.save(CompanyModel.builder().name("CenrtalUI").phone("+362151215").city("Budapest").email("central@cool.com").build());
    }
}
