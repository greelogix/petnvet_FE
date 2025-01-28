import { Col, Container, Row, Card } from "react-bootstrap";

function ListLink({ listData }) {
  // Ensure listData is always an array (even if it's undefined or null)
  if (!Array.isArray(listData)) {
    return <p>Empty list</p>;
  }

  return (
    <Container fluid className="mt-5">
      <Row>
        <Col md={12} sm={6}>
          <Card className="bg-white border-0 px-2">
            <Row>
              {listData.map((list) => (
                <Col key={list.Id} className="py-4">
                  <div className="text-center">
                    <img
                      src={list.Images}
                      alt={list.Name}
                      className="LinkIamges"
                    />
                    <h5 className="font16">{list.Name}</h5>
                  </div>
                </Col>
              ))}
            </Row>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default ListLink;
