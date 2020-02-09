import React from "react";
import NavBar from "../components/NavBar";
import RestaurantsMapWrapper from "../components/RestaurantsMapWrapper"
import RestaurantMenu from "../components/RestaurantMenu"
import { Container, Segment, Card, Grid, Header } from "semantic-ui-react";


export default function RestaurantsLayout() {
  return (

    <Container style={{ marginTop: "5em" }}>
    <Segment raised style={{ overflow: "auto", maxHeight: "45em" }}>
      <RestaurantMenu />
      <Grid>
        <Grid.Row>
          <Grid.Column width={8}>
            <RestaurantsMapWrapper />
          </Grid.Column>
          <Grid.Column width={8}>
           <Header>Hello from Card section</Header>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
  </Container>
    // <div>
    // <Segment style={{ padding: "8em 0em" }} vertical>
    //       <Grid container>
    //         <Grid.Row>
    //           <Container centered textAlign="center">
    //             <Header>Upcoming Events</Header>
    //           </Container>
    //         </Grid.Row>
    //       </Grid>
    //     </Segment>
    //     <Segment style={{ padding: "8em 0em" }} vertical>
    //       <Grid container stackable verticalAlign="middle">
    //         <Grid.Row>
    //           <Container centered>
    //         <RestaurantsMapWrapper />
    //           </Container>
    //         </Grid.Row>
    //         <Grid.Row></Grid.Row>
    //       </Grid>
    //     </Segment>
    //     </div>




    // <div>
     
    //     <h1>This is the Restaurants page</h1>
    //     <RestaurantsMapWrapper />
    //   </div>
   
  );
}
