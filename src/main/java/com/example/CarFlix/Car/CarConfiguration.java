package com.example.CarFlix.Car;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

// Inject database properties from application.properties
@Configuration
public class CarConfiguration {

    @Bean
    public WebMvcConfigurer corsConfigurer() {
        return new WebMvcConfigurer() {
            @Override
            public void addCorsMappings(CorsRegistry registry) {
                //car data endpoints (GET only)
                registry.addMapping("/api/v1/cars/**")
                        .allowedOrigins("http://localhost:3000", "https://CarFlix.vercel.app")
                        .allowedMethods("GET"); // Only GET for car data

                //favorites endpoints (POST, DELETE)
                registry.addMapping("/api/v1/favorites/**")
                        .allowedOrigins("http://localhost:3000", "https://CarFlix.vercel.app")
                        .allowedMethods("GET","POST", "DELETE", "OPTIONS") // POST, DELETE for favorites
                        .allowedHeaders("*")
                        .allowCredentials(true);

                //auth endpoints (POST, DELETE)
                registry.addMapping("/api/v1/auth/**")
                        .allowedOrigins("http://localhost:3000", "https://CarFlix.vercel.app")
                        .allowedMethods("POST", "OPTIONS") //POST , DELETE foR auth
                        .allowedHeaders("*")
                        .allowCredentials(true);
            }
        };
    }
}
