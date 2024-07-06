package com.Madhav.legalservicesproject.Model;

import lombok.*;
import nonapi.io.github.classgraph.json.Id;

import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.Collection;
import java.util.List;


@Getter
@Setter
@Data
@NoArgsConstructor
@Builder
@AllArgsConstructor
@Document("User")
public class User implements UserDetails {
    private String FirstName;
    private String LastName;
    @Id
    private String email;
    private String password;
    private Integer PhoneNo;
    private String Gender;
    private String City;
    private String Profession;
    private Roles Role;

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return List.of(new SimpleGrantedAuthority(Role.name()));
    }

    @Override
    public String getUsername() {
        return email;
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

    @Override
    public String getPassword(){
        return this.password;
    }
}
