package com.involveininnovation.chat.model;
import org.springframework.data.annotation.Id;
import lombok.*;


import java.util.List;
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@ToString

public class User  {
    @Id
    private String email;
    private String fname;
    private String lname;
    private String password;
    private String gender;
    private String profession;
    private String city;
    private String phone;
    private List<String> connection;
    private List<String> pending;




}