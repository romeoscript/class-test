import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Footer from "./footer/Footer";
import Error from "./pages/Error";
import { Home, About, Login, Register } from "./pages";
import Navbar from "./components/navbar/Navbar";
import ProfileAuth from "./pages/Dashboard/ProfileAuth";
import ProfileDeposit from "./pages/Dashboard/ProfileDeposit";
// import Files from "./component/files/Files";

const App = () => {
  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profileAuth" element={<ProfileAuth />} />
        <Route path="/deposit" element={<ProfileDeposit />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
