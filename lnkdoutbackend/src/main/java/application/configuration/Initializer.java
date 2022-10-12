package application.configuration;

import application.service.CompanyService;
import application.service.JobService;
import application.service.StudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.autoconfigure.SpringBootApplication;



public class Initializer implements CommandLineRunner {
    private final JobService jobService;
    private final CompanyService companyService;
    private final StudentService studentService;

    @Autowired
    public Initializer(JobService jobService, CompanyService companyService, StudentService studentService) {
        this.jobService = jobService;
        this.companyService = companyService;
        this.studentService = studentService;
    }

    @Override
    public void run(String... args) throws Exception {
        jobService.initJObs();
        companyService.initCompanies();
    }
}
