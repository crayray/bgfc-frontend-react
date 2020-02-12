import React from "react";
import NavBar from "../components/NavBar";

import { Image} from "semantic-ui-react";

export default function AboutLayout() {
  return (
    <div>
      {/* <NavBar /> */}
      <div
        style={{
          backgroundColor: "green"
        }}
      >
        <p>This is ABOUT</p>
      </div>

      <Image src="http://localhost:3000/market.jpg" />
    </div>
  );
}
