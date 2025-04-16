import {useParams, useNavigate} from 'react-router-dom';
import { carMakes } from '../../services/CarServices';
import React, {useState, useEffect} from 'react';
import { addFavoriteCar } from '../../services/CarServices';


import './CarMakes.css';

/**Displays Data from the specifiec make */
function CarMakeInfo(){

    const {makeName} = useParams();
    const [filteredCars, setFilteredCars] = useState([]);
    const [sortOrder, setSortOrder] = useState('asc');
    const [favorites, setFavorites] = useState([]);
    const [error, setError] = useState("");
    const navigate = useNavigate();


    useEffect(() => {
        carMakes()
            .then((response) => {
                const filtered = response.data.filter( car => 
                    car.make.toLowerCase() === makeName.toLowerCase()
                );
                setFilteredCars(filtered);
        })
        .catch((error) => {
            console.error(error);
        });


    }, [makeName]);


    const sortByPrice = () => {
        const sorted = [...filteredCars].sort((a,b) => {
            return sortOrder === 'asc' ? a.price - b.price : b.price - a.price;
        });
        setFilteredCars(sorted);
        setSortOrder(prev => prev === 'asc' ? 'desc' : 'asc');
    }


    //adds a car to the favorites
    const handleAddFavorite = async (cardId) => {
        //checks if the user is logged in
        const token = localStorage.getItem('authToken');
        if (!token) {
            setError("Please log in to add favorite cars.");
            return;
        }

        setError("");
        try {
            //checks if the car is already in the favorites
            if(!favorites.includes(cardId)){
                //adds the car to the favorites
                await addFavoriteCar(cardId, token);
                setFavorites([...favorites, cardId]);
            }
        } catch(err){
            //handles the error
            setError("Failed to add favorite car. Please try again.");
        };
    };

    return(
        <>
            <div>
                <h1 className='CarMakeInfo-Title'>{makeName} Cars</h1>
                <p> </p>
            </div>

            <table className="table table-striped table-bordered">
                <thead>
                    <tr>
                        <th>Make</th>
                        <th>Model</th>
                        <th>Year</th>
                        <th>Engine Type</th>
                        <th>Seats</th>
                        <th onClick={sortByPrice} style={{cursor: 'pointer'}}>Price  {sortOrder == 'asc' ? '⬆️' : '⬇️'} </th>
                        <th>Save</th>
                    </tr>
                </thead>

                <tbody>
                    {filteredCars.map((car) => (
                            <tr key={car.id}>
                                <td>{car.make}</td>
                                <td>{car.model}</td >
                                <td>{car.year}</td>
                                <td>{car.enginetype}</td>
                                <td>{car.seats}</td>
                                <td>{car.price}</td>

                                <td>  
                                    <span
                                        style={{ cursor: 'pointer', fontSize: "20px", textAlign: "center", color: favorites.includes(car.id) ? 'red' : 'gray' 
                                        }}
                                        onClick={() => {
                                            const token = localStorage.getItem("authToken");
                                            if (!token) {

                                                navigate("/login");
                                            } else {
                                                handleAddFavorite(car.id);
                                            }
                                        }}
                                     >
                                        {favorites.includes(car.id) ? '💛' : '🤍'}
                                    </span>
                                </td>
                            </tr>
                    ))}
                </tbody>

            </table>
        </>
    );
}

export default CarMakeInfo;