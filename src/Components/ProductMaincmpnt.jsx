import { Link } from "react-router-dom";
import Cardimge from "../Assets/Images/vets.png";
import { Col, Container, Row } from "react-bootstrap";
import "../Assets/Css/Products.css";
import "../Assets/Css/Fontsize.css";
import CardUI from "./CardUI";

function ProductMaincmpnt(props) {
  return (
    <div>
      <Row>
        <Col lg={11} xs={12}>
          <h2 className="heading32 mt-3 ps-3">{props.title}</h2>
        </Col>
        <CardUI listData={props.data} />
      </Row>
    </div>
  );
}

export default ProductMaincmpnt;


