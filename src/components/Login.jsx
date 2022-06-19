import React, { useRef, useState } from 'react';
import { Card, Form, Button, Alert } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

export const Login = () => {
    const emailRef = useRef()
    const passwordRef = useRef()
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const { SignInUser } = useAuth()
    const navigate = useNavigate()


    async function handleLogin(e) {
        e.preventDefault();

        try{
            setError('')
            setLoading(true)
            await SignInUser(emailRef.current.value, passwordRef.current.value);
            navigate("/")
        }catch{
            setError('Failed to sign in at that moment.')
          }
          setLoading(false)
    }

    return (
        <>
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Sign In</h2>
          {error && <Alert variant="alert">{error}</Alert>}
          <Form onSubmit={handleLogin}>
            <Form.Group id="email" className="mt-2">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" ref={emailRef} required />
            </Form.Group>
            <Form.Group id="password" className="mt-2">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" ref={passwordRef} required />
            </Form.Group>
            <Button disabled={loading} className="w-100 mt-5" type="submit">Sign In</Button>
          </Form>
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2">
        New User?  <Link to="/signup">Sign Up</Link>
      </div>
    </>
    );
}