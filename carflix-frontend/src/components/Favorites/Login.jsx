import React, {useState} from "react";
import { login } from "../../services/CarServices";
import { useNavigate } from "react-router-dom";
import '../MakesPage/CarMakes.css'

function Login() {

  //States for email, password and error message
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

    try {
      //calls login function from CarServices file
      const response = await login({ email, password });
      //saves the token in local storage
      const token = response.data.token;
      //sets the token in local storage
      localStorage.setItem("authToken", token);

      //direct to favorties pages
      navigate("/favorites");

    } catch (err) {
      //will handle errors
      setError("Invalid email or password");
      //stops loading if there is an error
      setLoading(false);
    }
  };

  return (
    <>
      <div className="registrationContainer">
          <h1 className="text-center mb-5">Log In</h1>
          {error && <p style={{ color: "#ff0000", fontWeight:"bold" }}>{error}</p>}

          <form onSubmit={handleSubmit}>
            <div className="mb-3" >
              <label className="form-label">Email</label> <br/>
              <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required></input>
            </div>

            <div className="mb-3">
              <label className="form-label">Password</label> <br/>
              <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required></input>
            </div>

            <button type="submit" disabled={loading} className="btn btn-primary w-10" >
              {loading ? "Loggin in..." : "Log In"}
            </button>

            <p className="mt-4 text-center"> 
              Don't have an account? <a href="/signup">Sign Up</a>
            </p>

          </form>
      </div>
    </>

  );
}

export default Login;