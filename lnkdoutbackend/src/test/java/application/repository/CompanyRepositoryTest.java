package application.repository;

import application.model.CompanyModel;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest
class CompanyRepositoryTest {

    @Autowired private CompanyRepository companyRepository;

    private CompanyModel companyModel;

    @BeforeEach
     void setup() {
        companyModel = CompanyModel.builder().city("Budapest").name("CodeCool").phone("+36307870036").build();
        companyRepository.saveAndFlush(companyModel);
    }

    @Test
     void isCompanyExistByName() {
        CompanyModel codeCool = companyRepository.findCompanyModelByName("CodeCool");
        assertEquals(companyModel, codeCool);
    }



}