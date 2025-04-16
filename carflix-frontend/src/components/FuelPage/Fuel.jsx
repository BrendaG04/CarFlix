import '../MakesPage/CarMakes.css'
import CardFuel from '../CarLogos/CardFuel';

function Fuel(){

    const carFuelCards = [
        {name: 'Gasoline', logo: '/logos/gasolinelogo.png'},
        {name: 'Hybrid', logo: '/logos/hybridlogo.png'},
        {name: 'Electric', logo: '/logos/electriclogo.webp'},
    ];
    
    
    return(
        <>
        <h1 className='CarMakeInfo-Title'>Choose Cars By Fuel Type</h1>
            
            <div className='makes-grid2'>
                {carFuelCards.map((fuel, index) =>(
                    <CardFuel key={index} fuel={fuel} />
                ))}
            </div>
        </>
    );
}

export default Fuel;  