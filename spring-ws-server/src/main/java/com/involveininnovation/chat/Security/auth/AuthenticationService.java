package com.involveininnovation.chat.Security.auth;

import com.involveininnovation.chat.Repository.UserRepository;
import com.involveininnovation.chat.Security.config.JwtService;
import com.involveininnovation.chat.model.Roles;
import com.involveininnovation.chat.model.User;
import lombok.RequiredArgsConstructor;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class AuthenticationService {
    private final UserRepository repo;
    private final PasswordEncoder passwordEncoder;
    private final AuthenticationManager authenticationManager;
    private final JwtService service;
    Logger logger = LoggerFactory.getLogger(AuthenticationResponse.class);
    public AuthenticationResponse register(RegisterRequest registerRequest) throws Exception {
        if(repo.findUserByEmail(registerRequest.getEmail()).isPresent()){
            throw new Exception("USER ALREADY EXISTS");
        }
         User user = User.
                builder().
                firstName(registerRequest.getFirstName())
                .lastName(registerRequest.getLastName())
                .email(registerRequest.getEmail())
                .password(passwordEncoder.encode(registerRequest.getPassword()))
                .phone(registerRequest.getPhoneNo())
                .gender(registerRequest.getGender())
                .city(registerRequest.getCity())
                .profession(registerRequest.getProfession())
                .role(Roles.USER)
                .build();
        repo.save(user);
        var jwt_token = service.generateToken(user);
        return AuthenticationResponse.builder().token(jwt_token).build();
    }

    public AuthenticationResponse login(LoginRequest loginRequest) throws Exception {
        try {
            authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(
                    loginRequest.getEmail(),
                    loginRequest.getPassword()
            ));
        }
        catch(Exception e){
            throw new Exception("VERY BAD CREDENTIALS");
        }
        System.out.println("hello");
        var user = repo.findUserByEmail(loginRequest.getEmail()).orElseThrow();
        var jwt_token = service.generateToken(user);
        return AuthenticationResponse.builder().token(jwt_token).build();
    }

}
