package application.controller.job;

import application.model.JobModel;
import application.service.CompanyService;
import application.service.JobService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@RequestMapping("job")
public class JobController {

    private final JobService jobService;
    private final CompanyService companyService;

    @Autowired
    public JobController(JobService jobService, CompanyService companyService) {
        this.jobService = jobService;
        this.companyService = companyService;
    }

    @GetMapping
    public List<JobModel> getAllJobs() {
        return jobService.getAllJobs();
    }

    @GetMapping(value = "/{id}")
    public JobModel getJobById(@PathVariable int id) {
        return jobService.getJobById(id);
    }

    @PostMapping(value = "create-job/{companyId}")
    public ResponseEntity<String> createJob(@PathVariable int companyId, @RequestBody JobModel job) {
        int errorNum = -1;
        JobModel jobModel = jobService.createJob(job);
        if (jobModel == null) {
            return ResponseEntity
                    .status(HttpStatus.NOT_ACCEPTABLE)
                    .body("Job cannot be Saved!");
        }
        int compId = companyService.createJob(jobModel, companyId);
        if (compId == errorNum) {
            return  ResponseEntity
                    .status(HttpStatus.NOT_ACCEPTABLE)
                    .body("Job cannot saved to Company!");
        }
        return ResponseEntity
                .status(HttpStatus.OK)
                .body("Job created!");
    }
}
