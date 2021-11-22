import React from "react";
import { Route } from "react-router";
import Dashboard from "../dashboard/Dashboard";
import CreateFolder from "../gallery/CreateFolder";
import Gallery from "../gallery/Gallery";
import GalleryDetail from "../gallery/GalleryDetail";
import Measurements from "../measurements/Measurements";
import PageHeader from "../PageHeader";
import Plans from "../plans/Plans";
import Services from "../services/Services";
import EditShop from "../static-shops/EditShop";
import StaticShops from "../static-shops/StaticShops";
import Users from "../users/Users";
import CreateShop from "../static-shops/CreateShop";
import MeasurementIcon from "../measurementIcon/MeasurementIcon";
import NewMeasurement from "../measurements/NewMeasurement";
import NewService from "../services/NewService";
import NewPlan from "../plans/NewPlan";

function Main() {
  return (
    <main className="mainBar">
      <Route exact path="/dashboard">
        <PageHeader heading={"Dashboard"} />
        <Dashboard />
      </Route>
      <Route exact path="/services">
        <PageHeader heading={"Services"} />
        <Services />
      </Route>
      <Route exact path="/services/create-new">
        <PageHeader heading={"Services"} />
        <NewService />
      </Route>
      <Route exact path="/shops">
        <PageHeader heading={"Shops"} />
        <StaticShops />
      </Route>
      <Route exact path="/shops/create-shop">
        <PageHeader heading={"Create Shop"} />
        <CreateShop />
      </Route>
      <Route exact path="/shops/edit-shop/:shop_id">
        <PageHeader heading={"Edit Shop"} />
        <EditShop />
      </Route>
      <Route exact path="/gallery">
        <PageHeader heading={"Gallery"} />
        <Gallery />
      </Route>
      <Route exact path="/gallery/create-folder">
        <PageHeader heading={"Gallery"} />
        <CreateFolder />
      </Route>
      <Route exact path="/gallery/:folderName">
        <PageHeader heading={"Gallery"} />
        <GalleryDetail />
      </Route>
      <Route exact path="/measurements">
        <PageHeader heading={"Measurements"} />
        <Measurements />
      </Route>
      <Route exact path="/measurements/create-new">
        <PageHeader heading={"Measurements"} />
        <NewMeasurement />
      </Route>
      <Route exact path="/measurement-icons">
        <PageHeader heading={"Measurement Icon"} />
        <MeasurementIcon />
      </Route>
      <Route exact path="/plans">
        <PageHeader heading={"Plans"} />
        <Plans />
      </Route>
      <Route exact path="/plans/add-plan">
        <PageHeader heading={"Plans"} />
        <NewPlan />
      </Route>
      <Route exact path="/users">
        <PageHeader heading={"My Users"} />
        <Users />
      </Route>
    </main>
  );
}

export default Main;
