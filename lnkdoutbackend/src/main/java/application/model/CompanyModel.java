package application.model;

import lombok.*;
import javax.persistence.Entity;
import java.util.List;


@Getter
@Setter
@NoArgsConstructor
@Entity
public class CompanyModel extends BaseModel {

    @Builder
    public CompanyModel(String name, String email, String password, String phone, String city, int id) {
        super(name, email, password, phone, city, id);
    }
}
