package application.model;

import com.fasterxml.jackson.annotation.JsonProperty;

public class CompanyModel extends BaseModel{
    public CompanyModel(@JsonProperty("name") String name,
                        @JsonProperty("age")int age) {
        super(name, age);
    }
}
