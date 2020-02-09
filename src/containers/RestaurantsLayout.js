import React from "react";
import NavBar from "../components/NavBar";
import RestaurantsMapWrapper from "../components/RestaurantsMapWrapper"
import RestaurantMenu from "../components/RestaurantMenu"
import RestaurantCard from "../components/RestaurantCard"
import { Container, Segment, Card, Grid, Header } from "semantic-ui-react";

const restaurants = [
  {
    name: "Casa Columbia",
    lat: 30.260846,
    lng: -97.714576,
    desc: "A columbian place"
  },
  {
    name: "Usta Kababgy",
    lat: 30.365631,
    lng: -97.695010,
    desc: "A Turkish place"
  },
  {
    name: "Aster's Ethiopian",
    lat: 30.287478,
    lng: -97.725037,
    desc: "An Ethiopian place"
  },
  {
    name: "Himalaya Kosheli",
    lat: 30.432962,
    lng: -97.770067,
    desc: "A Nepali place"
  },
  {
    name: "Sassy's Vegetarian SOUL Food",
    lat: 30.264578,
    lng:  -97.727277,
    desc: "A vegetarian Soul food place"
  }
];


export default class RestaurantsLayout extends React.Component {

    state = {
      restaurants: restaurants
    }
  
  render() {
    return (
      <Container style={{ marginTop: "5em" }}>
    <Segment raised style={{ overflow: "auto", maxHeight: "45em" }}>
      <RestaurantMenu />
      <Grid>
        <Grid.Row>
          <Grid.Column width={10}>
            <RestaurantsMapWrapper restaurants={this.state.restaurants} />
          </Grid.Column>
          <Grid.Column width={6}>
           <Header>Hello from Card section</Header>
           {this.state.restaurants.map((restaurant, index) => (
             <RestaurantCard 
              href="#restaurants"
              key={index}
              desc= {restaurant.desc}
              name= {restaurant.name}
             />
           ))}
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
  </Container>
    )
  }
}



// export default function RestaurantsLayout() {
//   return (

//     <Container style={{ marginTop: "5em" }}>
//     <Segment raised style={{ overflow: "auto", maxHeight: "45em" }}>
//       <RestaurantMenu />
//       <Grid>
//         <Grid.Row>
//           <Grid.Column width={10}>
//             <RestaurantsMapWrapper />
//           </Grid.Column>
//           <Grid.Column width={6}>
//            <Header>Hello from Card section</Header>
//           </Grid.Column>
//         </Grid.Row>
//       </Grid>
//     </Segment>
//   </Container>
  


 
//   );
// }
