package application.service;

import application.model.CompanyModel;
import application.dao.CompanyDao;
import application.dao.StudentDao;
import application.repository.CompanyRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CompanyService {

   private CompanyRepository companyRepository;

   @Autowired
    public CompanyService(CompanyRepository companyRepository) {
        this.companyRepository = companyRepository;
    }

    public void registerCompany(CompanyModel company) {
       companyRepository.save(company);
    }

    public List<CompanyModel> getAllCompany() {
        return companyRepository.findAll();
    }

    public CompanyModel getCompanyById(int id) {
        return companyRepository.findById(id)
                .orElse(null);
    }
}
