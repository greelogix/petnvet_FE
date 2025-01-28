import { Container, Button, Form, InputGroup, Row, Col } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";
import Logo from "../Assets/Images/Logo.png";
import BtnIcon from "../Assets/Images/Icon Button.png";
import Searchbtn from "../Assets/Images/searchBtn.png";
import "../Assets/Css/HeaderCss.css";
import "../Assets/Css/Fontsize.css"

function Header() {
  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="/">
            <img src={Logo} />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto">
              <Form inline className="NavForm">
                <InputGroup className="">
                  <Form.Control
                    placeholder="Username"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                  />
                  <InputGroup.Text id="basic-addon1"><img src={Searchbtn}/> </InputGroup.Text>
                </InputGroup>
              </Form>
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Link</Nav.Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Container fluid>
        <Row className="d-flex justify-content-cetner align-item-center text-center bg-dark text-white">
          <Col lg={12} md={12} sm={12} className="text-center navundernavbar">
            <Button className="flex-sm-{grow|shrink}-0 bg-transparent border-0">
              <Link to="/store" className="">
                Pet Stores
              </Link>
            </Button>
            <Button className="flex-sm-{grow|shrink}-0 bg-transparent border-0">
              <Link to="Products" className="">
                Products
              </Link>
            </Button>
            <Button className="flex-sm-{grow|shrink}-0 bg-transparent border-0">
              <Link to="#" className="">
                Vets
              </Link>
            </Button>
            <Button className="flex-sm-{grow|shrink}-0 bg-transparent border-0">
              <Link to="#" className="">
                Traning
              </Link>
            </Button>
            <Button className="flex-sm-{grow|shrink}-0 bg-transparent border-0">
              <Link to="#" className="">
                Grooming
              </Link>
            </Button>
            <Button className="flex-sm-{grow|shrink}-0 bg-transparent border-0">
              <Link to="#" className="">
                Buy & Sell
              </Link>
            </Button>
            <Button className="flex-sm-{grow|shrink}-0 bg-transparent border-0">
              <Link to="#" className="">
                Adopt
              </Link>
            </Button>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Header;
