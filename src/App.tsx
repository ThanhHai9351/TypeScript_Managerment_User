import React, { Fragment } from "react";
import { BrowserRouter as  Router, Routes, Route} from "react-router-dom";
import { routes } from "./routes";
import { Suspense } from "react";
import Loader from "./components/custom/Loader/Loader";
import { DefaultComponent, DefaultComponentNotFound } from "./components/layout/DefaultComponent/DefaultComponent";

function App() {
  return (
    <Fragment>
      <Router>
        <Suspense fallback={<Loader />}>
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
        </Suspense>
      </Router>
    </Fragment>
  );
}

export default App;
