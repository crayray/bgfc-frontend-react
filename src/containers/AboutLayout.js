import React from "react";
import NavBar from "../components/NavBar";
import { Container, Segment, Grid, Header, Image } from "semantic-ui-react";
import Founders from "../components/Founders";

export default function AboutLayout() {
  return (
    <div className="about-background">
      <Container className="about-container">
        <Founders  />
      </Container>
    </div>
  );
}
