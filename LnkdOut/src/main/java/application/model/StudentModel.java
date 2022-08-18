package application.model;

import com.fasterxml.jackson.annotation.JsonProperty;

import java.util.UUID;

public class StudentModel extends BaseModel{

    public StudentModel(@JsonProperty("name") String name,
                        @JsonProperty("name") int age) {
        super(name, age);
    }


}
