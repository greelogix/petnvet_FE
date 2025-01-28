import { Container, Col, Row } from "react-bootstrap";
import StoreIamge from '../Assets/Images/Pictures.png';
import "../Assets/Css/Fontsize.css";
import "../Assets/Css/Soter.css";

function StoreBaner() {
  return (
    <>
      <Container fluid>
        <Row className="storebaner"></Row>
        <Row>
          <Col lg={1} xs={2}>
          <img src={StoreIamge} className="storeprofile"/>
          </Col>
          <Col lg={11} xs={10}>
            <h2 className="heading32">Store Name</h2>
            <p className="font16">Location</p>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default StoreBaner;
