package application.model;

import com.fasterxml.jackson.annotation.JsonProperty;

import java.time.LocalDate;
import java.util.Random;

public class MessageModel {

    private String subject;
    private String email;
    private String message;
    private LocalDate date;
    private int id;

    public MessageModel(@JsonProperty("subject") String subject, @JsonProperty("fromPerson") String email,
                        @JsonProperty("message") String message) {
        this.subject = subject;
        this.email = email;
        this.message = message;
        this.date = LocalDate.now();
        this.id = new Random().nextInt(1, 100);
    }

    public int getId() {
        return id;
    }
}
