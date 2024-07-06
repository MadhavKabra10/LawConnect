package com.involveininnovation.chat.model;
import lombok.*;
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@ToString
public class ChatConnect {
    private String sender;
    private String receiver;
    private String role;
}
