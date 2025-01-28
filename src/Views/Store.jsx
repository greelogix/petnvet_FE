import { useState } from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import "../Assets/Css/Soter.css";
import { petstore } from "../Constants/GlobleConstants";
import { traininglist } from "../Constants/GlobleConstants";
import StoreMainCmpnt from "../Components/StoreMainCmpnt";
import StoreBaner from "../Components/StoreBaner";
import InputForm from "../Components/Form";
import { Container, Row, Col } from "react-bootstrap";

function Store() {
  const [key, setKey] = useState("home");

  return (
    <>
      <Container fluid>
        <Row>
          <Col xs={12}>
            <StoreBaner /> 
          </Col>
          <Col lg={8} md={12} xs={12}>
            <Tabs
              id="controlled-tab-example"
              activeKey={key}
              onSelect={(k) => setKey(k)}
              className="mb-3"
            >
              <Tab eventKey="home" title="Products">
                <StoreMainCmpnt
                  title="Showing 1-12 of 155 results"
                  data={petstore}
                />
              </Tab>
              <Tab eventKey="vets" title="Vets">
                Tab content for Vets
              </Tab>
              <Tab eventKey="training" title="Training">
                <StoreMainCmpnt
                  title="Showing 1-12 of 155 results"
                  data={traininglist}
                />
              </Tab>
              <Tab eventKey="grooming" title="Grooming">
                Tab content for Grooming
              </Tab>
              <Tab eventKey="buypets" title="Buy Pets">
                Tab content for Buy Pets
              </Tab>
              <Tab eventKey="adopt" title="Adopt">
                Tab content for Adopt
              </Tab>
            </Tabs>
          </Col>
          <Col lg={4} md={12} xs={12}>
            <InputForm />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Store;
