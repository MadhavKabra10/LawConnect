package com.involveininnovation.chat.Repository;

import com.involveininnovation.chat.model.User;
import org.springframework.data.mongodb.repository.MongoRepository;
import java.util.Optional;
import  java.util.List;
public interface UserRepository extends MongoRepository<User,String> {
    public Optional<User> findUserByEmail(String id);
    public List<User> findUserByProfession(String id);
}
