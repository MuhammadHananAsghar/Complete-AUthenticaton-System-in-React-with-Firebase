import React, { useState } from 'react';
import { useRef } from 'react';
import { Card, Button, Form, Alert } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

export const ForgotPassword = () => {
    const emailRef = useRef();
    const navigate = useNavigate();
    const { ResetEmail } = useAuth();
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const [loading, setLoading] = useState(false);

    function goBack(){
        navigate("/")
    }

    async function handleReset(e){
        e.preventDefault();
        try{
            setError('')
            setSuccess('')
            setLoading(true)
            await ResetEmail(emailRef.current.value)
            setSuccess('Check your inbox for further instructions')
        }catch{
            setError('Failed to reset password process')
        }
        setLoading(false)
    }

    return (
        <>
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">New Passwrod</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          {success && <Alert variant="success">{success}</Alert>}
          <Form onSubmit={handleReset}>
            <Form.Group id="email" className="mt-2">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" ref={emailRef} required />
            </Form.Group>
            <Button  disabled={loading} className="w-100 mt-5" type="submit">Change Password</Button>
          </Form>
        </Card.Body>
      </Card>
      <Button variant="link" onClick={goBack}>
          Back
        </Button>
    </>
    );
}