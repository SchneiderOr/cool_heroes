import React from "react";
import Link from "../Link/link";
import { Container, Title } from "./style";
import Image from "../Image/image";

const Logo = (props) => (
  <Link to="/">
    <Container>
      <Image
        alt="Homepage"
        src="https://cdn.dribbble.com/users/58530/screenshots/5476801/ch_logo_motion.gif"
        width={props.width}
        height={props.height}
      />
      <Title>My Heros</Title>
    </Container>
  </Link>
);
Logo.defaultProps = {
  width: "160px",
  height: "auto",
};
export default Logo;
