package com.example.CarFlix.Car;


import jakarta.persistence.*;

//Entity class - tells Spring Boot that this class represents a database table.

@Entity
@Table(name = "cars")
public class Cars {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String make;
    private String model;
    private Integer year;

    private Double price;
    private String enginetype;
    private Integer seats;

    public Cars() {
    }

    public Cars(Long id, String make, String model, Integer year, Double price, String enginetype, Integer seats) {
        this.id = id;
        this.make = make;
        this.model = model;
        this.year = year;
        this.price = price;
        this.enginetype = enginetype;
        this.seats = seats;
    }

    public Cars(String make, String model, Integer year, Double price, String enginetype, Integer seats) {
        this.make = make;
        this.model = model;
        this.year = year;
        this.price = price;
        this.enginetype = enginetype;
        this.seats = seats;
    }


    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getModel() {
        return model;
    }

    public void setModel(String model) {
        this.model = model;
    }

    public Double getPrice() {
        return price;
    }

    public void setPrice(Double price) {
        this.price = price;
    }

    public Integer getYear() {
        return year;
    }

    public void setYear(Integer year) {
        this.year = year;
    }

    public String getMake() {
        return make;
    }

    public void setMake(String make) {
        this.make = make;
    }

    public String getEnginetype() {
        return enginetype;
    }

    public void setEnginetype(String enginetype) {
        this.enginetype = enginetype;
    }

    public Integer getSeats() {
        return seats;
    }

    public void setSeats(Integer seats) {
        this.seats = seats;
    }

    @Override
    public String toString() {
        return "Car{" +
                "id='" + id + '\''+
                ", make='" + make + '\'' +
                ", model='" + model + '\'' +
                ", year=" + year +
                ", price=" + price +
                ", engineType='" + enginetype + '\'' +
                ", seats='" + seats + '\'' +
                '}';
    }
}
