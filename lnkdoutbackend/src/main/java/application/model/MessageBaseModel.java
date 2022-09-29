package application.model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.ManyToOne;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public abstract class MessageBaseModel <T> {

        protected String subject;
        protected String email;
        protected String message;
        @ManyToOne
        protected T sender;

}
