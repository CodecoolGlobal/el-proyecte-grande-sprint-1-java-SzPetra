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
public class StudentModel extends BaseModel{

    private String gitRepository;

    @OneToMany
    private List<CompanyModel> favoriteCompanies;

    @Builder
    public StudentModel(String name, String email, String password, String phone, String city, int id, Roles roles, String gitRepository) {
        super(name, email, password, phone, city, id, roles);
        this.favoriteCompanies = new ArrayList<>();
        this.gitRepository = gitRepository;
    }

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return roles.getGrantedAuthorities();
    }

    @Override
    public String getUsername() {
        return name;
    }

    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return true;
    }
}
