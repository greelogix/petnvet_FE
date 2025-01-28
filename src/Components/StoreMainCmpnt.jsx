import { Link } from "react-router-dom";
import Cardimge from "../Assets/Images/vets.png";
import { Col, Container, Row } from "react-bootstrap";
import "../Assets/Css/Home.css";
import "../Assets/Css/Fontsize.css"
import ThreeCardUI from "./ThreeCardUI";
import StoreBaner from "./StoreBaner";

function StoreMainCmpnt(props) {
  return (
    <div>
      <Row>
        <Col lg={12} xs={12}>
          <p className="font21  ps-3">{props.title}</p>
        </Col>

        <ThreeCardUI listData={props.data} />
       
      </Row>
    </div>
  );
}

export default StoreMainCmpnt;
