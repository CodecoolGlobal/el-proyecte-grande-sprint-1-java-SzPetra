package application.service;

import application.model.CompanyModel;
import application.model.JobModel;
import application.repository.JobRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

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
        company.setRoles(null);
        jobModel.setCompany(company);
        return jobModel;
    }
}
