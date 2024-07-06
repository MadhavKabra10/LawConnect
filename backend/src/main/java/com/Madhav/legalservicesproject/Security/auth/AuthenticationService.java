package com.Madhav.legalservicesproject.Security.auth;

import com.Madhav.legalservicesproject.Model.Roles;
import com.Madhav.legalservicesproject.Model.User;
import com.Madhav.legalservicesproject.Repo.ProjectRepository;
import com.Madhav.legalservicesproject.Security.JWT.JwtService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.security.core.userdetails.UserDetails;

@Service
public class AuthenticationService {
    @Autowired
    ProjectRepository repo;
    @Autowired
    PasswordEncoder passwordEncoder;
    @Autowired
    AuthenticationManager authenticationManager;
    @Autowired
    JwtService jwtService;
    Logger logger = LoggerFactory.getLogger(AuthenticationResponse.class);
    public AuthenticationResponse register(RegisterRequest registerRequest) {
        var user = User.
                builder().
                FirstName(registerRequest.getFirstName())
                        .LastName(registerRequest.getLastName())
                                .email(registerRequest.getEmail())
                                        .password(passwordEncoder.encode(registerRequest.getPassword()))
                                                .PhoneNo(registerRequest.getPhoneNo())
                                                        .Gender(registerRequest.getGender())
                                                                .City(registerRequest.getCity())
                                                                        .Profession(registerRequest.getProfession())
                                                                                .Role(Roles.USER)
                                                                                        .build();
        repo.save(user);
        var jwt_token = jwtService.generateToken(user);
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
        var user = repo.findUserByEmail(loginRequest.getEmail()).orElseThrow();
        var jwt_token = jwtService.generateToken(user);
        return AuthenticationResponse.builder().token(jwt_token).build();
    }

}
