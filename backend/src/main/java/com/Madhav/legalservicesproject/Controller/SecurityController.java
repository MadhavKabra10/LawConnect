//package com.Madhav.legalservicesproject.Controller;
//
//import com.Madhav.legalservicesproject.Security.auth.*;
//import lombok.RequiredArgsConstructor;
//import org.slf4j.Logger;
//import org.slf4j.LoggerFactory;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.http.ResponseEntity;
//import org.springframework.web.bind.annotation.*;
//import  java.util.Map;
//import org.springframework.security.access.AccessDeniedException;
//import org.springframework.http.HttpStatus;
//
//@RestController
//@RequestMapping("LegalServices")
//@RequiredArgsConstructor
//@CrossOrigin(origins = "http://localhost:3000")
//public class SecurityController {
//    @Autowired
//    AuthenticationService service;
//    Logger logger = LoggerFactory.getLogger(LoginRequest.class);
//
//    @PostMapping("/register")
//    public ResponseEntity<AuthenticationResponse> register(@RequestBody RegisterRequest registerRequest) {
//        return ResponseEntity.ok(service.register(registerRequest));
//    }
//
//    @PostMapping("/login")
//    public ResponseEntity<AuthenticationResponse> login(@RequestBody LoginRequest loginRequest) throws Exception {
//        return ResponseEntity.ok(service.login(loginRequest));
//    }
//
//    @GetMapping("/handle")
//    public ResponseEntity<AuthenticationResponse> handle(@RequestBody LoginRequest loginRequest) throws Exception {
//        return ResponseEntity.ok(service.login(loginRequest));
//    }
//}
//
