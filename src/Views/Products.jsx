import "../Assets/Css/Products.css";
import "../Assets/Css/Fontsize.css";
import ProductMaincmpnt from "../Components/ProductMaincmpnt";
import { groominglist } from "../Constants/GlobleConstants";
import Uperfooter from "../Components/Uperfooter";
import GroomingCard from "../Components/GroomingCard";
import { Container, Row, Col } from "react-bootstrap";

function Products() {
  return (
    <>
      <Container fluid>
        <Row>
            <GroomingCard/>
          <ProductMaincmpnt title="Explore more services" data={groominglist} />
          <Uperfooter />
        </Row>
      </Container>
    </>
  );
}

export default Products;
