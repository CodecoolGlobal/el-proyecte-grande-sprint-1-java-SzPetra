package application.service.dao.implementation;

import application.model.CompanyModel;
import application.service.dao.CompanyDao;

import java.util.ArrayList;
import java.util.List;

public class CompanyDaoMem implements CompanyDao {

    private List<CompanyModel> companies = new ArrayList<>();

    public CompanyDaoMem() {
        companies.add(new CompanyModel("Name", "email", "password", "phone", "city"));
        companies.add(new CompanyModel("Name1", "email", "password", "phone", "city"));
        companies.add(new CompanyModel("Name2", "email", "password", "phone", "city"));
        companies.add(new CompanyModel("Name3", "email", "password", "phone", "city"));
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
