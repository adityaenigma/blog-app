import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import "./App.css";
import Home from "./Pages/Home/Home";
import { Route, Routes } from "react-router-dom";
import Blogs from "./Pages/Blogs/Blogs";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Blogs" element={<Blogs />} />
      </Routes>
    </div>
  );
}

export default App;
