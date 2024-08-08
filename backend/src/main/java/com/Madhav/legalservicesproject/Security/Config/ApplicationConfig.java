//package com.Madhav.legalservicesproject.Security.Config;
//
//import com.Madhav.legalservicesproject.Repo.ProjectRepository;
////import com.Madhav.legalservicesproject.Repo.SearchRepoImplementation;
////import com.Madhav.legalservicesproject.Repo.SearchRepository;
//import lombok.RequiredArgsConstructor;
//import org.slf4j.Logger;
//import org.slf4j.LoggerFactory;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.context.annotation.Bean;
//import org.springframework.context.annotation.Configuration;
//import org.springframework.security.authentication.AuthenticationManager;
//import org.springframework.security.authentication.AuthenticationProvider;
//import org.springframework.security.authentication.dao.DaoAuthenticationProvider;
//import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
//import org.springframework.security.core.userdetails.UserDetails;
//import org.springframework.security.core.userdetails.UserDetailsService;
//import org.springframework.security.core.userdetails.UsernameNotFoundException;
//import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
//import org.springframework.security.crypto.password.PasswordEncoder;
//
//@Configuration
//@RequiredArgsConstructor
//public class ApplicationConfig {
//    @Autowired
//    ProjectRepository repo;
//    Logger logger = LoggerFactory.getLogger(AuthenticationProvider.class);
//    @Bean
//    public UserDetailsService userDetailsService() {
//
//        return new UserDetailsService() {
//            @Override
//            public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
//                logger.info("loadUserByUsername: "+repo.findUserByEmail(username).toString());
//                return repo.findUserByEmail(username).orElseThrow(() -> new UsernameNotFoundException("User not found!!"));
//            }
//        };
//    }
//    @Bean
//    public AuthenticationProvider authenticationProvider(){
//        DaoAuthenticationProvider authProvider = new DaoAuthenticationProvider();
//        authProvider.setUserDetailsService(userDetailsService());
//        authProvider.setPasswordEncoder(passwordEncoder());
//        logger.info("Inside authProvider: "+authProvider.toString());
//        return authProvider;
//    }
//    @Bean
//    public AuthenticationManager authenticationManager(AuthenticationConfiguration configuration)throws Exception{
//        logger.info("Inside authManager: "+configuration.getAuthenticationManager().toString());
//        return configuration.getAuthenticationManager();
//    }
//    @Bean
//    public static PasswordEncoder passwordEncoder(){
//        return new BCryptPasswordEncoder();
//    }
////    @Bean
////    public SearchRepository searchRepository(){
////        return new SearchRepoImplementation();
////    }
//}
