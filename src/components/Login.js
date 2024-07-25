import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";
import "./Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Hardcoded credentials
    if (email === "nhick_andrei_fabian@dlsl.edu.ph" && password === "test123") {
      navigate("/dashboard");
    } else {
      alert("Invalid credentials");
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="login-box relative flex flex-col items-center bg-white p-8 shadow-lg">
      <div className="absolute box-login bg-white"></div>
      <div className="absolute circle bg-white rounded-full"></div>
      <div className="absolute rectangle-login bg-white"></div>
      <img src={logo} alt="Logo" className="logo w-12 h-12 mb-4" />
      <h2 className="rmco mb-2 text-xl font-bold text-center">
        Welcome to RMCO RMS
      </h2>
      <p className="mb-6 text-center text-gray-600">Login to your account</p>
      <form className="w-full space-y-4" onSubmit={handleSubmit}>
        <div className="relative">
          <label className="block mb-1 font-semibold">Email:</label>
          <input
            type="email"
            className="w-full px-3 py-2 border rounded-md"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="user@dlsl.edu.ph"
            required
          />
        </div>
        <div className="relative">
          <label className="block mb-1 font-semibold">Password:</label>
          <input
            type={showPassword ? "text" : "password"}
            className="w-full px-3 py-2 border rounded-md"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="input your password"
            required
          />
          <button
            type="button"
            className="absolute inset-y-0 right-3 top-7 flex items-center text-gray-500"
            onClick={togglePasswordVisibility}
          >
            {showPassword ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M10 3C6.522 3 3.517 5.342 1.514 8.781a1.003 1.003 0 000 1.42C3.517 14.658 6.522 17 10 17s6.483-2.342 8.486-5.781a1.003 1.003 0 000-1.42C16.483 5.342 13.478 3 10 3zm0 2c1.763 0 3.43 1.265 5.11 3.49.311.421.476.695.69 1.01-.214.315-.379.589-.69 1.01C13.43 13.735 11.763 15 10 15s-3.43-1.265-5.11-3.49c-.311-.421-.476-.695-.69-1.01.214-.315.379-.589.69-1.01C6.57 6.265 8.237 5 10 5zm0 1a4 4 0 100 8 4 4 0 000-8zm0 1a3 3 0 010 6 3 3 0 010-6z" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 5a4 4 0 014 4 .5.5 0 01-.5.5h-7A.5.5 0 016 9a4 4 0 014-4zm0-2C6.523 3 3.52 5.34 1.517 8.781a1.003 1.003 0 000 1.419C3.52 14.658 6.523 17 10 17s6.483-2.342 8.486-5.781a1.003 1.003 0 000-1.42C16.483 5.34 13.478 3 10 3z"
                  clipRule="evenodd"
                />
              </svg>
            )}
          </button>
        </div>
        <div className="text-right">
          <a href="#" className="text-green-700 hover:underline">
            Forgot Password?
          </a>
        </div>
        <button
          type="submit"
          className="w-full py-2 bg-green-700 text-white rounded-md hover:bg-green-800"
        >
          Sign In
        </button>
      </form>
      <div className="text-center text-gray-600 text-sm mt-4">
        ©2024 RMCO RMS | All Rights Reserved.
      </div>
    </div>
  );
};

export default Login;
