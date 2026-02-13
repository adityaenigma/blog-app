import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import "./App.css";
import Home from "./Pages/Home/Home";
import { HashRouter, Route, Routes } from "react-router-dom";
import Blogs from "./Pages/Blogs/Blogs";
function App() {
  return (
    <div className="app">
      <Navbar></Navbar>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/Blogs" element={<Blogs></Blogs>}></Route>
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
