package com.involveininnovation.chat.Security.auth;

import com.involveininnovation.chat.Repository.UserRepository;
import com.involveininnovation.chat.Security.config.JwtService;
import com.involveininnovation.chat.model.Roles;
import com.involveininnovation.chat.model.User;
import com.involveininnovation.chat.service.OtpService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class AuthenticationService {
    @Autowired
    private UserRepository repo;
    @Autowired
    private PasswordEncoder passwordEncoder;
    @Autowired
    private AuthenticationManager authenticationManager;
    @Autowired
    private JwtService service;
    @Autowired
    private OtpService otpService;
    Logger logger = LoggerFactory.getLogger(AuthenticationResponse.class);
    public AuthenticationResponse register(RegisterRequest registerRequest) throws Exception {
        if(repo.findUserByEmail(registerRequest.getEmail()).isPresent()){
            throw new Exception("USER ALREADY EXISTS");
        }
         User user = new User(registerRequest.getFname(),
                 registerRequest.getLname(),
                 registerRequest.getEmail(),
                 passwordEncoder.encode(registerRequest.getPassword()),
                 registerRequest.getPhone(),
                 registerRequest.getGender(),
                 registerRequest.getCity(),
                 registerRequest.getProfession(),
                 Roles.USER
                 );

        repo.save(user);
        String jwt_token = service.generateToken(user);
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
        if(!user.getProfession().equals("user")){
            String otp = otpService.generateOtp(user);
            otpService.sendOtp(user,otp);
            return AuthenticationResponse.builder().token("OTP sent!Please verify to complete login").build();
        }
        var jwt_token = service.generateToken(user);
        return AuthenticationResponse.builder().token(jwt_token).build();
    }

    public AuthenticationResponse verifyOtp(String email,String otp) throws Exception{
        User user = repo.findUserByEmail(email).orElseThrow();
        if(otpService.verifyOtp(user,otp)){
            throw new Exception("INVALID OTP");
        }
        var jwt_token = service.generateToken(user);
        return AuthenticationResponse.builder().token(jwt_token).build();
    }

}
