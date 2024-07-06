package com.Madhav.legalservicesproject.Controller;

import com.Madhav.legalservicesproject.Model.User;
import com.Madhav.legalservicesproject.Repo.SearchRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@RequestMapping("LegalServices")
public class HomeController {
    @Autowired
    SearchRepository searchRepository;
    @GetMapping("findLawyers/{location}")
    public List<User> findLawyers(@PathVariable String location){
        return searchRepository.findLawyers_filterByLocation(location);
    }
}
