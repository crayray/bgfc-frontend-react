import React from "react";
import NavBar from "../components/NavBar";

export default function RestaurantsLayout() {
  return (
    <div>
      <NavBar />
      <div style={{ backgroundColor: "red" }}>
        <h1>This is the Restaurants page</h1>
      </div>
    </div>
  );
}
