package application.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Getter
@Setter
@NoArgsConstructor
@Entity
public class CompanyMessageModel extends MessageBaseModel<CompanyModel>{

    @Id
    @JsonIgnore
    @GeneratedValue
    private int id;
}
