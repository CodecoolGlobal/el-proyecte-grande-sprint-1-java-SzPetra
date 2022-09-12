package application.configuration;
import application.service.CompanyService;
import application.service.StudentService;
import application.dao.CompanyDao;
import application.dao.StudentDao;
import application.dao.implementation.CompanyDaoMem;
import application.dao.implementation.StudentDaoMem;
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
