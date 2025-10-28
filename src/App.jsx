import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PatientSignup from "./Components/PatientSignup";
import LoginPage from "./Components/LoginPage";
import ForgetPassword from "./Components/ForgetPassword"; // Import this

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/signup" element={<PatientSignup />} />
        <Route path="/forget-password" element={<ForgetPassword />} />
      </Routes>
    </Router>
  );
}

export default App;

