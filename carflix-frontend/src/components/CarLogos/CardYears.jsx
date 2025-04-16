import {Link} from 'react-router-dom';
import './Card.css';


/**Card Functionality (Year logos) * For Years Page */

function CardYears({year}){

    return(
        <>
        <Link to={`/year/${year.name}`} className='card-link'>
            <div className="card">
                <img className='cardImg' src={year.logo} alt={`${year.name} Logo`} ></img>

            </div>
        </Link>
        </>
    );

}


export default CardYears;