import React, {useState, useEffect} from 'react';
import { getFavoriteCars, deleteFavoriteCar } from '../../services/CarServices';


function Favorites() {
  const [favorites, setFavorites] = useState([]);
  const [error, setError] = useState("");


  //fetches the favorite cars from the API
  useEffect(() => {
    const fetchFavorites = async () => {
      try {
        const token = localStorage.getItem('authToken');
        if (!token) {
          setError("Please log in to view your favorite cars.");
          return;
        }
        setError("");
        //requests the favorite cars from the API
        const response = await getFavoriteCars();
        setFavorites(response.data);
        setError("");
      } catch (err) {
        setError("Failed to fetch favorite cars. Please try again.");
      }
    };
    fetchFavorites();
  }, []);




  //removes a car from the favorites
  const handleDeleteFavorite = async (carId) => {
    //checks again if the user is logged in
    const token = localStorage.getItem('authToken');
    if (!token) {
      setError("Please log in to remove favorite cars.");
      return;
    }
    setError("");
    try {
      //removes the car from the favorites
      await deleteFavoriteCar(carId, token);
      setFavorites(favorites.filter((car) => car !== carId));
      window.location.reload();
    } catch(err){
      //handles the error
      setError("Failed to remove favorite car. Please try again.");
    }
  };

  //Handles LogOut
  const handleLogout = () => {
    localStorage.removeItem('authToken');
    window.location.reload();
  };



  return (
    <>
    <div>
      <h1 className="CarMakeInfo-Title">Favorites</h1>
      {error && <p style={{ color: "#ff0000", fontWeight:"bold" }}>{error}</p>}
    </div>

    <button onClick={handleLogout} className="btn btn-danger"style={{ width: "85px", padding: "5px", marginRight:"10px", marginBottom:"5px" }} >
      Log Out 
    </button>

    <button onClick={() => {window.location.href = "/login";}} className="btn btn-primary" style={{ width: "85px", padding: "5px 0", marginRight:"10px", marginBottom:"5px" }} >
        Log In
    </button>

      <table className="table table-striped table-bordered">
        <thead>
            <tr>
              <th>Make</th>
                <th>Model</th>
                <th>Year</th>
                <th>Engine Type</th>
                <th>Seats</th>
                <th>Price</th>
                <th>Delete</th>
            </tr>
        </thead>

        <tbody>
            {favorites.map((car) =>(
                <tr key={car.id}>
                  <td>{car.make}</td>
                  <td>{car.model}</td>
                  <td>{car.year}</td>
                  <td>{car.enginetype}</td>
                  <td>{car.seats}</td>
                  <td>{car.price}</td>
                  <td>  
                      <span
                        style={{ cursor: 'pointer', fontSize: "20px", textAlign: "center"}}
                              onClick={() => {
                                const token = localStorage.getItem("authToken");
                                if (!token) {
                                  navigate("/login");
                                } else {
                                  handleDeleteFavorite(car.id);
                                }
                         }}
                      >
                        🗑️
                      </span>
                  </td>
                </tr>
            ))}
        </tbody>
      </table>
    </>
  );
}

export default Favorites;