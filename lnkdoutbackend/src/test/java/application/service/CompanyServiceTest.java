package application.service;

import application.model.CompanyModel;
import application.repository.CompanyRepository;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import java.util.ArrayList;
import java.util.List;
import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.when;

@SpringBootTest
@ExtendWith(MockitoExtension.class)
class CompanyServiceTest {



    @Mock
    @Autowired
    private CompanyRepository companyRepository;

    @Test
    void registerCompany() {
        //TODO
    }

    @Test
    void getAllCompany() {
        List<CompanyModel> companyModels = new ArrayList<>();
        companyModels.add(CompanyModel.builder().name("CodeCool").build());
        companyModels.add(CompanyModel.builder().name("Tigra").build());
        when(companyRepository.findAll()).thenReturn(companyModels);
        CompanyService companyService = new CompanyService(companyRepository);
        assertEquals(companyModels, companyService.getAllCompany());
    }

    @Test
    void getCompanyById() {
        CompanyModel testCompany = CompanyModel.builder().name("test").phone("test").build();
        when(companyRepository.getById(1)).thenReturn(testCompany);
        assertEquals(testCompany, new CompanyService(companyRepository).getCompanyById(1));
    }
}