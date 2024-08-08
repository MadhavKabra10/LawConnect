package com.involveininnovation.chat.model;
import org.springframework.data.annotation.Id;
import lombok.*;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;


import java.util.Collection;
import java.util.List;
@NoArgsConstructor
@AllArgsConstructor
@Document
@Getter
@Setter
@Builder
public class User implements UserDetails {
    @Id
    private String email;
    private String firstName;
    private String lastName;
    private String password;
    private String gender;
    private String profession;
    private String city;
    private String phone;
    private List<String> connection;
    private List<String> pending;
    private Roles role;
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return List.of(new SimpleGrantedAuthority(role.name()));
    }
    public String getUsername() {
        return email;
    }

    public boolean isAccountNonExpired() {
        return true;
    }

    public boolean isAccountNonLocked() {
        return true;
    }

    public boolean isCredentialsNonExpired() {
        return true;
    }

    public boolean isEnabled() {
        return true;
    }

}