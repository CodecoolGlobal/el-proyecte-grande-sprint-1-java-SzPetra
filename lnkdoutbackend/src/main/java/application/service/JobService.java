package application.service;

import application.model.JobModel;
import application.repository.JobRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class JobService {

    private final JobRepository jobRepository;

    @Autowired
    public JobService(JobRepository jobRepository) {
        this.jobRepository = jobRepository;
    }

    public List<JobModel> getAllJobs() {
        return jobRepository.findAll();
    }

    public JobModel getJobById(int id) {
        return jobRepository.getById(id);
    }
}
