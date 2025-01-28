import { Container, Button, Form, InputGroup, Row, Col } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";
import Logo from "../Assets/Images/Logo.png";
import BtnIcon from "../Assets/Images/Icon Button.png";
import "../Assets/Css/HeaderCss.css";

function Header() {
  return (
    <>
      {/* <Navbar className="bg-white">
        <Container>
          <Navbar.Brand href="#home">
            <img src={Logo} />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto">
          

              <Form inline className=" mx-2 inputwidth">
                <InputGroup>
                  <Form.Control
                    placeholder="Username"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                  />
                  <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
                </InputGroup>
              </Form>
          
              <Button type="btn" className="openBtn  mx-2">
                Open shope
              </Button>
         
              <Button type="btn" className="openBtn  mx-2">
                <p className="d-flex">
                  Contact
                  <img src={BtnIcon} />
                </p>
              </Button>
            
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar> */}

      {/* <Container fluid>
        <Row className="justify-content-cetner bg-dark text-white">
          <Col lg={12} md={6} sm={6}className="text-center navundernavbar">
            <Link to="#" className="">
              Pet Stores
            </Link>
            <Link to="#" className="">
              Products
            </Link>
            <Link to="#" className="">
              Vets
            </Link>
            <Link to="#" className="">
              Traning
            </Link>
            <Link to="#" className="">
              Grooming
            </Link>
            <Link to="#" className="">
              Buy & Sell
            </Link>
            <Link to="#" className="">
              Adopt
            </Link>
          </Col>
        </Row>
      </Container> */}
    </>
  );
}

export default Header;
