import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import { Home, About, Login, Register } from "./pages";
// import Files from "./component/files/Files";

const App = () => {
  return (
    <div className="App">
      
      <Routes>
      
        <Route path="/" exact element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
};

export default App;
