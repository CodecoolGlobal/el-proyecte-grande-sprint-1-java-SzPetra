package application.repository;

import application.model.CompanyModel;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CompanyRepository extends JpaRepository<CompanyModel, Integer> {

    CompanyModel findCompanyModelByName(String name);

    void deleteByName(String name);
}
