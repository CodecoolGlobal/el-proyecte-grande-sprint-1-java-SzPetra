package application.service.dao;

import application.model.CompanyModel;

import java.util.List;

public interface CompanyDao {
    void addCompany(CompanyModel company);

    List<CompanyModel> getAllCompany();
}
