import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom/dist";

const Edit = () => {
  const [id, setId] = useState(0);
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");
  let [loading, setLoading] = useState(false);
  let [display, setDisplay] = useState("block");

  // const [nameError, setNameError] = useState(false);

  // validation start

  // valdation end

  const navigate = useNavigate();

  useEffect(() => {
    setId(localStorage.getItem("id"));
    setName(localStorage.getItem("name"));
    setAge(localStorage.getItem("age"));
    setEmail(localStorage.getItem("email"));
  }, []);

  const handleUpdate = (e) => {
    e.preventDefault();
    setLoading(true);
    setDisplay("none");

    axios
      .put(`https://6423e0b147401740432db676.mockapi.io/crud/${id}`, {
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
      <div style={{ display: display }} className="container fluid mt-5 ">
        <div className="row mt-5 d-flex justify-content-center">
          <div className="col-md-4 shadow p-3 mb-5 bg-body-tertiary rounded">
            {/* <div className="mb-2 mt-2">
            <Link to="/Read">
              <button className="btn btn-primary">Read Data</button>
            </Link>
          </div> */}

            <div className="bg-primary rounded p-4 text-center text-light ">
              <h1>Update Data</h1>
            </div>
            <form onSubmit={handleUpdate}>
              <div className="form-group">
                <label>Enter Name: </label>
                <input
                  type="text"
                  // onChange={handleName}
                  value={name}
                  required
                  onChange={(e) => setName(e.target.value)}
                  placeholder="name"
                  className="form-control"
                />
              </div>
              <div className="form-group">
                <label>Enter Age: </label>
                <input
                  type="number"
                  // onChange={handleAge}
                  value={age}
                  onChange={(e) => setAge(e.target.value)}
                  placeholder="Age"
                  className="form-control"
                />
              </div>
              <div className="form-group">
                <label>Enter email: </label>
                <input
                  type="emal"
                  // onChange={handleEmail}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="email"
                  className="form-control"
                />
              </div>
              <br />
              <div className="d-grid">
                <input
                  type="submit"
                  value="Update"
                  className="btn btn-primary"
                />
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

export default Edit;
