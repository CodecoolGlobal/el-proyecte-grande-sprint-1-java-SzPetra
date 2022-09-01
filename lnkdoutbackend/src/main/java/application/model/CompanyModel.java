package application.model;

import com.fasterxml.jackson.annotation.JsonProperty;
public class CompanyModel extends BaseModel{

    public CompanyModel(@JsonProperty("name") String name, @JsonProperty("email") String email,
                        @JsonProperty("password") String password,
                        @JsonProperty("phone") String phone, @JsonProperty("city") String city) {
        super(name, email, password, phone, city);
    }
}
