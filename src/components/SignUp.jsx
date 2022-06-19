import React, { useState } from "react";
import { useRef } from "react";
import { Button, Form, Card, Alert } from "react-bootstrap";
import { useAuth } from "../contexts/AuthContext";
import { Link, useNavigate } from "react-router-dom";

const SignUp = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const confirmpasswordRef = useRef();
  const { SignUpUser } = useAuth();
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();


  async function handleSubmit(e){
    e.preventDefault();

    if(passwordRef.current.value !== confirmpasswordRef.current.value){
      return setError("Passwords do not match.")
    }

    try{
      setError('')
      setLoading(true)
      await SignUpUser(emailRef.current.value, passwordRef.current.value);
      navigate("/")
    }catch{
      setError("Failed to create a account at that moment.")
    }
    setLoading(false)


  }

  return (
    <>
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Sign Up</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group id="email" className="mt-2">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" ref={emailRef} required />
            </Form.Group>
            <Form.Group id="password" className="mt-2">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" ref={passwordRef} required />
            </Form.Group>
            <Form.Group id="confirmpassword" className="mt-2">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control type="password" ref={confirmpasswordRef} required />
            </Form.Group>
            <Button disabled={loading} className="w-100 mt-5" type="submit">Sign Up</Button>
          </Form>
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2">
        Already have an account? <Link to="/signin">Sign In</Link>
      </div>
    </>
  );
};

export default SignUp;
