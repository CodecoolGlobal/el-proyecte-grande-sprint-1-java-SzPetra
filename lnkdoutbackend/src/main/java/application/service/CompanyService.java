package application.service;

import application.controller.company.CompanyController;
import application.model.CompanyModel;
import application.dao.CompanyDao;
import application.dao.StudentDao;
import application.model.JobModel;
import application.model.StudentModel;
import application.model.roles.Roles;
import application.repository.CompanyRepository;
import application.repository.JobRepository;
import application.repository.StudentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CompanyService {

   private final CompanyRepository companyRepository;

   private final StudentRepository studentRepository;

   private final JobRepository jobRepository;

   @Autowired
    public CompanyService(CompanyRepository companyRepository, StudentRepository studentRepository, JobRepository jobRepository) {
        this.companyRepository = companyRepository;
        this.studentRepository = studentRepository;
        this.jobRepository = jobRepository;
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

    public void initCompanies() {

        CompanyModel companyModel = CompanyModel.builder().name("CodeCool").phone("+362151215").city("Budapest").email("code@cool.com").roles(Roles.COMPANY).build();
        List<JobModel> jobs = companyModel.getJobs();
        jobs.add(jobRepository.findAll().get(0));
        companyModel.setJobs(jobs);
        companyRepository.save(companyModel);
    }

    public int createJob(JobModel jobModel, int companyId) {
       try {
           CompanyModel byId = companyRepository.findById(companyId).get();
           List<JobModel> jobs = byId.getJobs();
           jobs.add(jobModel);
           byId.setJobs(jobs);
           return companyRepository.save(byId).getId();
       } catch (Exception e){
           return -1;
        }
    }
}
