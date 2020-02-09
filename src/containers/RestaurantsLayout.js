import React from "react";
import NavBar from "../components/NavBar";
import RestaurantsMapWrapper from "../components/RestaurantsMapWrapper"


export default function RestaurantsLayout() {
  return (
    <div>
      {/* <NavBar /> */}
     
        <h1>This is the Restaurants page</h1>
        <RestaurantsMapWrapper />
    
    </div>
  );
}
