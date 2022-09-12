package application.service;

import application.model.CompanyModel;
import application.dao.CompanyDao;
import application.dao.StudentDao;

import java.util.List;

public class CompanyService {

    private CompanyDao companyDao;

    public CompanyService(CompanyDao companyDao) {
        this.companyDao = companyDao;
    }

    public void registerCompany(CompanyModel company) {
        companyDao.registerCompany(company);
    }

    public List<CompanyModel> getAllCompany() {
        return companyDao.getAllCompany();
    }

    public CompanyModel getCompanyById(int id) {
        return companyDao.getCompanyById(id);
    }
}
