import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { useNavigate } from 'react-router-dom';
import '../css/Header.css';
const Header = () => {

  const navigate = useNavigate();

  //on logging out, isAuthenticated is changed to false so that random pages cannot be accessed
  const handleSubmit = async (event) => {
    localStorage.setItem("isAuthenticated", "false");
    localStorage.setItem('user', "");
    navigate("/");
  }

  return (
        <>
      <Navbar className='heade' bg="light" variant="light">
        <Container className="header" >
        <h1> <a href="/buyerhome" class="text-decoration-none"><span className="hawkerspot">OneStop.</span></a></h1>
        <h4> <a href="/" class=" logout text-decoration-none" onClick={(e) => handleSubmit(e)}>Logout</a></h4>
        </Container>
      </Navbar>
    </>
  )
}

export default Header
