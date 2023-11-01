// import React, { useEffect, useState} from "react";
// import axios from "axios";
// import { Link } from "react-router-dom";
// // import { toast } from "react-toastify";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css"; 

// const Read = () => {

//   const [apiData, setApiData] = useState([1]);

//   const [next, setNext] = useState({ start: 0, end: 5 });
  


//   console.log(next)

//   const getData = () => {
//     axios
//       .get("https://6423e0b147401740432db676.mockapi.io/crud")
//       .then((response) => {
//         setApiData(response.data);  
//       });
//   };

 
//   const handleDelete = (id) => {
//     axios
//       .delete(`https://6423e0b147401740432db676.mockapi.io/crud/${id}`)
//       .then(() => {
//         getData();
//       });
//   };



//   const setDataToStorage = (id, name, age, email) => {
//     localStorage.setItem("id", id);
//     localStorage.setItem("name", name);
//     localStorage.setItem("age", age);
//     localStorage.setItem("email", email);
//   };
//   useEffect(() => {
//     getData();
//   }, []);

// const notify = () => {

// }


  
//   return (
//     <>
//       <div className="container-fluid mt-2 ">
//         <div className="row ">
//           <div className="col-sm-12 col-md-12 col-lg-12 ">
//             {/* <div className="mb-2 mt-2">
//             <Link to="/create">
//               <button className="btn btn-primary">Create New Data</button>
//             </Link>
//           </div> */}

//             <table className=" table table-bordered table-hover shadow text-center  mt-4 overflow-x-scroll">
//               <thead>
//                 <tr>
//                   <th>ID</th>
//                   <th>NAME</th>
//                   <th>AGE</th>
//                   <th>email</th>
//                   <th>EDIT</th>
//                   <th>DELETE</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {apiData.map((item, index) => {
//                   return (
//                     <>
//                       {next.start <= index && next.end >
//                        index && (
//                         <tr>
//                           <td>{item.id}</td>
//                           <td>{item.e_name}</td>
//                           <td>{item.e_age}</td>
//                           <td>{item.e_email}</td>
//                           <td>
//                             <Link to="/edit">
//                               <button
//                                 className="btn btn-primary"
//                                 onClick={() =>
//                                   setDataToStorage(
//                                     item.id,
//                                     item.e_name,
//                                     item.e_age,
//                                     item.e_email
//                                   )
//                                 }
//                               >
//                                 <i className="fa-solid fa-pen-to-square"></i>
//                               </button>
//                             </Link>
//                           </td>
//                           <td>
//                             <button
//                               className="btn btn-danger"
//                               onClick={() => {
//                                 if (
//                                   window.confirm(
//                                     "Are You Sure To Delete Data..??"
//                                   )
//                                 ) {
//                                   handleDelete(item.id);
//                                 } else window.confirm("Okay..");
//                               }}
//                             >
//                               <i className="fa-solid fa-trash"></i>
//                             </button>
//                           </td>
//                         </tr>
//                       )}
//                     </>
//                   );
//                 })}
//               </tbody>
//             </table>

//             <div className=" d-flex justify-content-between m-3">
//               <div>
//                 <button
//                   className="btn btn-primary"
//                   onClick={(hadlePrev) =>
//                     setNext({
//                       start: next.start - 5,
//                       end: next.end - 5,
//                     })
//                   }
//                 >
//                   « Prev
//                 </button>
//               </div>
//               <div>
//                 <button
//                   onClick={() =>
//                     setNext({ start: next.start + 5, end: next.end + 5 })
//                   }
//                   className="btn btn-primary"
//                 >
//                   next »
//                 </button>

//                 <ToastContainer
//                   position="top-right"
//                   autoClose={5000}
//                   hideProgressBar={false}
//                   newestOnTop={false}
//                   closeOnClick
//                   rtl={false}
//                   pauseOnFocusLoss
//                   draggable
//                   pauseOnHover
//                   theme="light"
//                 />
//                 {/* Same as */}
//                 <ToastContainer />
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Read;
