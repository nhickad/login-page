import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import "./index.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

function LoginPage() {
  return (
    <div
      className="relative flex justify-center items-center h-screen"
      style={{ backgroundColor: "#02872C" }}
    >
      <div
        className="absolute inset-x-0 top-0 h-1/2"
        style={{ backgroundColor: "#02872C" }}
      ></div>
      <div className="absolute inset-x-0 bottom-0 h-1/2 bg-white"></div>
      <div className="relative z-10 flex justify-center items-center w-full">
        <div className="relative flex">
          <div className="dotted-design">
            {Array.from({ length: 35 }).map((_, index) => (
              <div key={index}></div>
            ))}
          </div>
          <Login />
        </div>
      </div>
    </div>
  );
}

export default App;
