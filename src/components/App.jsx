import React from "react";
import SignUp from "./SignUp";
import { Login } from "./Login";
import { Dashboard } from "./Dashboard";
import { Container } from "react-bootstrap";
import { AuthState } from "../contexts/AuthContext";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { DashRoute } from '../routes/DashRoute';
import { ForgotPassword } from '../components/ForgotPassword';


function App() {
  return (
    <Container
      className="d-flex align-items-center justify-content-center"
      style={{ minHeight: "100vh" }}
    >
      <div className="w-100" style={{ maxWidth: "400px" }}>
        <Router>
          <AuthState>
            <Routes>
              <Route exact path="/" element={<DashRoute><Dashboard /></DashRoute>} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/signin" element={<Login />} />
              <Route path="/forgot-password" element={<ForgotPassword />} />
            </Routes>
          </AuthState>
        </Router>
      </div>
    </Container>
  );
}

export default App;
