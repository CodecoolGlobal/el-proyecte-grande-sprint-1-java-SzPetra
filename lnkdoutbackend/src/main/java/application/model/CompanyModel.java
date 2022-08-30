package application.model;

import com.fasterxml.jackson.annotation.JsonProperty;

public class CompanyModel extends BaseModel{

    public CompanyModel(String name, String email, String phone, String city) {
        super(name, email, phone, city);
    }
}
