import { carMakes } from "../../services/CarServices";
import React, {useState, useEffect} from "react";
import { useParams } from 'react-router-dom';
import '../MakesPage/CarMakes.css'

function YearCarInfo(){

    const {yearCar} = useParams();

    const [filteredYears, setFilteredYears] = useState([]);
    const [sortOrder, setSortOrder] = useState('asc');


    useEffect(() => {
        carMakes()
            .then((response) => {
                const filteredYear = response.data.filter(car => 
                    car.year == yearCar
                );
                setFilteredYears(filteredYear);
            })
            .catch((error) => {
                console.error(error);
            });
    }, [yearCar]);


    const sortByPrice = () => {
        const sorted = [...filteredYears].sort((a,b) => {
            return sortOrder === 'asc' 
                ? a.price - b.price 
                : b.price - a.price;
        });
        setFilteredYears(sorted);
        setSortOrder(prev => prev === 'asc' ? 'desc' : 'asc');
    }

    return (
        <>
            <div>
                <h1 className="CarMakeInfo-Title">{yearCar} Cars</h1>
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
                    {filteredYears.map((car) =>(
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

export default YearCarInfo;