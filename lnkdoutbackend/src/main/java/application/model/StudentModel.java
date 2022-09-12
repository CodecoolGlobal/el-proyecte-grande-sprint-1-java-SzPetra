package application.model;

import lombok.*;
import javax.persistence.Entity;



@Getter
@Setter
@NoArgsConstructor
@Entity
public class StudentModel extends BaseModel{

    @Builder
    public StudentModel(String name, String email, String password, String phone, String city, int id, int publicKey) {
        super(name, email, password, phone, city, id, publicKey);
    }
}
