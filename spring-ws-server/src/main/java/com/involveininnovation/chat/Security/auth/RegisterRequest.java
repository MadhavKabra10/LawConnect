package com.involveininnovation.chat.Security.auth;


import lombok.*;
import org.springframework.stereotype.Component;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Setter
public class RegisterRequest {
    private String firstName;
    private String lastName;
    private String email;
    private String password;
    private String phoneNo;
    private String gender;
    private String city;
    private String profession;
    private String role;
}
