package com.involveininnovation.chat.model;

import lombok.*;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.List;


@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@ToString
@Builder
public class Summary {

    private String summary;
    private List<String> files;
}
