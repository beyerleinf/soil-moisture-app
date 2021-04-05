import React from "react";
import ReactDOM from "react-dom";
import { App } from "./App";
import "./index.scss";
import reportWebVitals from "./reportWebVitals";

// type RouteDefinition = {
//   path: string;
//   component: React.FC | React.Component;
//   routes?: RouteDefinition[];
// };

// const routes: RouteDefinition[] = [
//   {
//     path: "/",
//     component: HomePage,
//   },
// ];

// const theme = "dark";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// function RouteWithSubRoutes(route: any) {
//   return (
//     <Route
//       path={route.path}
//       render={props => (
//         // pass the sub-routes down to keep nesting
//         <route.component {...props} routes={route.routes} />
//       )}
//     />
//   );
// }

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(console.log);
