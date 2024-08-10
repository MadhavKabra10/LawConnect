package com.involveininnovation.chat.Repository;
import com.involveininnovation.chat.model.ChatHistory;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.Optional;

public interface ChatHistoryRepository extends MongoRepository<ChatHistory,String>{
        public Optional<ChatHistory> findChatHistoryById(String id);

    }

