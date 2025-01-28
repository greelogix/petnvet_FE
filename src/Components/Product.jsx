import { Col, Container, Row } from "react-bootstrap";
import ListLink from "./ListLink";
import { Link } from "react-router-dom";
import Groupone from "../Assets/Images/Group (1).png";
import Grouptwo from "../Assets/Images/Group (2).png";
import Groupthree from "../Assets/Images/Group (3).png";
import Groupfour from "../Assets/Images/Group (4).png";
import Groupfive from "../Assets/Images/Group (5).png";
import Store from "../Assets/Images/Pet Buy and Sell.png";
import Group from "../Assets/Images/Group.png";
import "../Assets/Css/Home.css";
import "../Assets/Css/Fontsize.css"

function Products() {
  const Listlink = [
    {
      Id: "1",
      Images: Groupone,
      Name: "Products",
      Link: "links",
    },
    {
      Id: "2",
      Images: Grouptwo,
      Name: "Vets",
      Link: "links",
    },
    {
      Id: "3",
      Images: Groupthree,
      Name: "Training",
      Link: "links",
    },
    {
      Id: "4",
      Images: Groupfour,
      Name: "Adopt",
      Link: "links",
    },
    ,
    {
      Id: "5",
      Images: Groupfive,
      Name: "Grooming",
      Link: "links",
    },
    ,
    {
      Id: "6",
      Images: Store,
      Name: "Buy & Sell",
      Link: "links",
    },
    {
      Id: "7",
      Images: Group,
      Name: "Pet Stores",
      Link: "links",
    },
  ];

  return (
    <div>
      <ListLink listData={Listlink} /> 
    </div>
  );
}

export default Products;
