package application.dao.implementation;

import application.dao.CompanyDao;
import application.model.CompanyModel;

import java.util.ArrayList;
import java.util.List;

public class CompanyDaoMem implements CompanyDao {

    private List<CompanyModel> companies = new ArrayList<>();

    public CompanyDaoMem() {
        companies.add(CompanyModel.builder().name("Jani").build());
    }

    @Override
    public void registerCompany(CompanyModel company) {
        companies.add(company);
    }

    @Override
    public List<CompanyModel> getAllCompany() {
        return companies;
    }

    @Override
    public CompanyModel getCompanyById(int id) {
        return companies.stream().filter(companyModel -> companyModel.getId()==id).findFirst().orElse(null);
    }
}
