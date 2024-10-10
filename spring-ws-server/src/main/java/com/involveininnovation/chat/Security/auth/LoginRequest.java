package com.involveininnovation.chat.Security.auth;

import lombok.*;

@NoArgsConstructor
@AllArgsConstructor
@Data
@Builder
@ToString
public class LoginRequest {
    private String email;
    private String password;
}
