import React from "react";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom/dist";

const Create = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");
  const [nameError, setNameError] = useState(false);
  const [ageError, setAgeError] = useState(false);
  const [emailError, setEmailError] = useState();
  const [loading, setLoading] = useState(false);
  const [display, setDisplay] = useState("block");

  const regexx = /^[a-zA-Z\s]*$/;
  const re = /^[0-9\b]*$/;
  const ree = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const handleName = (e) => {
    setName(e.target.value);
    let name = e.target.value;
    if (regexx.test(name)) {
      setNameError(true);
    } else {
      setNameError(false);
    }
    setName(name);
  };

  const handleAge = (e) => {
    setAge(e.target.value);
    let age = e.target.value;
    if (re.test(age)) {
      setAgeError(true);
    } else {
      setAgeError(false);
    }
    setAge(age);
  };
  const handleemail = (e) => {
    setEmail(e.target.value);
    let email = e.target.value;
    if (ree.test(email)) {
      setEmailError(true);
    } else {
      setEmailError(false);
    }
    setEmail(email);
  };

  const navigate = useNavigate();

  const handlesubmit = (e) => {
    e.preventDefault();
    // alert(e.target[0].value + "" + e.target[1].value + "" + e.target[2].value);
    setLoading(true);
    setDisplay("none");
    let name = e.target[0].value;
    if (name === "") {
      setNameError(true);
      return;
    } else {
      setNameError(false);
    }
    let age = e.target[1].value;
    if (age === "") {
      setAgeError(true);
    } else {
      setAgeError(false);
    }
    let email = e.target[2].value;
    if (!email.match(ree)) {
      setEmailError(true);
    } else {
      setEmailError(false);
    }

    axios
      .post("https://6423e0b147401740432db676.mockapi.io/crud", {
        e_name: name,
        e_age: age,
        e_email: email,
      })
      .then(() => {
        navigate("/ReadTable");
      });
  };

  return (
    <>
      <div style={{ display: display }} className="container fluid">
        <div className="row mt-5 d-flex justify-content-center">
          <div className="col-md-4 shadow-lg p-3 mb-5 bg-body-tertiary rounded">
            {/* <div className="mb-2 mt-2">
              <Link to="/Read">
                <button className="btn btn-primary">List</button>
              </Link>
            </div> */}
            <div className="bg-primary rounded p-4 text-center text-light ">
              <h1>Create Data</h1>
            </div>
            <form onSubmit={handlesubmit}>
              <div className="form-group">
                <label>Enter Name: </label>
                <input
                  type="text"
                  onChange={handleName}
       
                  value={name}
                  placeholder="Enter Your Name"
                  className="form-control"
                  style={{ borderColor: nameError ? "grey" : "red" }} // Set border color based on validation result
                  // onChange={(e) => setName(e.target.value)}
                />
                {nameError ? null : (
                  <p style={{ color: "red" }}>Please enter only letters.</p>
                )}
              </div>
              <div className="form-group">
                <label>Enter Age: </label>
                <input
                  type="text"
                  min="0"
                  onChange={handleAge}
                  required
                  value={age}
                  placeholder="Enter Your Age"
                  className="form-control"
                  style={{ borderColor: ageError ? "grey" : "red" }} // Set border color based on validation result
                  // onChange={(e) => setAge(e.target.value)}
                />
                {ageError ? null : (
                  <p style={{ color: "red" }}>Please enter only number.</p>
                )}
              </div>
              <div className="form-group">
                <label>Enter email: </label>
                <input
                  type="email"
                  value={email}
                  required
                  onChange={handleemail}
                  placeholder="Enter Your Email"
                  className="form-control"
                  style={{ borderColor: emailError ? "grey" : "red" }} // Set border color based on validation result
                  // onChange={(e) => setEmail(e.target.value)}
                />
                {emailError ? null : (
                  <p style={{ color: "red" }}>Please enter only email.</p>
                )}
              </div>

              <div className="d-grid">
                <button className="btn btn-primary ">Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
      {loading ? (
        <div
          style={{ marginTop: 250 }}
          className="d-flex justify-content-center"
        >
          <div className=" spinner-border" role="status">
            <span className="sr-only">Loading...</span>
            
          </div>
        </div>
        
      ) : undefined}
    </>
  );
};

export default Create;
