# 🏎️ CarFlix  

CarFlix is a full-stack web application that allows users to explore  over **1,000 popular car makes and models** from **2024 & 2025**, and save their favorite vehicles. The catalog provides details such as **engine type, seating capacity, and estimated price**.  


(only front end is deployed for now https://carflixbg.netlify.app)
https://brenwareportfolio.netlify.app/projects


## 📌 Features  

- ✅ Browse car makes and models with filters.  
- ✅ View details: **engine type, seating capacity, and price**
- ✅ User signup/login with **JWT Authentication**
- ✅ Save and manage favorite cars
- ✅ **PostgreSQL** database integration  
- ✅ CSV import for **bulk data entry** via[NHTSA](https://www.nhtsa.gov)) 


## 🚀 Tech Stack  

- **Backend:** Java, Spring Boot, Hibernate
- **Frontend:** Javascript, HTML, CSS, ReactJs
- **Authorization** JWT (Json Web Token)
- **Database:** PostgreSQL  
- **Version Control:** Git, GitHub  
- **Tools:** Excel (CSV Modification)  

## 📂 API Endpoints  

| Method | Endpoint           | Description              |
|--------|-------------------|--------------------------|
| **GET**    | `/makes`       | Get all cars              |
| **POST**   | `/api/cars`       | Add a new car             |
| **PUT**    | `/api/cars/{id}`  | Update car details        |
| **DELETE** | `/api/cars/delete/{id}`  | Delete a car              |
| **POST** | `/api/v1/auth/register`  | Signup             |
| **POST** | `/api/v1/auth/authenticate`  | Login             |
| **POST** | `/api/v1/favorites/add/{carId}`  | Add to favorites         |
| **DELETE** | `/api/v1/favorites/delete/{cardId}`  |Delete from fav |
| **GET** | `/api/v1/favorites`  | Get All Favorites |





## 💡 Future Enhancements  

- 📊 Add **data visualization** for price trends
- **Deploy** 

---
