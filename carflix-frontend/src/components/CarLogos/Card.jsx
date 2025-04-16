import {Link} from 'react-router-dom';
import './Card.css';


/**Card Functionality (Make Logo and Make Name) * For Car Makes Page */

function Card ({make}){

    return (
        
        //Navigate to the specific make page when clicked
        <Link to={`/makes/${make.name}`} className='card-link'>
            <div className="card" >
                <img className="cardImg" src={make.logo} alt={`${make.name} Logo`}></img>
                <p className="hover-text">{make.name}</p> 
            </div>
        </Link>
    );
}

export default Card;