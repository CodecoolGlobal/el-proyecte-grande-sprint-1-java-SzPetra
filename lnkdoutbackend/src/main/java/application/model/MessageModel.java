package application.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
public class MessageModel {

    private String subject;
    private String email;
    private String message;
    @ManyToOne
    private StudentModel student;
    @Id
    @GeneratedValue
    @JsonIgnore
    private int id;
}
