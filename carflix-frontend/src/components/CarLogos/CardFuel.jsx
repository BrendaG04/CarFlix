import {Link} from "react-router-dom";
import './Card.css';


/**Card Functionality (Fuel Logos) * For Fuel Page*/

function CardFuel({fuel}){

    return (
        <>
            <Link to={`/fuel/${fuel.name}`} className="card-link">
                <div className="card">
                    <img className='cardImg' src={fuel.logo} alt={`${fuel.name} Logo`} ></img>
                </div>
            </Link>
        </>
    );

}

export default CardFuel;