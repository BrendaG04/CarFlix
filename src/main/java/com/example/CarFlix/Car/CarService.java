package com.example.CarFlix.Car;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;



//The service layer contains the business logic of your application. It communicates between the controller and repository.
//@Service: Marks this class as a service component in Spring Boot.
//@Autowired: Injects the CarRepository so we can interact with the database.
//Implements CRUD operations: getAllCars(), getCarById(), addCar(), and deleteCar().

@Service
public class CarService {

    private final CarRepository carRepository;

    //Injects CarRepository into the service layer
    @Autowired
    public CarService(CarRepository carRepository) {
        this.carRepository = carRepository;
    }

    // Retrieve all cars
    public List<Cars> getAllCars(){
        return carRepository.findAll();
    }

    //Return all cars from a specified make
    public List<Cars> getCarsByMake(String make){
        return carRepository.findAll().stream()
                .filter(car -> car.getMake() != null && car.getMake().equalsIgnoreCase(make))
                .collect(Collectors.toList());
    }

    //Retrieve cars by a specific engineType
    public List<Cars> getCarsByEngineType(String searchText){
        return carRepository.findAll().stream()
                .filter(car -> car.getEnginetype()!=null && car.getEnginetype().toLowerCase().contains(searchText.toLowerCase()))
                .collect(Collectors.toList());
    }

    //Retrieve cars by a specific year
    public List<Cars> getCarsByYear(Integer year){
        return carRepository.findAll().stream()
                .filter(car -> year!=null && year.equals(car.getYear()))
                .collect(Collectors.toList());
    }

    //Retrieve a single car by ID
    public Cars getCarById(Long id){
        return carRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Car not found with this ID: " + id));
    }

    //Add a new car
    public Cars addCar(Cars car){
        carRepository.save(car);
        return car;
    }

    //Updates an existing car by id
    public Cars updateCar(Long id, Cars updatedCar){
        Optional<Cars> existingCar = carRepository.findById(id);
        if (existingCar.isPresent()) {
            Cars car = existingCar.get();
            car.setMake(updatedCar.getMake());
            car.setModel(updatedCar.getModel());
            car.setYear(updatedCar.getYear());
            car.setPrice(updatedCar.getPrice());
            car.setEnginetype(updatedCar.getEnginetype());
            car.setSeats(updatedCar.getSeats());
            return carRepository.save(car);
        } else{
            throw new RuntimeException("Car not found with this ID: " + id);
        }
    }

    //Delete a car by ID
    //annotation ensures that a transaction is active when the repository executes the delete or remove call
    @Transactional
    public void deleteCar(Long id){
        if (!carRepository.existsById(id)) {
            throw new RuntimeException("Car not found with this ID: " + id);
        }
        carRepository.deleteById(id);
    }


}
