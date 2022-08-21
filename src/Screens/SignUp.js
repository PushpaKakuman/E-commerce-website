import React from "react";
import { TextField, Button } from '@material-ui/core';
import './commonCSS.css';
import './loginCSS.css';
import './Title.js';
import { Link } from "react-router-dom";
import { useState } from "react";


function SignUpScreen() {
  const [details, setDetails] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    phoneNumber: "",
    confirmPassword: "",
  });

  const [errorType, setErrorType] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleCorrect = () => {
    
    if (details.firstName === "") {
      setErrorType("firstName")
      setErrorMessage("This Field is Requried")
    } else if (details.lastName === "") {
      setErrorType("lastName")
      setErrorMessage("This Field is Requried")
    } else if (details.email === "") {
      setErrorType("email")
      setErrorMessage("This Field is Requried")
    } else if (details.phoneNumber === "") {
      setErrorType("phoneNumber")
      setErrorMessage("This Field is Requried")
    } else if (details.password === "") {
      setErrorType("password")
      setErrorMessage("This Field is Requried")
    } else if (details.password !== details.confirmPassword) {
      setErrorType("confirmPassword")
      setErrorMessage("Confirm password missmatch")
    }
  };



  const handleChange = (target) => {
    setDetails({
      ...details,
      [target.name]: target.value
    }) 
    if (target.name === errorType){
      setErrorType("")
      setErrorMessage("")
    }
  };



  return (
    <div className="small-container" >
      <h2>Sign Up</h2>

      <TextField
        variant="outlined"
        label="First Name"
        margin="normal"
        error={errorType === "firstName"}
        helperText={errorType === "firstName" ? errorMessage : ""}
        size="small"
        name="firstName"
        value={details.firstName}
        onChange={(e) => handleChange(e.target)}
      />

      <TextField
        variant="outlined"
        label="Last name"
        size="small"
        margin="normal"
        error={errorType === "lastName"}
        helperText={errorType === "lastName" ? errorMessage : ""}
        name="lastName"
        value={details.lastName}
        onChange={(e) => handleChange(e.target)}
      />
      <TextField
        type="Email"
        variant="outlined"
        label="Email Id"
        size="small"
        margin="normal"
        error={errorType === "email"}
        helperText={errorType === "email" ? errorMessage : ""}
        name="email"
        value={details.email}
        onChange={(e) => handleChange(e.target)}
      />
      <TextField
        variant="outlined"
        label="Enter Mobile Number"
        size="small"
        margin="normal"
        name="phoneNumber"
        error={errorType === "phoneNumber"}
        helperText={errorType === "phoneNumber" ? errorMessage : ""}
        value={details.phoneNumber}
        onChange={(e) => handleChange(e.target)}
      />
      <TextField
        type="Password"
        variant="outlined"
        label="Password"
        size="small"
        margin="normal"
        error={errorType === "password"}
        helperText={errorType === "password" ? errorMessage : ""}
        name="password"
        value={details.password}
        onChange={(e) => handleChange(e.target)}
      />
      <TextField
        type="Password"
        variant="outlined"
        label="Confirm Password"
        size="small"
        margin="normal"
        name = "confirmPassword"
        error={errorType === "confirmPassword"}
        helperText={errorType === "confirmPassword" ? errorMessage : ""}
        value={details.confirmPassword}
        onChange={(e) => handleChange(e.target)}
      />


      <nav className="forget-password">
        Already Have Account <Link to="/"> Click Here</Link>
      </nav>

      <div className="button">
        <Button size="small" color="primary" variant="contained" onClick={handleCorrect}>
          Create Account
        </Button>
      </div>
    </div>
  );
}


export default SignUpScreen;