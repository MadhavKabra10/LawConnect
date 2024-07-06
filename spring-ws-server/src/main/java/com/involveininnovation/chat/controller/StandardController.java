package com.involveininnovation.chat.controller;

import com.involveininnovation.chat.Repository.ChatHistoryRepository;
import com.involveininnovation.chat.model.ChatHistory;
import com.involveininnovation.chat.model.Message;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.CrossOrigin;
import java.util.ArrayList;
import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
@RestController
@RequestMapping("Legal")
public class StandardController {
    @Autowired
    private ChatHistoryRepository chatHistory;
    Logger logger
            = LoggerFactory.getLogger(StandardController.class);
    @GetMapping("/connect/{id}")
    @CrossOrigin(origins = "http://localhost:3000")
    public ChatHistory recover(@PathVariable String id){
        ChatHistory history;
        try {
             history = chatHistory.findUserById(id).orElse(new ChatHistory());
            List<Message> p = history.getMessages();

            for (int i = 0; i < p.size(); i++)
                logger.info(p.get(i).getSenderName());
            return history;
        }
        catch (Exception e){
            logger.error(e.toString());

        }
        return new ChatHistory();


    }
    @GetMapping("/test")
    public String recor(){
        return "Manas";
    }
}
