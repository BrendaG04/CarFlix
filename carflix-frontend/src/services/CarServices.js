import axios from 'axios';

//Cars Information API URL ~ Spring Boot
const REST_API_URL = 'http://localhost:8080/api/v1/cars';

//Signup(register) / Login(authenticate) Authorization API URL ~ Spring Boot
const REST_API_URL_AUTH = 'http://localhost:8080/api/v1/auth';

//Favorites API URL ~ Spring Boot
const REST_API_URL_FAVORITES = 'http://localhost:8080/api/v1/favorites';


//Car Data Public 
export const carMakes = () => {
    return axios.get(REST_API_URL);
};


//Authentication (Protected)
//saves the token in local storage
const getAuthHeaders = () => ({
    headers: {
        Authorization: `Bearer ${localStorage.getItem('authToken')}`
    },
});

//Auth
export const signup = (signupData) => {
    return axios.post(`${REST_API_URL_AUTH}/register`, signupData);
};
export const login = (loginData) => {
    return axios.post(`${REST_API_URL_AUTH}/authenticate`, loginData);
};

//Favorites
export const addFavoriteCar = (carId) => {
    return axios.post(`${REST_API_URL_FAVORITES}/add/${carId}`, null , getAuthHeaders());
};
export const deleteFavoriteCar = (carId) => {
    return axios.delete(`${REST_API_URL_FAVORITES}/delete/${carId}`, getAuthHeaders());
};
export const getFavoriteCars = () => {
    return axios.get(`${REST_API_URL_FAVORITES}`, getAuthHeaders());
}