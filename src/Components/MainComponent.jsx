import { Link } from "react-router-dom";
import Cardimge from "../Assets/Images/vets.png";
import { Col, Container, Row } from "react-bootstrap";
import "../Assets/Css/Home.css";
import CardUI from "./CardUI";

function MainComponent(props) {


  return (
    <div>
      <div>
        <h2 className="heading32 mt-3 ps-3">{props.title}</h2>
        <CardUI listData={props.data} />
      </div>
    </div>
  );
}

export default MainComponent;
