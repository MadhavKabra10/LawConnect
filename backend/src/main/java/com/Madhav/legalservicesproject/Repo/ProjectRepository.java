package com.Madhav.legalservicesproject.Repo;


import com.Madhav.legalservicesproject.Model.User;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface ProjectRepository extends MongoRepository<User,String> {
    public Optional<User> findUserByEmail(String Email);
}
