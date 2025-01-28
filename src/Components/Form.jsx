import { Button, Card, Row, Col, Container } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import "../Assets/Css/Fontsize.css";
import "../Assets/Css/Soter.css";
import NavDropdown from "react-bootstrap/NavDropdown";
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import TimePicker from "react-time-picker";
import "react-datepicker/dist/react-datepicker.css";
import "react-time-picker/dist/TimePicker.css";
import "react-clock/dist/Clock.css";

function InputForm() {
  const [startDate, setStartDate] = useState(new Date());
  const [value, onChange] = useState("10:00");
  return (
    <>
      <Container>
        <Card className="p-3 border-0 DataForm">
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder="Name" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Phone</Form.Label>
              <Form.Control type="text" placeholder="Phone" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Service Type</Form.Label>
              <br />
              <Button variant="primary" type="btn" className="me-2">
                Training
              </Button>
              <Button variant="primary" type="btn">
                Grooming
              </Button>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Service</Form.Label>
              <br />
              <NavDropdown
                title="Grooming Service Name"
                id="basic-nav-dropdown"
                className="border p-2 rounded"
              >
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Row>
                <Col lg={6} xs={12}>
                  <Form.Label>Date</Form.Label>
                  <br />
                  <DatePicker
                    selected={startDate}
                    onChange={(date) => setStartDate(date)}
                  />
                </Col>
                <Col lg={6} xs={12}>
                  <Form.Label>Time</Form.Label>
                  <br />

                  <TimePicker onChange={onChange} value={value} />
                </Col>
              </Row>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Message</Form.Label>
              <br />
              <textarea
                class="form-control"
                id="exampleFormControlTextarea1"
                rows="3"
              ></textarea>
            </Form.Group>
            <Button variant="primary" type="submit" className="w-100">
              Submit
            </Button>
          </Form>
        </Card>
      </Container>
    </>
  );
}

export default InputForm;
