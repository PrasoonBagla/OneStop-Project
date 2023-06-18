import Header from "./Header"
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Fab from '@mui/material/Fab';
import EditIcon from '@mui/icons-material/Edit';
import Button from 'react-bootstrap/Button';
import '../css/Sellerhome.css';
import axios from "./axios.js";
import { Navigate, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { sellerHomeapi } from "../service/api";
const SellerHome = () => {

  const [shops, setShops] = useState([]);
  const navigate = useNavigate();

  //using local storage to set authentication check and current user, also the current shop
  const loggedInUser = localStorage.getItem("user");
  const isAuthenticated = localStorage.getItem("isAuthenticated");
  localStorage.setItem('shop', "");

  //getting all the shops
  useEffect(() => {
    sellerHomeapi(setShops);
  }, [])
  //checking isAuthenticated to prevent direct access
  if (isAuthenticated === "false") {
    console.log(isAuthenticated);
    return <Navigate to="/" replace></Navigate>
  }
  
  //navigating to the page to add new shop
  const handleSubmit = async (event) => {
    navigate("/sellernewshop");
  }

  //navigating to edit the list of item sold
  const handleClick = async (event) => {
    navigate("/sellershop");
  }

  //filtering out random shops
  var finalShops = shops.filter((shop) => {
    return shop.name === loggedInUser;
  })

  return (

    <>
      <Header />
      <Container >
        <h1>Welcome! {loggedInUser}</h1>
        <div className="hehe"><h5>What are you looking for?</h5></div>
        {finalShops.map((shop) => (
          <div className="cards">
            <Card style={{ width: '18rem' }}>
              <Card.Body>
                <Card.Title>
                  <a href="#" class="text-decoration-none" >{shop.businessName}</a> 
                  {localStorage.setItem('shop', shop.businessName)}
                </Card.Title>
                <Card.Text >
                  {shop.description}
                </Card.Text>
              </Card.Body>
              <div className="editbutton">
                <Fab size="medium" color="primary" aria-label="edit" onClick={(e) => handleClick(e)}>
                  {localStorage.setItem('shop', shop.businessName)}
                  <EditIcon />
                </Fab>
              </div>
            </Card>
          </div>
        ))}
        <Button variant="primary" type="submit" href="/sellernewshop" onClick={(e) => handleSubmit(e)}>
          Add New Shop
        </Button>
      </Container>
    </>
  )
}

export default SellerHome
