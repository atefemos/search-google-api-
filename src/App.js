import React, { Suspense } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import IsLoading from "./components/IsLoading";

const Search = React.lazy(() => import("./components/Search"));
const NotFound = React.lazy(() => import("./components/NotFound"));

const App = () => {
  return (
    <React.Fragment>
      <Router>
        <Suspense fallback={<IsLoading />}>
          <Switch>
            <Route path="/" exact component={Search} />
            <Route path="*" exact component={NotFound} />
          </Switch>
        </Suspense>
      </Router>
    </React.Fragment>
  );
};

export default App;
