import React from "react";
import { Col, Row } from "react-styled-flexboxgrid";
import Image from "../Image/image";
import Seperator from "../Separator/separator";
import { SubjectTitle } from "./style";

const SlimHero = ({ avatar, biography, tags, name, image, title }, index) => (
  <Col key={index}>
    <Row>
      <Col xs={3}>
        {image && <Image src={image.url} size="64px" radius="20px" />}
      </Col>
      <Col xs={9}>
        <SubjectTitle>{name}</SubjectTitle>
      </Col>
    </Row>
    <Row>
      <Seperator />
    </Row>
  </Col>
);

export default SlimHero;
