import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ReadTable = () => {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const itemsPerPage = 5;
  const [value, setValue] = useState(0);

  useEffect(() => {
    fetch("https://6423e0b147401740432db676.mockapi.io/crud")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch data from API");
        }
        return response.json();
      })
      .then((data) => {
        const totalItems = data.length;
        setData(data);
        setTotalPages(Math.ceil(totalItems / itemsPerPage));
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const setDataToStorage = (id, name, age, email) => {
    localStorage.setItem("id", id);
    localStorage.setItem("name", name);
    localStorage.setItem("age", age);
    localStorage.setItem("email", email);
  };

  const handleDelete = (id) => {
    axios
      .delete(`https://6423e0b147401740432db676.mockapi.io/crud/${id}`)
      .then(() => {});
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = (pageNumber) => {
    if (pageNumber === totalPages) {
      toast.info("This is Last Page", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    } else if (pageNumber === 1) {
      toast.info("This is First Page", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    }
    setCurrentPage(pageNumber);
  };

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <>
      <Box sx={{ maxWidth: { xs: 320, sm: 480 }, bgcolor: "background.paper" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons="auto"
          aria-label="scrollable auto tabs example"
        >
          <Tab label="Item One" />
          <Tab label="Item Two" />
          <Tab label="Item Three" />
          <Tab label="Item Four" />
        </Tabs>
      </Box>

      <div className="container-fluid">
        <div className="row">
          <div className="col-md-6"></div>
        </div>
      </div>

      <div>
        <table className=" table table-bordered table-hover  shadow text-center  mt-4 ">
          <thead>
            <tr>
              {/* <th>ID</th> */}
              <th>NAME</th>
              <th>AGE</th>
              <th>Email</th>
              <th>EDIT</th>
              <th>DELETE</th>
            </tr>
          </thead>
          <tbody>
            {/* {currentItems.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.phone}</td>
              </tr>
            ))} */}
            {currentItems.map((item, index) => {
              return (
                <>
                  {/* {next.start <= index && next.end >
                       index && ( */}
                  <tr>
                    {/* <td>{item.id}</td> */}
                    <td>{item.e_name}</td>
                    <td>{item.e_age}</td>
                    <td>{item.e_email}</td>
                    <td>
                      <Link to="/edit">
                        <button
                          className="btn btn-primary ml"
                          onClick={() =>
                            setDataToStorage(
                              item.id,
                              item.e_name,
                              item.e_age,
                              item.e_email
                            )
                          }
                        >
                          <svg
                            width="15"
                            height="15"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            class="feather feather-edit-2 link-icon"
                          >
                            <g>
                              <path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path>
                            </g>
                          </svg>
                        </button>
                      </Link>
                    </td>
                    <td>
                      <button
                        className="btn btn-danger"
                        onClick={() => {
                          if (
                            window.confirm("Are You Sure To Delete Data..??")
                          ) {
                            handleDelete(item.id);
                          } else window.confirm("Okay..");
                        }}
                      >
                        <svg
                          width="15"
                          height="15"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          class="feather feather-trash link-icon"
                        >
                          <g>
                            <polyline points="3 6 5 6 21 6"></polyline>
                            <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                          </g>
                        </svg>
                      </button>
                    </td>
                  </tr>
                </>
              );
            })}
          </tbody>
        </table>
        <div className="float-end">
          <button
            className="btn btn-primary m-2 text-white"
            disabled={currentPage === 1}
            onClick={() => handlePageChange(currentPage - 1)}
          >
            « Prev
          </button>

          {Array.from({ length: totalPages }, (_, index) => index + 1).map(
            (pageNumber) => (
              <button
                key={pageNumber}
                onClick={() => handlePageChange(pageNumber)}
                disabled={currentPage === pageNumber}
              >
                {pageNumber}
              </button>
            )
          )}
          <button
            className="btn btn-primary m-2  text-white"
            disabled={currentPage === totalPages}
            onClick={() => handlePageChange(currentPage + 1)}
          >
            next »
          </button>
          <ToastContainer />
        </div>
      </div>
    </>
  );
};

export default ReadTable;
