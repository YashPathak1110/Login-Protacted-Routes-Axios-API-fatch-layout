// Login.js
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = () => {
    if (!email.trim()) {
      setError("Please enter an email.");
      return;
    }

    if (!isValidEmail(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    if (!password.trim()) {
      setError("Please enter a password.");
      return;
    }

    if (!isValidPassword(password)) {
      setError("Password must contain at least 8 characters including at least one letter and one number.");
      return;
    }

    const isValidUser = true; // Example: You would perform actual authentication here

    if (isValidUser) {
      // Dispatch action to update Redux store indicating user is authenticated
      dispatch({ type: "login" });
      // Navigate to the home page
      navigate("/");
    } else {
      setError("Invalid email or password.");
    }
  };

  const isValidEmail = (email) => {
    // Basic email format validation using regular expression
    const emailRegex = /^\S+@\S+\.\S+$/;
    return emailRegex.test(email);
  };

  const isValidPassword = (password) => {
    // Password validation: at least 8 characters including at least one letter and one number
    const passwordRegex = /^(?=.*[a-zA-Z])(?=.*\d).{8,}$/;
    return passwordRegex.test(password);
  };


  return (
    <div className="container-flued">
      <div className="wrapper" ><br></br>
        <div style={{ marginTop: "30px", color: "white ", fontSize: "40px" }}>
          <h2 style={{ fontSize: "40px", textShadow: "4px 5px 5px black" }}>Login</h2><br></br>
          {error && <div style={{ fontSize: "23px", color: "red" }}>{error}</div>}
          <div>
            <label style={{ textShadow: "2px 2px 2px black", fontFamily: "sans-serif", fontSize: "25px" }}>Email:</label>
            <input style={{ marginLeft: "5.6rem", height: "30px", width: "220px", fontSize: "22px", border: "2px solid black",backgroundColor: "lightyellow", borderRadius:"7px" }}
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label style={{ textShadow: "2px 2px 2px black", fontFamily: "sans-serif",marginTop:"25px", fontSize: "25px" }}>Password:</label>
            <input style={{ height: "30px", width: "220px", fontSize: "30px", border: "2px solid black",marginLeft: "2.6rem",backgroundColor: "lightyellow", borderRadius:"7px" }}
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <br></br>
          <button type="button" className="btn btn-outline-primary" onClick={handleLogin} style={{ color: "black", height: "50px", width: "105px", fontSize: "22px", textShadow: "2px 2px 2px gray" }}>Login</button>
        </div>
      </div>
    </div>

  );
};

export default Login;
