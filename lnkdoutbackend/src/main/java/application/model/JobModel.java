package application.model;

import lombok.*;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.OneToOne;
import java.time.LocalDate;

@Getter
@Setter
@Entity
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class JobModel {

    @Id
    private Long id;

    private String jobTitle;

    private String description;

    private String location;

    private boolean isOpen;

    private int seats;

    @OneToOne
    private CompanyModel company;

    private LocalDate deadline;



}

