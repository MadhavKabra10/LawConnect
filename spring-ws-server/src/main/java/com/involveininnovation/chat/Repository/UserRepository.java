package com.involveininnovation.chat.Repository;

import com.involveininnovation.chat.model.User;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

import java.util.Optional;
import  java.util.List;
public interface UserRepository extends MongoRepository<User,String> {
    @Query("SELECT * FROM User LIMIT 100")
    public List<User> findFirst100Users();
    public Optional<User> findUserByEmail(String id);
    public List<User> findUserByProfession(String id);
}
