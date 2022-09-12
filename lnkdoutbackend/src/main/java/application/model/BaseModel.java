package application.model;

import com.fasterxml.jackson.annotation.JsonAnyGetter;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.*;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import java.util.Random;
import java.util.UUID;

@Getter
@Setter
@Entity
public abstract class BaseModel {

    @JsonProperty
    protected String name;

    @JsonProperty
    private String email;

    @JsonProperty
    private String password;

    @JsonProperty
    private String phone;

    @JsonProperty
    private String city;
    private Long id;

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

    @Id
    public Long getId() {
        return id;
    }
}

