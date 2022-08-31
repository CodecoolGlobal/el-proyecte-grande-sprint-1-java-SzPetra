package application.service.dao;

import application.model.CompanyModel;

import java.util.List;

public interface CompanyDao {
    void registerCompany(CompanyModel company);

    List<CompanyModel> getAllCompany();

    CompanyModel getCompanyById(int id);
}
