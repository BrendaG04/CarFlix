package com.example.CarFlix.Car;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

//controller page - handles API requests and acts as a bridge between
//the service layer and the client (FrontEnd, Postman)
//Stateless rest api = each request is independent of previous requests


@RestController
@RequestMapping(path="api/v1/cars")
@CrossOrigin("*")
public class CarController {

    private final CarService carService;

    //Injects CarService into the controller
    @Autowired
    public CarController(CarService carService) {
        this.carService = carService;
    }

    //Get All Cars  (handles Get Requests)
    @GetMapping
    public List<Cars> getAllCars(){
        return carService.getAllCars();
    }

    //Get all cars from a specific make
    @GetMapping("/make")
    public List<Cars> getCarsByMake(@RequestParam String make){
        return carService.getCarsByMake(make);
    }

    //Retrieve cars by a specific year
    @GetMapping("/year")
    public List<Cars> getCarsByYear(@RequestParam(required = false) Integer year){
        return carService.getCarsByYear(year);
    }

    //Retrieve cars by a specific engineType
    @GetMapping("/engineType")
    public List<Cars> getCarsByEngineType(@RequestParam(required = false) String engineType){
        return carService.getCarsByEngineType(engineType);
    }

    //Get a single car by ID (handles Get requests)
    @GetMapping({"{id}"})
    public Cars getCarById(@PathVariable Long id) {
        return carService.getCarById(id);
    }



    //Add a new car  (handles Post Requests)
    @PostMapping
    public ResponseEntity<Cars> addCar(@RequestBody Cars car){
        Cars createdCar = carService.addCar(car);
        return new ResponseEntity<>(createdCar, HttpStatus.CREATED);
    }

    //Updates an existing car (handles Put Requests)
    @PutMapping("{id}")
    public ResponseEntity<Cars> updateCar(@PathVariable Long id, @RequestBody Cars car){
        Cars updatedCar = carService.updateCar(id, car);
        if (updatedCar != null) {
            return new ResponseEntity<>(updatedCar, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    //Deletes a car  (handles Delete Requests)
    @DeleteMapping(path = "/delete/{id}")
    public ResponseEntity<String> deleteCar(@PathVariable Long id){
        carService.deleteCar(id);
        return new ResponseEntity<>("Car deleted successfully", HttpStatus.OK);
    }
}
