import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import "@fortawesome/fontawesome-free/css/all.min.css";
import "assets/styles/tailwind.css";

import "./multilanguage";

// layouts

import Admin from "layouts/Admin.jsx";
import Auth from "layouts/Auth.jsx";

// pages without layouts



ReactDOM.render(
  <BrowserRouter>
    <Switch>
      {/* add routes with layouts */}
      <Route path="/admin" component={Admin} />
      <Route path="/auth" component={Auth} />
      {/* add redirect for first page */}
      <Redirect from="*" to="/auth/login" />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
