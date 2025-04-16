import './CarMakes.css';
import Card from '../../components/CarLogos/Card.jsx';
import React, {useState} from 'react';

function CarMakes() {


    //Cards for each car make (w logo)
    const carMakesCards = [
        { name: 'Acura', logo: '/logos/acuralogo.png' },
        { name: 'Alfa', logo: '/logos/alfalogo.png' },        
        { name: 'Audi', logo: '/logos/audilogo.png' },
        { name: 'Bentley', logo: '/logos/bentleylogo.png' },
        { name: 'BMW', logo: '/logos/bmwlogo.png' },
        { name: 'BrightDrop', logo: '/logos/brightdroplogo.png' },
        { name: 'Buick', logo: '/logos/buicklogo.png' },
        { name: 'Cadillac', logo: '/logos/cadillaclogo.webp' },
        { name: 'Chevrolet', logo: '/logos/chevroletlogo.webp' },
        { name: 'Chrysler', logo: '/logos/chryslerlogo.png' },
        { name: 'Dodge', logo: '/logos/dodgelogo.png' },
        { name: 'Fiat', logo: '/logos/fiatlogo.png' },
        { name: 'Ford', logo: '/logos/fordlogo.png' },
        { name: 'Genesis', logo: '/logos/genesislogo.png' },
        { name: 'GMC', logo: '/logos/gmclogo.png' },
        { name: 'Honda', logo: '/logos/hondalogo.webp' },
        { name: 'Hyundai', logo: '/logos/hyundailogo.png' },
        { name: 'Infiniti', logo: '/logos/infinitilogo.png' },
        { name: 'Jaguar', logo: '/logos/jaguarlogo.png' },
        { name: 'Jeep', logo: '/logos/jeeplogo.png' },
        { name: 'Kia', logo: '/logos/kialogo.avif' },
        { name: 'Land Rover', logo: '/logos/landroverlogo.png' },
        { name: 'Lexus', logo: '/logos/lexuslogo.avif' },
        { name: 'Lincoln', logo: '/logos/lincolnlogo.png' },
        { name: 'Lucid', logo: '/logos/lucidlogo.png' },
        { name: 'Mazda', logo: '/logos/mazdalogo.png' },
        { name: 'Mercedes-Benz', logo: '/logos/mercedeslogo.png' },        
        { name: 'Mercedes-Maybach', logo: '/logos/maybachlogo.png' },
        { name: 'Mitsubishi', logo: '/logos/mitsubishilogo.png' },        
        { name: 'Mini', logo: '/logos/minilogo.webp' },
        { name: 'Nissan', logo: '/logos/nissanlogo.png' },
        { name: 'Polestar', logo: '/logos/polestarlogo.png' },
        { name: 'Porsche', logo: '/logos/porschelogo.png' },
        { name: 'Ram', logo: '/logos/ramlogo.png' },
        { name: 'Rivian', logo: '/logos/rivianlogo.webp' },        
        { name: 'Rolls-Royce', logo: '/logos/rollsroycelogo.png' },
        { name: 'Subaru', logo: '/logos/subarulogo.png' },
        { name: 'Tesla', logo: '/logos/teslalogo.png' },
        { name: 'Toyota', logo: '/logos/toyotalogo.png' },
        { name: 'Volkswagen', logo: '/logos/volkswagenlogo.png' },
        { name: 'Volvo', logo: '/logos/volvologo.png' },
    ];


    //Search Bar Feauture
    const [searchTerm, setSearchTerm] = useState("");

    return (
        <>
        <div className="CarMakes-container">
            <img className="backgroundcar" src="/public/CarMakesbackground.jpg" alt="Car" />
            <div className='search-bar-container'>
                <input className="search-bar" type='text' placeholder='Search for a car make' value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)}>
                </input>
            </div>
        </div>




            <div className="makes-grid">
                {carMakesCards
                    .filter ((make) => (
                        make.name.toLowerCase().includes(searchTerm.toLowerCase())
                    ))
                    .map((make, index) => (
                        <Card key={index} make={make} />
                    ))
                }
            </div>

        </>
    );
}
export default CarMakes;