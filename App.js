import React from "react";
import ReactDOM from "react-dom/client";
import HeaderComponent from "./components/HeaderComponent";
import RestaurantContainer from "./components/RestaurantContainer";

const AppLayout = () => (
  <div className="app-layout">
    <HeaderComponent />
    <RestaurantContainer />
  </div>
)

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
