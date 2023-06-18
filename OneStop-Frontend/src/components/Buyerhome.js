import Header from "./Header"
import Container from 'react-bootstrap/Container';
import '../css/buyerhome.css';
import Button from '@mui/material/Button';
import {Navigate, useNavigate} from 'react-router-dom';

const Buyerhome = () => {

  const navigate = useNavigate();

  //using local storage to prevent direct access of this page
  const isAuthenticated = localStorage.getItem("isAuthenticated");

  if(isAuthenticated === "false"){
    return <Navigate to="/" replace></Navigate>
  } 

  //using local storage to save the name of the current user 
  const loggedInUser = localStorage.getItem("user");

  //categories defined manually for now, further changes can be made to make these dynamic on scaling this applications
  const categories = ["Cobler", "Cycle Repair", "Home Bakery", "Home Decor", "Thrift Store"];

  //takes us to the page which shows the shops from the choosen category. For now it shows all the shops, further update can be made to show shops only in the locality.
  const handleSubmit = async (event) => {
    console.log(event.target.value);
    const shops = event.target.value;
    navigate("/buyerresults", {state: {user: {shops}}});
  }
  return (
    <>
      <Header />
      <Container  className="name" >
      <h1>Welcome! {loggedInUser} </h1>
      <div className="hehe"><h5>What are you looking for?</h5></div>
      {/* <TextField id="outlined-basic" label="Search" variant="outlined" />
      <Button className="hoho" variant="primary" type="submit" href="/buyerresults">Search</Button> */}
      {categories.map((cat) => (
        <Button className="button" variant="outlined" size="small" value={cat} style={{margin:7}} onClick={(e) => handleSubmit(e)} >
          {cat}
        </Button>
      ))}
      </Container>
    </>
  )
}

export default Buyerhome
