package application.service.dao.implementation;

import application.model.CompanyModel;
import application.service.dao.CompanyDao;

import java.util.ArrayList;
import java.util.List;

public class CompanyDaoMem implements CompanyDao {

    private List<CompanyModel> companies;

    public CompanyDaoMem() {
        this.companies = new ArrayList<>();
        companies.add(new CompanyModel("RFC", "email", "pw", "123", "BP"));
        companies.add(new CompanyModel("Tigra", "email", "pw", "2134", "Szöged"));
    }

    @Override
    public void registerCompany(CompanyModel company) {
        companies.add(company);
    }

    @Override
    public List<CompanyModel> getAllCompany() {
        System.out.println(companies);
        return companies;
    }

    @Override
    public CompanyModel getCompanyById(int id) {
        return companies.stream().filter(companyModel -> companyModel.getId()==id).findFirst().orElse(null);
    }
}
