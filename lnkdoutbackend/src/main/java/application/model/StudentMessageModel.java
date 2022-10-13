package application.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@Getter
@Setter
@NoArgsConstructor
@Entity
public class StudentMessageModel extends MessageBaseModel<StudentModel>{

    @Id
    @JsonIgnore
    @GeneratedValue
    private int id;
}