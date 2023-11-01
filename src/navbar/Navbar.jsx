import React from "react";
import { Link } from "react-router-dom";
import p2 from '../assets/images/p2.png'
import crud from '../assets/images/crud.png'

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-md shadow bg-white">
        <div className="container-fluid sticky-top">
          <div className="logo-1">
            <img src={crud} alt="" />
          </div>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link ms-2 " to="/">
                  Login
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link " to="/Create">
                  Create data
                </Link>
              </li>
            </ul>
            <span className="logo">
              <img
                className="wd-80 ht-80 rounded-circle"
                height={50}
                src={p2}
                alt="New Img"
              />
            </span>
          </div>
        </div>
      </nav>
      
    </>
  );
};

export default Navbar;
