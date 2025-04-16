import React, {useState} from "react";
import { signup } from "../../services/CarServices";
import { useNavigate } from "react-router-dom";
import '../MakesPage/CarMakes.css'

function Signup() {

  //States for user's information
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();


  //form submission handler
  const handleSubmit = async (e) => {
    e.preventDefault();
    //sets loading true while waiting for the response
    setLoading(true);
    //clears any errors
    setError("");

    const signupData = { firstName, lastName, email, password };

    try {
      await signup(signupData);
      //direct to login page
      navigate("/login");

    } catch (err) {
      //will handle errors
      setError("Signup Failed, Try again!");
      //stops loading if there is an error
      setLoading(false);
    }
  };

  return (
    <div className="registrationContainer">
      <h1 className="text-center mb-4">Sign Up To Save Your Favorite Cars</h1>
      {error && <p style={{ color: "#ff0000", fontWeight:"bold" }}>{error}</p>}

      <form onSubmit={handleSubmit}>
        <div className="mb-3" >
          <label className="form-label">First Name</label> <br/>
          <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} required></input>
        </div>

        <div className="mb-3">
          <label className="form-label">Last Name</label> <br/>
          <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} required></input>
        </div>

        <div className="mb-3">
          <label className="form-label">Email</label> <br/>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required></input>
        </div>

        <div className="mb-3">
          <label className="form-label">Password</label> <br/>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required></input>
        </div>

        <button type="submit" disabled={loading} className="btn btn-primary w-10" >
          {loading ? "Signing up..." : "Sign Up"}
        </button>

        <p className="mt-4 text-center">
          Already have an account? <a href="/login">Log In</a>
        </p>

      </form>
    </div>
  );
}
export default Signup;