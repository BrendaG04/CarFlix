import '../MakesPage/CarMakes.css'
import CardYears from '../CarLogos/CardYears';


function Year() {


    const carYearsCards = [
        { name: '2025', logo: '/logos/2025logo.png' },
        { name: '2024', logo: '/logos/24logo.webp' },
    ];
    
    return (
        <>
        <h1 className='CarMakeInfo-Title'>Choose Cars By a Specific Year</h1>

            <div className="makes-grid2">
                {carYearsCards.map((year, index) => (
                        <CardYears key={index} year={year} />
                ))}
            </div>

        </>

    );
}

export default Year; 