package com.example.CarFlix.Favorites;


import com.example.CarFlix.Car.Cars;
import com.example.CarFlix.config.JwtService;
import jakarta.servlet.http.HttpServletRequest;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(path="/api/v1/favorites")
@RequiredArgsConstructor
public class FavoriteCarsController {

    private final FavoriteCarsService favoriteCarsService;
    private final JwtService jwtService;

    //helper method to extract email
    private String extractEmail(HttpServletRequest request) {
        String authHeader = request.getHeader("Authorization");
        // Checks if the Authorization header is missing or doesn't start with "Bearer "
        if (authHeader == null || !authHeader.startsWith("Bearer ")) {
            throw new RuntimeException("Authorization Token is invalid");
        }
        String jwtToken = authHeader.substring(7);
        return jwtService.extractUsername(jwtToken);
    }

    //Add a new car  (handles Post Requests)
    @PostMapping(path="/add/{carId}")
    public ResponseEntity<String> addFavoriteCar(@PathVariable Long carId, HttpServletRequest request){
        String email = extractEmail(request);
        favoriteCarsService.addFavorite(email, carId);
        return ResponseEntity.status(HttpStatus.CREATED).body("Car added to favorites.");
    }

    //Removes a car from favorites
    @DeleteMapping(path="/delete/{carId}")
    public ResponseEntity<String> removeFavoriteCar(@PathVariable Long carId, HttpServletRequest request){
        String email = extractEmail(request);
        favoriteCarsService.removeFavorite(email, carId);
        return ResponseEntity.status(HttpStatus.OK).body("Car deleted from favorites.");
    }

    //Gets all favorite cars
    @GetMapping
    public ResponseEntity<List<Cars>> getFavoriteCars(HttpServletRequest request) {
        String email = extractEmail(request);
        List<Cars> favorites = favoriteCarsService.getOnlyFavoriteCars(email);
        return ResponseEntity.ok(favorites);
    }
}