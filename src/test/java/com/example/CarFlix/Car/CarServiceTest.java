package com.example.CarFlix.Car;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;

import java.util.Arrays;
import java.util.List;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

class CarServiceTest {

    @Mock
    private CarRepository carRepository;

    @InjectMocks
    private CarService carService;

    @BeforeEach
    void setUp() {
        MockitoAnnotations.openMocks(this);
    }

    @Test
    void testGetCarsByMake() {
        // Mock car data (fake, no real DB)
        Cars car1 = new Cars(2L, "Toyota", "Camry", 2024,25000.00,"Hybrid",4);
        Cars car2 = new Cars(5L, "Toyota", "Corolla", 2025, 2200.00, "Gas", 5);
        Cars car3 = new Cars(3L, "Ford", "Focus", 2025, 21000.00, "Gas", 5);
        List<Cars> mockCars = Arrays.asList(car1, car2, car3);

        // When the findAll() method of carRepo is called, return the mockCars list instead of accessing the real DB
        when(carRepository.findAll()).thenReturn(mockCars);

        // Call the method we are testing
        List<Cars> result = carService.getCarsByMake("Toyota");

        // Check results
        assertEquals(2, result.size());
        assertTrue(result.stream().allMatch(c -> c.getMake().equalsIgnoreCase("Toyota")));

        // Verify that findAll() was called once
        verify(carRepository, times(1)).findAll();
    }


    @Test
    void testGetCarsByEngineType() {
        Cars carOne = new Cars(2L, "Toyota", "Camry", 2024,25000.00,"Hybrid",4);
        Cars carTwo = new Cars(5L, "Toyota", "Corolla", 2025, 2200.00, "Gasoline", 5);
        Cars carThree = new Cars(3L, "Ford", "Focus", 2025, 21000.00, "Gasoline", 5);
        List<Cars> mockCars = Arrays.asList(carOne, carTwo, carThree);

        when(carRepository.findAll()).thenReturn(mockCars);
        //call the method that is being tested
        List<Cars> result = carService.getCarsByEngineType("Gasoline");
        assertEquals(2, result.size());
        assertTrue(result.stream().allMatch((c -> c.getEnginetype().equalsIgnoreCase("Gasoline"))));
    }

    @Test
    void getCarsByYear() {
        Cars carUno = new Cars(2L, "Toyota", "Camry", 2024,25000.00,"Hybrid",4);
        Cars carDos = new Cars(5L, "Toyota", "Corolla", 2024, 2200.00, "Gasoline", 5);
        Cars carTres = new Cars(3L, "Ford", "Focus", 2025, 21000.00, "Gasoline", 5);
        List<Cars> mockCars = Arrays.asList(carUno, carDos, carTres);

        when(carRepository.findAll()).thenReturn(mockCars);

        List<Cars> result = carService.getCarsByYear(2024);
        assertEquals(2, result.size());
        assertTrue(result.stream().allMatch((c -> c.getYear() == 2024)));
    }

    @Test
    void getCarById() {
        Cars car4 = new Cars(2L, "Toyota", "Camry", 2024,25000.00,"Hybrid",4);
        Cars car6 = new Cars(3L, "Ford", "Focus", 2025, 21000.00, "Gas", 5);
        Cars car5 = new Cars(5L, "Toyota", "Corolla", 2025, 2200.00, "Gas", 5);
        List<Cars> mockCars = Arrays.asList(car4, car5, car6);

        when(carRepository.findById(2L)).thenReturn(Optional.of(car4));

        Cars result = carService.getCarById(2L);
        assertEquals(2L,result.getId());
    }

    @Test
    void testGetAllCars() {
        Cars carUno = new Cars(2L, "Toyota", "Camry", 2024,25000.00,"Hybrid",4);
        Cars carDos = new Cars(5L, "Toyota", "Corolla", 2024, 2200.00, "Gasoline", 5);
        Cars carTres = new Cars(3L, "Ford", "Focus", 2025, 21000.00, "Gasoline", 5);
        List<Cars> mockCars = Arrays.asList(carUno, carDos, carTres);

        when(carRepository.findAll()).thenReturn(mockCars);

        List<Cars> result = carService.getAllCars();
        assertEquals(3, result.size());
    }
}