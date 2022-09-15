package application.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.*;
import javax.persistence.*;
import java.util.List;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@MappedSuperclass
public abstract class BaseModel {

    protected String name;
    private String email;
    private String password;
    private String phone;
    private String city;

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private int id;


    @Override
    public String toString() {
        return "BaseModel{" +
                "name='" + name + '\'' +
                ", email='" + email + '\'' +
                ", password='" + password + '\'' +
                ", phone='" + phone + '\'' +
                ", city='" + city + '\'' +
                '}';
    }
}

