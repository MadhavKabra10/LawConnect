package com.involveininnovation.chat.model;

import lombok.*;
import java.util.List;


@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@ToString
public class Summary {

    private String summary;
    private List<String> files;
}
