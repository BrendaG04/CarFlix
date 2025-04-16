package com.example.CarFlix.config;


import com.example.CarFlix.user.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.authentication.dao.DaoAuthenticationProvider;
import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;

@Configuration
@RequiredArgsConstructor
public class ApplicationConfig {

    // Injects the UserRepository dependency, which interacts with the database to manage user data
    private final UserRepository repository;

    // Defines a Spring-managed bean for handling user authentication details
    @Bean
    public UserDetailsService userDetailsService() {
        return username ->
                repository.findByEmail(username)   // Retrieves the user by their email (username)
                        .orElseThrow(() -> new UsernameNotFoundException("User Not Found"));  // Throws an exception if the user is not found
    }

    @Bean
    public AuthenticationProvider authenticationProvider() {
        //This is a built-in Spring Security implementation of AuthenticationProvider that uses a UserDetailsService and PasswordEncoder to authenticate users.
        DaoAuthenticationProvider authProvider = new DaoAuthenticationProvider();
        //Sets the UserDetailsService (defined earlier) to fetch user details during authentication.
        authProvider.setUserDetailsService(userDetailsService());
        //Sets the PasswordEncoder (defined later) to handle password encoding and verification.
        authProvider.setPasswordEncoder(passwordEncoder());
        return authProvider;
    }

    @Bean
    public AuthenticationManager authenticationManager(AuthenticationConfiguration config) throws Exception {
        return config.getAuthenticationManager();
    }

    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }
}
