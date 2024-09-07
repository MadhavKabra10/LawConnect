package com.involveininnovation.chat.service;

import com.twilio.Twilio;
import com.twilio.rest.api.v2010.account.Message;
import com.twilio.type.PhoneNumber;
import jakarta.annotation.PostConstruct;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

@Service
public class SMSService {
    @Value( "${application.properties.account-sid}")
    private String ACCOUNT_SID;
    @Value("${application.properties.authToken}")
    private String AUTH_TOKEN;
    @Value("${application.properties.phoneNo}")
    private String FROM_NUMBER;
    @PostConstruct
    void init(){
        Twilio.init(ACCOUNT_SID,AUTH_TOKEN);
    }
    public void sendSMS(String to,String otp){
        Message.creator(
                new PhoneNumber(to),
                new PhoneNumber(FROM_NUMBER),
                ("Your verification code is : " + otp))
                .create();
    }
}
