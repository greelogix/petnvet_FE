import {
  Container,
  Button,
  Form,
  InputGroup,
  Row,
  Col,
  ListGroup,
} from "react-bootstrap";
import "../Assets/Css/HeaderCss.css";
import "../Assets/Css/Fontsize.css"
import Footerlogo from "../Assets/Images/Footer_Logo.png";
import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <Container fluid className="Footer">
        <Row className="py-5 d-flex justify-content-center align-item-center text-center">
          <Col sm={12} className="">
            <Link to="#">
              <img src={Footerlogo} alt="..." className="img-fluid" />
            </Link>
          </Col>
          <Col sm={12} className="d-flex justify-content-center align-item-center text-center mt-5">
            <ListGroup horizontal className="">
              <ListGroup.Item className="li  bg-transparent border-0">
                <Link to="#">Open Shop</Link>
              </ListGroup.Item>
              <ListGroup.Item className="li bg-transparent border-0">
                <Link to="#">Contact us</Link>
              </ListGroup.Item>
              <ListGroup.Item className="li bg-transparent border-0">
                <Link to="#">Terms & Conditions</Link>
              </ListGroup.Item>
            </ListGroup>
          </Col>
          <Col sm={12} className="mt-3">
            <p className="text-white">© 2024. All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Header;
