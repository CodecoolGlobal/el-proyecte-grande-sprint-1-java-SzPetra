package application.model;

import lombok.*;

import javax.persistence.*;
import java.time.LocalDate;

@Getter
@Setter
@Entity
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class JobModel {

    @Id
    @GeneratedValue(strategy= GenerationType.AUTO)
    private int id;

    private String jobTitle;

    private String description;

    private String location;

    private boolean isOpen;

    private int seats;

    @OneToOne
    private CompanyModel company;

    private LocalDate deadline;



}

