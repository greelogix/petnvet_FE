import { Col, Container, Row,Card } from "react-bootstrap";

function CardUI({ listData }) {

  if (!Array.isArray(listData)) {
    return <p>Empty list</p>;
  }

  return (
    <Container fluid className="mt-3">
    <Row>
      {listData.map((list) => (
        <Col lg={3} md={6} sm={12} key={list.Id} className="mb-4 ">
          <Card className="border-0 radius8 pb-3">
            <img src={list.Images} alt={list.Name} className="storeCard img-fluid"/> 
            <h5 className="heading20 mt-3 mb-0 ms-3">{list.Rs}</h5>
            <h5 className="heading20 mb-0 ms-3">{list.Name}</h5>
            <p className="font16 mb-0 ms-3">{list.name}</p>
            <p className="font16 mb-0 ms-3">{list.Location}</p>
          </Card>
        </Col>
      ))}
    </Row>
  </Container>
  );
}

export default CardUI;
