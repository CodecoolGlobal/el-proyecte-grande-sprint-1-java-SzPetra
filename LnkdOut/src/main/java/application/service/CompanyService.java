package application.service;

import application.model.StudentModel;
import application.service.dao.CompanyDao;
import application.service.dao.StudentDao;

import java.util.List;

public class CompanyService {

    private CompanyDao companyDao;

    public CompanyService(CompanyDao companyDao) {
        this.companyDao = companyDao;
    }

}
