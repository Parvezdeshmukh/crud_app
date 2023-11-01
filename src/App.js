import "./App.css";
import Create from "./components/Create";
import { Routes, Route } from "react-router-dom";
// import Read from "./components/Read";
import Edit from "./components/Edit";
import Navbar from "./navbar/Navbar";
import Login from "../src/login/Login";
import ReadTable from "./components/ReadTable";
// import Valid from "./components/Valid";
// import HomeFragments from "./fragments/HomeFragments";


function App() {
  return (
    <>
      <Navbar />
      {/* <HomeFragments /> */}
      <div className="container">
        <Routes>
          <Route exact path="/" element={<Login />} />
          {/* <Route exact path="/read" element={<Read />}></Route> */}
          <Route exact path="/Create" element={<Create />}></Route>
          <Route exact path="/edit" element={<Edit />}></Route>
          <Route exact path="/ReadTable" element={<ReadTable />}></Route>
        </Routes>
        {/* <Valid/> */}
      </div>
    </>
  );
}

export default App;
