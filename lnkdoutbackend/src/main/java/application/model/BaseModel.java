package application.model;

import java.util.UUID;

public abstract class BaseModel {

    private String name;
    private String city;
    private String phone;
    private String email;
    private UUID id;

    public BaseModel(String name, String email, String phone, String city) {
        this.name = name;
        this.email = email;
        this.phone = phone;
        this.city = city;
        this.id = UUID.randomUUID();
    }
}
