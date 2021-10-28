import { Navbar, Container } from "react-bootstrap";
import Logo from "../../assets/logo.png";
const Nav = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="/">
          <img
            alt="Logo"
            src={Logo}
            width="30"
            height="30"
            className="d-inline-block align-top"
          />
          Most Popular Tv Series in Our App
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
};

export default Nav;
