import React, { useEffect, useState } from "react";
import { Route } from "react-router";
import { BrowserRouter } from "react-router-dom";
import NotFound from "./components/NotFound";
import Search from "./components/Search"


const App = () => {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Search}/>
      <Route path="*" exact component={NotFound}/>
    </BrowserRouter>
  );
};

export default App;
