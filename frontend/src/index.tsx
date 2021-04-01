import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import { Header } from "./components/common";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { HomePage } from "./pages/Home/Home";
import ThemeContext from "./context/theme.context";
import { App } from "./App";

type RouteDefinition = {
  path: string;
  component: React.FC;
  routes?: RouteDefinition[];
};

const routes: RouteDefinition[] = [
  {
    path: "/",
    component: HomePage,
  },
];

// const theme = "dark";

ReactDOM.render(
  <React.StrictMode>
    {/* <Main /> */}
    <App />
    {/* <App /> */}
    {/* <Router> */}
    {/* <ThemeContext.Provider value="light"> */}
    {/* {theme => ( */}
    {/* className={theme} */}
    {/* <div> */}
    {/* <Header /> */}

    {/* <Switch>
          {routes.map((route, i) => (
            <RouteWithSubRoutes key={i} {...route} />
          ))}
        </Switch> */}
    {/* </div> */}
    {/* )} */}
    {/* </ThemeContext.Provider> */}
    {/* </Router> */}
  </React.StrictMode>,
  document.getElementById("root")
);

function RouteWithSubRoutes(route: any) {
  return (
    <Route
      path={route.path}
      render={props => (
        // pass the sub-routes down to keep nesting
        <route.component {...props} routes={route.routes} />
      )}
    />
  );
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(console.log);
