package application.service;

import application.model.CompanyMessageModel;
import application.model.CompanyModel;
import application.model.StudentMessageModel;
import application.model.StudentModel;
import application.repository.CompanyInboxRepository;
import application.repository.StudentInboxRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class InboxService {

    private StudentInboxRepository studentInboxRepository;
    private CompanyInboxRepository companyInboxRepository;

    @Autowired
    public InboxService(StudentInboxRepository studentInboxRepository, CompanyInboxRepository companyInboxRepository) {
        this.studentInboxRepository = studentInboxRepository;
        this.companyInboxRepository = companyInboxRepository;
    }

    public List<StudentMessageModel> getMessagesByStudent(StudentModel student) {
        return studentInboxRepository.findStudentMessageModelByReceiver(student);
    }

    public List<CompanyMessageModel> getMessagesByCompany(CompanyModel company) {
        return companyInboxRepository.findCompanyMessageModelByReceiver(company);
    }


}