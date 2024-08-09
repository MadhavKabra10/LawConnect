package com.involveininnovation.chat.Security.auth;


import lombok.*;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Setter
public class RegisterRequest {
    private String fname;
    private String lname;
    private String email;
    private String password;
    private String phone;
    private String gender;
    private String city;
    private String profession;
    private String role;
}
