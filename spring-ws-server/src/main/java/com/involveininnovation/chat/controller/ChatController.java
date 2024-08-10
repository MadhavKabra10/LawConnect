package com.involveininnovation.chat.controller;

import com.involveininnovation.chat.model.ChatHistory;
import com.involveininnovation.chat.model.Message;
import com.involveininnovation.chat.Repository.ChatHistoryRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.Payload;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;


@RestController
@RequiredArgsConstructor
public class ChatController {
    @Autowired
    private ChatHistoryRepository repository;
    @Autowired
    private SimpMessagingTemplate simpMessagingTemplate;

//    @MessageMapping("/message")
//    @SendTo("/chatroom/public")
//    @CrossOrigin(origins = "http://localhost:3000")
//    public Message receiveMessage(@Payload Message message){
//        return message;
//    }

    @MessageMapping("/private-message")
    public Message receiveMessage(@Payload Message message){
        String id;
        if(message.getSenderName().compareTo(message.getReceiverName())>0){
            id=message.getSenderName()+message.getReceiverName();
        }
        else {
            id = message.getReceiverName() + message.getSenderName();
        }
        ChatHistory history = repository.findChatHistoryById(id).orElse(new ChatHistory(id,new ArrayList<>()));
        history.getMessages().add(message);

        repository.save(history);
        simpMessagingTemplate.convertAndSendToUser(message.getSenderName(),"/private",message);
        simpMessagingTemplate.convertAndSendToUser(message.getReceiverName(),"/private",message);
        System.out.println(message);
        return message;
    }
}
