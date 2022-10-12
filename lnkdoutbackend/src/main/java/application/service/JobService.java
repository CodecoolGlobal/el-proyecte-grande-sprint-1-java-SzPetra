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

    @Autowired
    public JobService(JobRepository jobRepository) {
        this.jobRepository = jobRepository;
    }

    public List<JobModel> getAllJobs() {
        List<JobModel> filteredJobs = new ArrayList<>();
        List<JobModel> allJobs = jobRepository.findAll();
        for (JobModel jobModel : allJobs) {
            jobModel.setDescription(null);
            filteredJobs.add(jobModel);
        }
        return filteredJobs;
    }

    public JobModel getJobById(int id) {
        return jobRepository.getById(id);

    }


    /*private JobModel getFilteredJob(JobModel jobModel) {
        CompanyModel company = jobModel.getCompany();
        company.setCity(null);
        company.setFavoriteStudents(null);
        company.setEmail(null);
        company.setPassword(null);
        company.setPhone(null);
        jobModel.setCompany(company);
        return jobModel;
    }*/


    public void initJObs() {
        JobModel build = JobModel.builder()
                .jobTitle("Frontend Developer")
                .deadline(LocalDate.now().plusDays(20))
                .isOpen(true)
                .seats(5)
                .location("Budapest")
                .description("Good shit")
                .build();
        jobRepository.save(build);
    }

    public JobModel createJob(JobModel job) {
        return jobRepository.save(job);
    }
}
