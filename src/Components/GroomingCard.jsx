import {
  Button,
  Card,
  Row,
  Col,
  Container,
  InputGroup,
  ListGroup,
} from "react-bootstrap";
import Form from "react-bootstrap/Form";
import "../Assets/Css/Fontsize.css";
import "../Assets/Css/Products.css";
import NavDropdown from "react-bootstrap/NavDropdown";
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import TimePicker from "react-time-picker";
import "react-datepicker/dist/react-datepicker.css";
import "react-time-picker/dist/TimePicker.css";
import "react-clock/dist/Clock.css";
import Formtwo from "./Formtwo";
import Grooming from "../Assets/Images/grooming.png";

function GroomingCard() {
  const [startDate, setStartDate] = useState(new Date());
  const [value, onChange] = useState("10:00");
  return (
    <>
      <Container>
        <Row>
          <Col xs={12} className="my-3">
            <Card className=" border-0 rounded bg-white">
              <Row>
                <Col lg={8} xs={12}>
                  <Row>
                    <Col lg={4} md={6} xs={12}>
                      <img src={Grooming} className="img-fluid rounded" />
                      <ListGroup horizontal className="">
                        <ListGroup.Item className="li  bg-transparent border-0">
                          <img src={Grooming} className="img-fluid  setsize" />
                        </ListGroup.Item>
                        <ListGroup.Item className="li bg-transparent border-0">
                          <img src={Grooming} className="img-fluid  setsize" />
                        </ListGroup.Item>
                        <ListGroup.Item className="li bg-transparent border-0">
                          <img src={Grooming} className="img-fluid  setsize" />
                        </ListGroup.Item>
                        <ListGroup.Item className="li bg-transparent border-0">
                          <img src={Grooming} className="img-fluid  setsize" />
                        </ListGroup.Item>
                      </ListGroup>
                    </Col>
                    <Col lg={8} md={6} xs={12} className="ps-3">
                      <Button type="btn" className="btnsize me-2 mt-3 ps-3">
                        Dogs
                      </Button>
                      <Button type="btn" className="btnsizeone mt-3 ps-3">
                        Grooming
                      </Button>
                      <h3 className="heading28 mt-2 ">Grooming Service Name</h3>
                      <p  className="">Rs. 1,000</p>
                      <div className="ps-0">
                      <ListGroup horizontal className="ps-0">
                        <ListGroup.Item className="li  bg-transparent border-0">
                          <img src={Grooming} className="img-fluid  setprofilesize" />
                        </ListGroup.Item>
                        <ListGroup.Item className="li bg-transparent border-0">
                         <p className="mb-0 font16 ">Store Name</p>
                         <p className="mb-0 font12 ">Location</p>
                        </ListGroup.Item>
                      </ListGroup>
                      </div>
                      <p  className="">Description</p>
                    </Col>
                  </Row>
                </Col>
                <Col lg={4} xs={12}>
                  <Formtwo />
                </Col>
              </Row>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default GroomingCard;
