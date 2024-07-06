package com.involveininnovation.chat.controller;

import com.involveininnovation.chat.model.ChatHistory;
import com.involveininnovation.chat.model.Message;
import com.involveininnovation.chat.Repository.ChatHistoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.Payload;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.stereotype.Controller;

import java.util.ArrayList;


@Controller
public class ChatController {
    @Autowired
    private ChatHistoryRepository repository;
    @Autowired
    private SimpMessagingTemplate simpMessagingTemplate;

    @MessageMapping("/message")
    @SendTo("/chatroom/public")
    public Message receiveMessage(@Payload Message message){
        return message;
    }

    @MessageMapping("/private-message")
    public Message recMessage(@Payload Message message){
        String id;
        if(message.getSenderName().compareTo(message.getReceiverName())>0){
            id=message.getSenderName()+message.getReceiverName();
        }
        else {
            id = message.getReceiverName() + message.getSenderName();
        }
        ChatHistory history = repository.findUserById(id).orElse(new ChatHistory(id,new ArrayList<>()));
        history.getMessages().add(message);

        repository.save(history);
        simpMessagingTemplate.convertAndSendToUser(id,"/private",message);
        System.out.println(message.toString());
        return message;
    }
}