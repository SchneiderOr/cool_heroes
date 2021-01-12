import React from "react";
import { Col, Row } from "react-styled-flexboxgrid";

import HeroView from "../containers/heroView";
import PerviousHeros from "../containers/previousHerosView";

export default (props) => {
  return (
    <Row between={"xs"}>
      <Col xs={12} md={6}>
        <HeroView />
      </Col>
      <Col xs={12} md={4}>
        <PerviousHeros />
      </Col>
    </Row>
  );
};
