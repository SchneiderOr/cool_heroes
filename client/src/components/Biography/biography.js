import React from "react";
import PropTypes from "prop-types";
import { Row } from "react-styled-flexboxgrid";

import { Label, Text } from "./style";

const bio = {
  Alignment: "alignment",
  "Alter Egos": "alter-egos",
  "First Appearance": "first-appearance",
};

const Biography = ({ data }) => {
  return Object.keys(bio).map((label) => {
    const path = bio[label];
    return (
      <Row key={label}>
        <Label>{label}: </Label>
        <Text>{data[path]}</Text>
      </Row>
    );
  });
};

Biography.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Biography;
