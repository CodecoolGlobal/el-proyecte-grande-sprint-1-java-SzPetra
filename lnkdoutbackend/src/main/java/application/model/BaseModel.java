package application.model;

import java.util.UUID;

public abstract class BaseModel {

    public String getName() {
        return name;
    }

    private String name;
    private String city;
    private String phone;
    private String email;
    private UUID id;

    public BaseModel(String name, String city, String phone, String email) {
        this.name = name;
        this.city = city;
        this.phone = phone;
        this.email = email;
        this.id = UUID.randomUUID();
    }

    public UUID getId() {
        return id;
    }

    public void setName(String name) {
        this.name = name;
    }
}
