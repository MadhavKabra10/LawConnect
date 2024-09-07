package com.involveininnovation.chat.model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Lawyer {
    @Id
    private String id;
    private String lastName;
    private String firstName;
    private String middleName;
    private String mobileNo;
    private String email;
    private String barRegistration;
}
