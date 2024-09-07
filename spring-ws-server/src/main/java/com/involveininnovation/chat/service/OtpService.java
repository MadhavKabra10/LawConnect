package com.involveininnovation.chat.service;

import com.involveininnovation.chat.model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Map;
import java.util.Random;
import java.util.concurrent.ConcurrentHashMap;

@Service
public class OtpService {
    @Autowired
    private SMSService service;
    private Map<String,String> otpCache = new ConcurrentHashMap<>();
    public String generateOtp(User user){
        String otp = String.valueOf(new Random().nextInt(999999));
        otpCache.put(user.getEmail(),otp);
        return otp;
    }
    public void sendOtp(User user,String otp){
        service.sendSMS(user.getPhone(),otp);
    }
    public boolean verifyOtp(User user,String otp){
        String storedOtp = otpCache.get(user.getEmail());
        return storedOtp != null && storedOtp.equals(otp);
    }
}
