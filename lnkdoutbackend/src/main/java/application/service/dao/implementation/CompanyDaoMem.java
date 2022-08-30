package application.service.dao.implementation;

import application.model.CompanyModel;
import application.service.dao.CompanyDao;

import java.util.ArrayList;
import java.util.List;

public class CompanyDaoMem implements CompanyDao {

    private List<CompanyModel> companies = new ArrayList<>();
    @Override
    public void registerCompany(CompanyModel company) {
        companies.add(company);
    }

    @Override
    public List<CompanyModel> getAllCompany() {
        return companies;
    }
}
