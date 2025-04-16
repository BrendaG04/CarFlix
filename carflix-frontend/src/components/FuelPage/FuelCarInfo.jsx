import React, {useState, useEffect} from "react";
import { useParams } from 'react-router-dom';
import { carMakes } from "../../services/CarServices";
import '../MakesPage/CarMakes.css'

function FuelCarInfo(){

    const {fuelCar} = useParams();

    const [filteredFuels, setFilteredFuels] = useState([]);
    const [sortOrder, setSortOrder] = useState('asc');

    useEffect(()=> {
        carMakes()
            .then((response) => {
                const filteredFuel = response.data.filter(car =>
                    car.enginetype.toLowerCase() === fuelCar.toLowerCase()
                );
                setFilteredFuels(filteredFuel);
            })
            .catch((error) => {
                console.error(error);
            }); 
    }, [fuelCar]);


    const sortByPrice = () => {
        const sorted = [...filteredFuels].sort((a,b) => {
            return sortOrder === 'asc' 
                ? a.price - b.price 
                : b.price - a.price;
        });
        setFilteredFuels(sorted);
        setSortOrder(prev => prev === 'asc' ? 'desc' : 'asc');
    }

    return (
        <>
            <div>
                <h1 className = "CarMakeInfo-Title">{fuelCar} Cars</h1>
                <p></p>
            </div>
        
            <table className="table table-striped table-bordered">
                <thead>
                        <tr>
                            <th>Make</th>
                            <th>Model</th>
                            <th>Year</th>
                            <th>Engine Type</th>
                            <th>Seats</th>
                            <th onClick={sortByPrice} style={{cursor: 'pointer'}}>Price {sortOrder == 'asc' ? '⬆️' : '⬇️'} </th>
                        </tr>
                    </thead>


                    <tbody>
                        {filteredFuels.map((car)=>(
                            <tr key={car.id}>
                                <td>{car.make}</td>
                                <td>{car.model}</td>
                                <td>{car.year}</td>
                                <td>{car.enginetype}</td>
                                <td>{car.seats}</td>
                                <td>{car.price}</td>
                            </tr>
                        ))}
                    </tbody>
            </table>

        </>
    );



}

export default FuelCarInfo;