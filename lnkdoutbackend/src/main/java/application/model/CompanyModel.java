package application.model;

import application.model.roles.Roles;
import lombok.*;
import org.springframework.security.core.GrantedAuthority;

import javax.persistence.Entity;
import javax.persistence.OneToMany;
import java.util.ArrayList;
import java.util.Collection;
import java.util.List;


@Getter
@Setter
@NoArgsConstructor
@Entity
public class CompanyModel extends BaseModel {

    @OneToMany
    private List<StudentModel> favoriteStudents;

    @OneToMany
    private List<JobModel> jobs;

    @Builder
    public CompanyModel(String name, String email, String password, String phone, String city, int id, Roles roles) {
        super(name, email, password, phone, city, id, roles);
        this.favoriteStudents = new ArrayList<>();
    }

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return roles.getGrantedAuthorities();
    }

    @Override
    public String getUsername() {
        return null;
    }

    @Override
    public boolean isAccountNonExpired() {
        return false;
    }

    @Override
    public boolean isAccountNonLocked() {
        return false;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return false;
    }

    @Override
    public boolean isEnabled() {
        return false;
    }
}
