package application.service;

import application.model.CompanyModel;
import application.model.JobModel;
import application.model.roles.Roles;
import application.repository.CompanyRepository;
import application.repository.JobRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

@Service
public class JobService {

    private final JobRepository jobRepository;
    private final CompanyRepository companyRepository;

    @Autowired
    public JobService(JobRepository jobRepository, CompanyRepository companyRepository) {
        this.jobRepository = jobRepository;
        this.companyRepository = companyRepository;
        initJObs();
    }

    public List<JobModel> getAllJobs() {
        List<JobModel> filteredJobs = new ArrayList<>();
        List<JobModel> allJobs = jobRepository.findAll();
        for (JobModel jobModel : allJobs) {
            jobModel.setDescription(null);
            filteredJobs.add(getFilteredJob(jobModel));
        }
        return filteredJobs;
    }

    public JobModel getJobById(int id) {
        JobModel byId = jobRepository.getById(id);
        return getFilteredJob(byId);

    }


    private JobModel getFilteredJob(JobModel jobModel) {
        CompanyModel company = jobModel.getCompany();
        company.setCity(null);
        company.setFavoriteStudents(null);
        company.setEmail(null);
        company.setPassword(null);
        company.setPhone(null);
        jobModel.setCompany(company);
        return jobModel;
    }


    private void initJObs() {
        JobModel build = JobModel.builder().jobTitle("Frontend Developer").company(CompanyModel.builder().name("Tigra").build()).deadline(LocalDate.now()).isOpen(true).seats(5).location("Budapest").description("Good shit").build();
        CompanyModel byId = companyRepository.findAll().get(0);
        byId.setRoles(Roles.COMPANY);
        build.setCompany(byId);
        jobRepository.save(build);
    }
}
