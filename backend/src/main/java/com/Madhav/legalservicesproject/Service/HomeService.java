//package com.Madhav.legalservicesproject.Service;
//
//import com.Madhav.legalservicesproject.Repo.ProjectRepository;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.security.core.GrantedAuthority;
//import org.springframework.security.core.authority.SimpleGrantedAuthority;
//import org.springframework.security.core.userdetails.User;
//import org.springframework.security.core.userdetails.UserDetails;
//import org.springframework.security.core.userdetails.UserDetailsService;
//import org.springframework.security.core.userdetails.UsernameNotFoundException;
//import org.springframework.stereotype.Service;
//
//import java.util.ArrayList;
//import java.util.List;
//import java.util.Optional;
//
//@Service
//public class HomeService implements UserDetailsService {
//    @Autowired
//    private ProjectRepository repo;
//    @Override
//    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
//        Optional<com.Madhav.legalservicesproject.Model.User> optionalUser = repo.findByEmail(email);
//        if (!optionalUser.isPresent()) {
//            throw new UsernameNotFoundException("USER NOT FOUND BITCH!!");
//        }
//        com.Madhav.legalservicesproject.Model.User user = optionalUser.get();
//        List<GrantedAuthority> grantedAuthority = new ArrayList<>();
//        grantedAuthority.add(new SimpleGrantedAuthority(user.getRole()));
//        return new User(user.getEmail(), user.getPassword(),grantedAuthority);
//    }
//}
