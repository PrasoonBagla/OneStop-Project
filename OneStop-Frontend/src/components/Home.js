import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import '../css/Home.css';
const Home = () => {

  //using local storage to initial authentication check and current user
  localStorage.setItem("isAuthenticated", "false");
  localStorage.setItem('user', "");

  return (
    <>
      
      <Container >
      <div className="title">
      <h1>Welcome to <span className="hawkerspot">OneStop.</span></h1>
            <p>Find everything here.</p>
            
            <div className='buttons'>
            <Button href="/buyerlogin" size="lg">Buyer</Button><br/><br/>
            <Button href="/sellerlogin" size="lg">Seller</Button>
            </div>
            </div>
      </Container>
     
    </>
  )
}

export default Home
