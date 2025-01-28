import { Col, Container, Row, Card } from "react-bootstrap";
import Pagination from 'react-bootstrap/Pagination';

function ThreeCardUI({ listData }) {
  if (!Array.isArray(listData)) {
    return <p>Empty list</p>;
  }

  return (
    <Container fluid className="mt-3">
      <Row className="d-flex justify-content-center ">
        {listData.map((list) => (
          <Col lg={4} md={6} xs={12} key={list.Id} className="mb-4 ">
            <Card className="border-0 radius8 pb-3">
              <img
                src={list.Images}
                alt={list.Name}
                className="storeCard img-fluid"
              />
              <h5 className="heading20 mt-3 mb-0 ms-3">{list.Rs}</h5>
              <h5 className="heading20 mb-0 ms-3">{list.Name}</h5>
              <p className="font16 mb-0 ms-3">{list.name}</p>
              <p className="font16 mb-0 ms-3">{list.Location}</p>
            </Card>
          </Col>
        ))}
        <Col md={12} xs={6} className="d-flex justify-content-center ">
          <Pagination  size="sm">
            <Pagination.First />
            <Pagination.Prev />
            <Pagination.Item>{1}</Pagination.Item>
            <Pagination.Ellipsis />

            <Pagination.Item>{10}</Pagination.Item>
            <Pagination.Item>{11}</Pagination.Item>
            <Pagination.Item active>{12}</Pagination.Item>
            <Pagination.Item>{13}</Pagination.Item>
            <Pagination.Item disabled>{14}</Pagination.Item>

            <Pagination.Ellipsis />
            <Pagination.Item>{20}</Pagination.Item>
            <Pagination.Next />
            <Pagination.Last />
          </Pagination>
        </Col>
      </Row>
    </Container>
  );
}

export default ThreeCardUI;
