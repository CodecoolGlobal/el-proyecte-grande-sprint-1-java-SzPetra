package application.model;

import lombok.*;
import org.springframework.stereotype.Repository;

import javax.persistence.Entity;
import javax.persistence.OneToMany;
import java.util.ArrayList;
import java.util.List;


@Getter
@Setter
@NoArgsConstructor
@Entity
public class StudentModel extends BaseModel{

    @OneToMany
    private List<CompanyModel> favoriteCompanies;

    @Builder
    public StudentModel(String name, String email, String password, String phone, String city, int id) {
        super(name, email, password, phone, city, id);
        this.favoriteCompanies = new ArrayList<>();
    }
}
