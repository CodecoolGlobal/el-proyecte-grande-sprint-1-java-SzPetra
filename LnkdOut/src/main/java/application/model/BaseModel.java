package application.model;

import java.util.UUID;

public abstract class BaseModel {

    public String getName() {
        return name;
    }

    private String name;
    private int age;
    private UUID id;

    public BaseModel(String name, int age) {
        this.name = name;
        this.age = age;
        this.id = UUID.randomUUID();
    }

    public int getAge() {
        return age;
    }

    public UUID getId() {
        return id;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setAge(int age) {
        this.age = age;
    }
}
