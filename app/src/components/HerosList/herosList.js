import React from "react";
import PropTypes from "prop-types";
import { Col } from "react-styled-flexboxgrid";
import Seperator from "../Separator/separator";
import SlimHero from "./slimHero";
import { Title } from "./style";

const HerosList = (props) => {
  const { data } = props;

  return (
    <Col>
      <Title>Recently Searched</Title>
      <Seperator />
      {data.map(SlimHero)}
    </Col>
  );
};

HerosList.propTypes = {
  data: PropTypes.array,
  isLoading: PropTypes.bool,
};

export default HerosList;
