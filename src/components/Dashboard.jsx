import React, { useState } from "react";
import { Alert, Button, Card } from "react-bootstrap";
// import { Link } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

export const Dashboard = () => {
  const { SignOutUser } = useAuth();
  const [error, setError] = useState();
  const navigate = useNavigate();

  function handleLogout() {
    try {
      setError("");
      SignOutUser();
      navigate('/signin')
    } catch {
      setError("Failed to sign out user.");
    }
  }

  function forgotPassword(){
    navigate("/forgot-password")
  }

  return (
    <>
      <Card>
        <Card.Body>
          {error && <Alert variant="alert">{error}</Alert>}
          Dashboard
        </Card.Body>
      </Card>

      <div className="w-100 text-center mt-2 d-flex align-items-center justify-content-center">
        <Button variant="danger" onClick={handleLogout}>
          Logout
        </Button>&nbsp;&nbsp;&nbsp;
        <Button variant="success" onClick={forgotPassword}>
          Forgot Password
        </Button>
      </div>
    </>
  );
};
