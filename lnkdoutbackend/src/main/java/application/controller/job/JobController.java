package application.controller.job;

import application.model.JobModel;
import application.service.JobService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;


@RestController
@RequestMapping("job")
public class JobController {

    private final JobService jobService;

    @Autowired
    public JobController(JobService jobService) {
        this.jobService = jobService;
    }

    @GetMapping
    public List<JobModel> getAllJobs() {
        return jobService.getAllJobs();
    }

    @GetMapping(value = "/{id}")
    public JobModel getJobById(@PathVariable int id) {
        return jobService.getJobById(id);
    }



}
