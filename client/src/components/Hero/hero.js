import React from "react";
import PropTypes from "prop-types";
import { Col, Row } from "react-styled-flexboxgrid";
import { Name, Image } from "./style";
import Biography from "../Biography/biography";
import Separator from "../Separator/separator";

const Hero = (props) => {
  const { data } = props;
  const { image, name, biography } = data || {};

  return (
    <Col>
      <Row middle="xs">
        <Col>
          <Image src={image.url} size="96px" radius="25px" />
        </Col>
        <Col>
          <Name>{name}</Name>
        </Col>
      </Row>
      <Separator />
      <Biography data={biography} />
    </Col>
  );
};

Hero.propTypes = {
  data: PropTypes.object,
  isLoading: PropTypes.bool,
};

export default Hero;
