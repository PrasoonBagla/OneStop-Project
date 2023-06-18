import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/SignUp.css';
import { useState} from "react";
import axios from './axios';
import { useNavigate, Navigate} from "react-router-dom";
import { sellersignupapi } from '../service/api';

const SellerSignUp = () => {
  const navigate = useNavigate();
  
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [password, setPassword] = useState("");

  //using local storage to initial authentication check and current user 
  localStorage.setItem("isAuthenticated", "false");
  localStorage.setItem('user', "");

  //posting the new user details
  const handleSubmit = async (event) => {
    try {
        event.preventDefault();
        await sellersignupapi(name,contact,password);
            navigate("/sellerhome", {state:{user: {name}}});
    } catch (error) {
        console.log("done");
        alert("Username already taken!")
        navigate("/sellersignup");
    }       
}
  return (
    <Container >
        <div className='Signin_name'>
        <h1>Welcome to <span className="hawkerspot">OneStop.</span></h1>
            <p>Find everything here.</p>
            <h2>Sign Up</h2>
            <p className='para'>Sign in with your data that you entered during your registration</p>
        </div>
       <Form className='rounded p-4 p-sm-3'>
       <Form.Group className="mb-3" controlId="formBasicNamw">
        <Form.Label>Name</Form.Label>
        <Form.Control type="Name" placeholder="Name" required="true" onChange={e => setName(e.target.value)}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicNumber">
        <Form.Label>Contact Number</Form.Label>
        <Form.Control type="number" placeholder="Enter Contact Number" required="true" onChange={e => setContact(e.target.value)}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" required="true" onChange={e => setPassword(e.target.value)}/>
      </Form.Group>
      <Button variant="primary" type="submit" onClick={(e) => handleSubmit(e)}>
        Sign In
      </Button>
    </Form>
    </Container>
    
  )
}

export default SellerSignUp
