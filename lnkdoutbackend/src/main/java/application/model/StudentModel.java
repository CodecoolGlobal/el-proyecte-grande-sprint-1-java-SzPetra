package application.model;

import com.fasterxml.jackson.annotation.JsonProperty;

import java.util.UUID;

public class StudentModel extends BaseModel{

    private int age;

    public StudentModel(String name, int age, String city, String phone, String email) {
        super(name, city, phone, email);
        this.age = age;
    }
}
