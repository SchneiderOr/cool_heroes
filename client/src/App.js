import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Grid as BaseGrid } from "react-styled-flexboxgrid";

import Header from "./components/Header/header";
import Footer from "./components/Footer/footer";
import Seperator from "./components/Separator/separator";
import GlobalStyles from "./config/base-style";

const Grid = styled(BaseGrid)`
  padding: 0 50px;
`;

class App extends Component {
  static contextTypes = {
    store: PropTypes.object.isRequired,
  };

  render() {
    return (
      <div>
        <GlobalStyles />
        <Grid>
          <Header />
        </Grid>

        <Seperator height="1px" />
        <Grid>{this.props.children}</Grid>

        <Seperator height="1px" />
        <Grid>
          <Footer />
        </Grid>
      </div>
    );
  }
}

export default App;
