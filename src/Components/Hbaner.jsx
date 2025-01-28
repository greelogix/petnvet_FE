import { Col, Container, Row } from "react-bootstrap";
import "../Assets/Css/Home.css";
import Banerimg from "../Assets/Images/random-institute-wn2BLotE8oY-unsplash 1.png";

function ListLink() {
  return (
    <Container fluid className="bg-white">
      <Row className="py-5">
        <Col lg={6} sm={12}>
          <Col lg={10}>
            <h1 className="mainheading marginTop">
              Everything Your Pet Desires, All in One Place.
            </h1>
            <p className="font21">
              Discover a world tailored for your pet: the ultimate hub for pet
              care essentials, from trusted stores to expert vets, grooming,
              training, and beyond - all gathered together for your convenience
            </p>
          </Col>
        </Col>

        <Col lg={6} sm={12} className="text-center">
          <img src={Banerimg} alt="..." className="img-fluid HbanerImg" />
        </Col>
      </Row>
    </Container>
  );
}

export default ListLink;
