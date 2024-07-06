package com.Madhav.legalservicesproject.Model;
import java.util.List;
import lombok.*;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import java.util.Date;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@ToString

public class ChatHistory {
    @Id
    private String id;

    private List<Message> messages;

}
