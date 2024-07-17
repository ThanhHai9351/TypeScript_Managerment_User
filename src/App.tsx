import React, { Fragment } from "react";
import { BrowserRouter as  Router, Routes, Route} from "react-router-dom";
import { routes } from "./routes";
import { DefaultComponent, DefaultComponentNotFound } from "./components/layout/DefaultComponent/DefaultComponent";

function App() {
  return (
    <Fragment>
      <Router>
        <Routes>
          {routes.map((route, index) => (
            <Route
              key={index}
              path={route.path}
              element={
                route.isShowHeader ? (
                  <DefaultComponent>{route.page}</DefaultComponent>
                ) : (
                  <DefaultComponentNotFound>{route.page}</DefaultComponentNotFound>
                )
              }
            />
          ))}
        </Routes>
      </Router>
    </Fragment>
  );
}

export default App;
