package application.model;

import com.fasterxml.jackson.annotation.JsonAnyGetter;
import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.*;

import javax.persistence.Column;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import java.util.Random;
import java.util.UUID;
@Data
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public abstract class BaseModel {
    private String name;
    private String email;
    private String password;
    private String phone;
    private String city;
    @GeneratedValue
    @Id
    @JsonIgnore
    private int id;
    @Column(unique = true)
    private int publicKey;

    @Override
    public String toString() {
        return "BaseModel{" +
                "name='" + name + '\'' +
                ", email='" + email + '\'' +
                ", password='" + password + '\'' +
                ", phone='" + phone + '\'' +
                ", city='" + city + '\'' +
                ", id=" + id +
                '}';
    }
}

