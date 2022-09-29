package application.repository;

import application.model.CompanyMessageModel;
import application.model.CompanyModel;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface CompanyInboxRepository extends JpaRepository<CompanyMessageModel, Integer> {

    List<CompanyMessageModel> findCompanyMessageModelByReceiver(CompanyModel company);
}
