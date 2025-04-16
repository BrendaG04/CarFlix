package com.example.CarFlix.Favorites;

import com.example.CarFlix.Car.Cars;
import com.example.CarFlix.user.User;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.Optional;

import java.util.List;

public interface FavoriteCarsRepository extends JpaRepository<FavoriteCars, Long> {

    List<FavoriteCars> findByUser(User user);
    boolean existsByUserAndCar(User user, Cars car);
    void deleteByUserAndCar(User user, Cars car);


}
