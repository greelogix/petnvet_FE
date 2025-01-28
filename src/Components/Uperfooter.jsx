import { Container, Row, Card, Col, Button } from "react-bootstrap";
import "../Assets/Css/Home.css";
import "../Assets/Css/Fontsize.css"

function Uperfooter() {
  return (
    <>
      <Container fluid className="uperfooter mt-5">
        <Row>
          <Col lg={5} sm={6} className="py-5">
            <Card className="p-5 border-0 FmarginTop">
              <h2 className="heading32">List your store on PetnVet</h2>
              <p className="font21">
              We are providing a digital platform for vendors to set their shops on.
              Interested in expanding your business? Let’s start our partnership today!
              </p>
              <Button type="btn" className="CrdOpnBtn mt-3 mb-5">Open Shop</Button>
            </Card>
          </Col>
          <Col lg={7} sm={12}></Col>
        </Row>
      </Container>
    </>
  );
}

export default Uperfooter;
