import React from "react";
import Components from "../components/pages/Components";
import Dashboard from "../components/pages/Dashboard";
import Fragments from "../components/pages/Fragments";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function AccelerateRouter() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Dashboard} />
        <Route path="/components" component={Components} />
        <Route path="/fragments" component={Fragments} />
      </Switch>
    </Router>
  );
}

export default AccelerateRouter;
