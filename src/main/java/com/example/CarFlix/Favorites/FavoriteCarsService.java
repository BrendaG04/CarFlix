package com.example.CarFlix.Favorites;


import com.example.CarFlix.Car.CarRepository;
import com.example.CarFlix.Car.Cars;
import com.example.CarFlix.config.JwtService;
import com.example.CarFlix.user.User;
import com.example.CarFlix.user.UserRepository;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class FavoriteCarsService {

    //Injecting repositories & services
    private final FavoriteCarsRepository favoriteCarsRepository;
    private final UserRepository userRepository;
    private final CarRepository carRepository;
    private final JwtService jwtService;


    //Adds a car to a users' favorites
    public void addFavorite(String email, Long carId ) {
        //find user by email
        User user = userRepository.findByEmail(email).orElseThrow();
        //find car by ID
        Cars car = carRepository.findById(carId).orElseThrow();

        // If not already in favorites, save the new FavoriteCars record
        if (!favoriteCarsRepository.existsByUserAndCar(user, car)) {
            FavoriteCars favorite = FavoriteCars.builder()
                    .user(user)
                    .car(car)
                    .build();
            favoriteCarsRepository.save(favorite);
        }
    }

    //Delete a car from a user's favorites
    @Transactional
    public void removeFavorite(String email, Long carId) {
        //get user and car info
        User user = userRepository.findByEmail(email).orElseThrow();
        Cars car = carRepository.findById(carId).orElseThrow();

        //delete favorite record
        favoriteCarsRepository.deleteByUserAndCar(user, car);
    }

    //Return/Get all favorite cars for a user
    public List<FavoriteCars> getFavorites(String email) {
        User user = userRepository.findByEmail(email).orElseThrow();
        return favoriteCarsRepository.findByUser(user);
    }

    public List<Cars> getOnlyFavoriteCars(String email) {
        User user = userRepository.findByEmail(email)
                .orElseThrow(() -> new RuntimeException("User not found"));
        List<FavoriteCars> favorites = favoriteCarsRepository.findByUser(user);
        return favorites.stream()
                .map(FavoriteCars::getCar)
                .collect(Collectors.toList());
    }
}
