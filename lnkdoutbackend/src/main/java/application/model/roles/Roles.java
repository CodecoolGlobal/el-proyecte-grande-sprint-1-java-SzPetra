package application.model.roles;

import org.springframework.security.core.authority.SimpleGrantedAuthority;

import java.util.HashSet;
import java.util.Set;

public enum Roles {

    ADMIN,
    STUDENT,
    COMPANY;

    public Set<SimpleGrantedAuthority> getGrantedAuthorities(){
        Set<SimpleGrantedAuthority> simpleGrantedAuthorities = new HashSet<>();
        simpleGrantedAuthorities.add(new SimpleGrantedAuthority("ROLE_" + this.name()));
        return simpleGrantedAuthorities;
    }
}
