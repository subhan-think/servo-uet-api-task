import React from "react";
import {
  HomeWrapperStyled,
  MainButtonStyled,
  MainHeadingStyled,
} from "./styled";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <HomeWrapperStyled>
      <MainHeadingStyled variant="h1">Welcome to our website</MainHeadingStyled>

      <Link to={"/categories/allCategories"} style={{ textDecoration: "none" }}>
        {" "}
        <MainButtonStyled variant="contained">
          See service Categories
        </MainButtonStyled>
      </Link>
      <br />
      <Link to={"/services"} style={{ textDecoration: "none" }}>
        {" "}
        <MainButtonStyled variant="contained">add Service</MainButtonStyled>
      </Link>
    </HomeWrapperStyled>
  );
};

export default Home;
