import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import configureStore from "./store/create";

import App from "./App";
import Home from "./routes/Home";
import NotFound from "./routes/NotFound";

import { ThemeProvider } from "styled-components";
import theme from "./config/theme";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import registerServiceWorker from "./registerServiceWorker";

const store = configureStore();

if (process.env.NODE_ENV !== "production") {
  // debug redux on dev/stg
  window.store = store;
}

ReactDOM.render(
  <Router>
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <App>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/:hero" component={Home} />
            <Route component={NotFound} />
          </Switch>
        </App>
      </Provider>
    </ThemeProvider>
  </Router>,
  document.getElementById("root")
);

// registerServiceWorker();
