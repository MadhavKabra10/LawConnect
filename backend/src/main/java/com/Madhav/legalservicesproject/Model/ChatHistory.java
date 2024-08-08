package com.Madhav.legalservicesproject.Model;
import lombok.*;
import org.springframework.data.annotation.Id;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@ToString

public class ChatHistory {
    @Id
    private String id;

//    private List<Message> messages;

}
