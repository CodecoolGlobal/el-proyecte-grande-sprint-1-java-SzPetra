package application.configuration;
import application.service.CompanyService;
import application.service.StudentService;
import application.service.dao.CompanyDao;
import application.service.dao.StudentDao;
import application.service.dao.implementation.CompanyDaoMem;
import application.service.dao.implementation.StudentDaoMem;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class ServiceConfig {

    @Bean
    public StudentDao studentDao() {
        return new StudentDaoMem();
    }

    @Bean
    public CompanyDao companyDao() {
        return new CompanyDaoMem();
    }

    @Bean
    public StudentService studentService() {
        return new StudentService(studentDao());
    }

    @Bean
    public CompanyService companyService() {
        return new CompanyService(companyDao());
    }
}
