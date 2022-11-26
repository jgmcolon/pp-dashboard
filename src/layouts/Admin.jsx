import React from "react";
import {Switch, Route, Redirect} from "react-router-dom";
import {Islogin} from "helper/DataStorage"
// components

import AdminNavbar from "components/Navbars/AdminNavbar.js";
import Sidebar from "components/Sidebar/Sidebar.js";
import FooterAdmin from "components/Footers/FooterAdmin.js";

// pages

import Dashboard from "pages/home/Dashboard.jsx";


export default function Admin() {
  return (
    <>
      <Sidebar />
      <div className="relative md:ml-64">
        <AdminNavbar />
        {/* Header */}
        <div className="w-full">
          <Switch>
              {Islogin() ? <Route path="/admin/dashboard" exact component={Dashboard} /> : <Redirect  to="/" />}
          </Switch>
          <FooterAdmin />
        </div>
      </div>
    </>
  );
}
