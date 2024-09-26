package com.involveininnovation.chat.controller;
import com.involveininnovation.chat.Repository.UserRepository;

import com.involveininnovation.chat.Security.auth.*;
import com.involveininnovation.chat.model.*;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.util.*;

@RestController
@RequestMapping("/Legal")
@RequiredArgsConstructor

public class HomeController {
    @Autowired
    private AuthenticationService authenticationService;
    @Autowired
    private UserRepository userRepository;
    Logger logger
            = LoggerFactory.getLogger(ChatHistory.class);
    @PostMapping("/update")
    public ResponseEntity<HttpStatus> updateUser(@RequestBody User user){
        userRepository.save(user);
        return new ResponseEntity<>(HttpStatus.OK);
    }
    @PostMapping ("/register")
    @CrossOrigin(origins = "http://localhost:3000")
    public ResponseEntity<AuthenticationResponse> register(@RequestBody RegisterRequest registerRequest) throws Exception{
        return ResponseEntity.ok(authenticationService.register(registerRequest));
    }
    @PostMapping ("/login")
    @CrossOrigin(origins = "http://localhost:3000")
    public ResponseEntity<AuthenticationResponse> login(@RequestBody LoginRequest loginRequest) throws Exception{
        return ResponseEntity.ok(authenticationService.login(loginRequest));
    }
    @PostMapping("/verify-otp")
    @CrossOrigin(origins = "http://localhost:3000")
    public ResponseEntity<AuthenticationResponse> verifyOtp(@RequestBody OtpModel otpModel)throws Exception{
        return ResponseEntity.ok(authenticationService.verifyOtp(otpModel.email(), otpModel.otp()));
    }
    @GetMapping ("/search")
    @CrossOrigin(origins = "http://localhost:3000")
    public List<User> search() throws Exception{
        Random rand = new Random();
        List<User> list = userRepository.findAll();
        List<User> temp = new ArrayList<>();
        for(var it : list){
            if(it.getProfession().equals("Lawyer"))temp.add(it);
        }
        List<User> newList = new ArrayList<>();
        for (int i = 0; i < 100; i++) {
            int randomIndex = rand.nextInt(temp.size());

            newList.add(temp.get(randomIndex));

            temp.remove(randomIndex);
        }
        return newList;
    }
    @PostMapping ("/connection")
    @CrossOrigin(origins = "http://localhost:3000")
    public String connection(@RequestBody ChatConnect chatConnect) throws Exception{
        String sender=chatConnect.getSender();
        String receiver=chatConnect.getReceiver();
        String role=chatConnect.getRole();
        User Sender = userRepository.findUserByEmail(sender).orElse(new User());
        User Receiver = userRepository.findUserByEmail(receiver).orElse(new User());
        if(role.equalsIgnoreCase("user")){
         List<String> items = Receiver.getPending();

         if(!items.contains(sender)){
             items.add(sender);
             Receiver.setPending(items);
             List<String> ritems=Sender.getPending();
             ritems.add(receiver);
             Sender.setPending(ritems);
             userRepository.save(Sender);
             userRepository.save(Receiver);
             return "ok";
         }
         else{
             return "not_okay";
         }
        }
        else{
            List<String> rcon=   Receiver.getConnection();
            List<String> rpen=   Receiver.getPending();
            List<String> scon=   Sender.getConnection();
            List<String> spen=   Sender.getPending();
            logger.warn("1");
           for(int i=0;i<rcon.size();i++){
                logger.warn(rcon.get(i));
            }
            logger.warn("2");
            for(int i=0;i<rpen.size();i++){
                logger.warn(rpen.get(i));
            }
            logger.warn("3");
            for(int i=0;i<scon.size();i++){
                logger.warn(scon.get(i));
            }

            logger.warn("4");
            for(int i=0;i<spen.size();i++){
                logger.warn(spen.get(i));
            }
            rpen.remove(sender);
            rcon.add(sender);
            scon.add(receiver);
            spen.remove(receiver);
            logger.warn("1");
            for(int i=0;i<rcon.size();i++){
                logger.warn(rcon.get(i));
            }
            logger.warn("2");
            for(int i=0;i<rpen.size();i++){
                logger.warn(rpen.get(i));
            }
            logger.warn("3");
            for(int i=0;i<scon.size();i++){
                logger.warn(scon.get(i));
            }

            logger.warn("4");
            for(int i=0;i<spen.size();i++){
                logger.warn(spen.get(i));
            }
            Receiver.setConnection(rcon);
            Receiver.setPending(rpen);
            Sender.setConnection(scon);
            Sender.setPending(spen);
            userRepository.save(Sender);
            userRepository.save(Receiver);
            return "ok";
        }



    }
    @PostMapping ("/self")
    @CrossOrigin(origins = "http://localhost:3000")
    public User recoverself(@RequestBody Mail mail){
        return userRepository.findUserByEmail(mail.getEmail()).orElse(new User());
    }

//    @PostMapping ("/service")
//    @CrossOrigin(origins = "http://localhost:3000")
//    public Summary chatbot(@RequestBody Mail mail){
//        URL url = new URL("http://example.com");
//        HttpURLConnection con = (HttpURLConnection) url.openConnection();
//        con.setRequestMethod("GET");
//    }

}
