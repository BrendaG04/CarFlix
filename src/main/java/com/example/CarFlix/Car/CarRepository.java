package com.example.CarFlix.Car;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

//Repository - used to interact with the database—saving, retrieving, updating, and deleting data.
//JpaRepository<Car, Long> gives us built-in methods like save(), findById(), findAll(), deleteById(), etc.
//tells Spring Boot this is a database repository.

@Repository
public interface CarRepository extends JpaRepository<Cars, Long> {

    Long Id(Long id);
    Optional<Cars> findByMake(String make);

}
