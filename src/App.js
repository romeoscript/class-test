import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Footer from "./footer/Footer";
import { Home, About, Login, Register } from "./pages";
import Navbar from './components/navbar/Navbar'
// import Files from "./component/files/Files";


const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/about" exact element={<About />} />
        <Route path="/login" exact element={<Login />} />
        <Route path="/register" exact element={<Register />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
