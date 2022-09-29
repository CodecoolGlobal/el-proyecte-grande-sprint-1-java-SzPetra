package application.model;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;


@Entity
public class StudentMessageModel extends MessageBaseModel<StudentModel>{

    @Id
    @JsonIgnore
    @GeneratedValue
    private int Id;
}