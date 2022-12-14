package application.model;

import application.model.roles.Roles;
import lombok.*;
import org.springframework.security.core.userdetails.UserDetails;

import javax.persistence.*;
import java.util.Objects;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@MappedSuperclass
public abstract class BaseModel implements UserDetails {

    protected String name;
    private String email;
    private String password;
    private String phone;
    private String city;

    @Id
    @GeneratedValue(strategy=GenerationType.AUTO)
    private int id;

    @Enumerated(EnumType.STRING)
    protected Roles roles;


    @Override
    public String toString() {
        return "BaseModel{" +
                "id='" + id + '\'' +
                ", name='" + name + '\'' +
                ", email='" + email + '\'' +
                ", password='" + password + '\'' +
                ", phone='" + phone + '\'' +
                ", city='" + city + '\'' +
                '}';
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        BaseModel baseModel = (BaseModel) o;
        return id == baseModel.id && Objects.equals(name, baseModel.name) && Objects.equals(email, baseModel.email) && Objects.equals(password, baseModel.password) && Objects.equals(phone, baseModel.phone) && Objects.equals(city, baseModel.city);
    }

    @Override
    public int hashCode() {
        return Objects.hash(name, email, password, phone, city, id);
    }


}

