package com.involveininnovation.chat.model;
import org.springframework.data.annotation.Id;
import lombok.*;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;


import javax.management.relation.Role;
import java.util.ArrayList;
import java.util.Collection;
import java.util.List;

@NoArgsConstructor
@AllArgsConstructor
@Document
@Getter
@Setter
@Builder
@ToString
public class User implements UserDetails {
    @Id
    private String email;
    private String fname;
    private String lname;
//  private String mname;
//  private String barRegistration;
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

    @Override
    public String getPassword() {
        return this.password;
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
    public User(String fname, String lname, String email, String password,
                String phone, String gender, String city, String profession,Roles role){
        this.fname = fname;
        this.lname = lname;
        this.email = email;
        this.password = password;
        this.phone = phone;
        this.gender = gender;
        this.city = city;
        this.profession = profession;
        this.role = Roles.USER;
        this.pending=new ArrayList<>();
        this.connection=new ArrayList<>();
    }

    public String getProfession() {
        return profession;
    }
}