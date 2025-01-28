import { Container, Row } from "react-bootstrap";
import ListLink from "../Components/ListLink";
import Hbaner from "../Components/Hbaner";
import Products from "../Components/Product";
import MainComponent from "../Components/MainComponent";
import { vetlist } from "../Constants/GlobleConstants";
import { petstore } from "../Constants/GlobleConstants";
import { foodstore } from "../Constants/GlobleConstants";
import { traininglist } from "../Constants/GlobleConstants";
import { groominglist } from "../Constants/GlobleConstants";
import { petlist } from "../Constants/GlobleConstants";

function Home() {
  return (
    <>
      <Container fluid>
        <Row>
           <Hbaner /> 
           <Products /> 
          <MainComponent title="Pet Store" data={petstore} />
          <MainComponent title="Food Stores" data={foodstore} />
          <MainComponent title="Vets" data={vetlist} />
          <MainComponent title="Training" data={traininglist} />
          <MainComponent title="Grooming Service" data={groominglist} />
          <MainComponent title="Buy a Pet" data={petlist} />
          <MainComponent title="Buyer Request" data={petlist} />


        </Row>
      </Container>
    </>
  );
}

export default Home;
