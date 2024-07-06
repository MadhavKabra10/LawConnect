package com.involveininnovation.chat.controller;
import com.involveininnovation.chat.Repository.UserRepository;

import com.involveininnovation.chat.model.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import java.util.ArrayList;
import java.util.stream.Collectors;
import java.util.List;

@RestController
@RequestMapping("Legal")
public class HomeController {
   // @Autowired
  //  private AuthenticationManager authenticationManager;
    @Autowired
    private UserRepository userDatabase;
    Logger logger
            = LoggerFactory.getLogger(ChatHistory.class);
    @PostMapping ("/register")
    @CrossOrigin(origins = "http://localhost:3000")
    public String register(@RequestBody User user) throws Exception{
       if( userDatabase.findUserByEmail(user.getEmail()).isPresent())
           return "not_ok";
       else {
           userDatabase.save(user);
           return "ok";
       }
    }
    @PostMapping ("/login")
    @CrossOrigin(origins = "http://localhost:3000")
    public String login(@RequestBody Login user) throws Exception{
        if( userDatabase.findUserByEmail(user.getEmail()).isPresent()) {
            User found=userDatabase.findUserByEmail(user.getEmail()).orElse(new User());

            return found.getProfession();
        }
        else
            return "not_ok";
    }
    @GetMapping ("/search")
    @CrossOrigin(origins = "http://localhost:3000")
    public List<User> search() throws Exception{
        List<User> users=userDatabase.findAll();
               List<User>filteredUsers=new ArrayList<>();
        for(int i=0;i<users.size();i++){
            if(!(users.get(i).getProfession().equals("user")))
                filteredUsers.add(users.get(i));
        }

        return filteredUsers;
    }
    @PostMapping ("/connection")
    @CrossOrigin(origins = "http://localhost:3000")
    public String connection(@RequestBody ChatConnect chatConnect) throws Exception{
        String sender=chatConnect.getSender();
        String receiver=chatConnect.getReceiver();
        String role=chatConnect.getRole();
        User Sender=userDatabase.findUserByEmail(sender).orElse(new User());
        User Receiver=userDatabase.findUserByEmail(receiver).orElse(new User());
        if(role.equalsIgnoreCase("user")){
         List<String> items=   Receiver.getPending();

         if(!items.contains(sender)){
             items.add(sender);
             Receiver.setPending(items);
             List<String> ritems=Sender.getPending();
             ritems.add(receiver);
             Sender.setPending(ritems);
             userDatabase.save(Sender);
             userDatabase.save(Receiver);
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
            userDatabase.save(Sender);
            userDatabase.save(Receiver);
            return "ok";
        }



    }
    @PostMapping ("/self")
    @CrossOrigin(origins = "http://localhost:3000")
    public User recoverself(@RequestBody Mail mail){
        return userDatabase.findUserByEmail(mail.getEmail()).orElse(new User());
    }

//    @PostMapping ("/service")
//    @CrossOrigin(origins = "http://localhost:3000")
//    public Summary chatbot(@RequestBody Mail mail){
//        URL url = new URL("http://example.com");
//        HttpURLConnection con = (HttpURLConnection) url.openConnection();
//        con.setRequestMethod("GET");
//    }

}
