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
    desc: "A columbian place",
    cuisine: "Columbian",
    yelp: "https://www.yelp.com/biz/casa-colombia-austin-2"
  },
  {
    name: "Usta Kababgy",
    lat: 30.365631,
    lng: -97.695010,
    desc: "A Turkish place",
    cuisine: "Turkish",
    yelp: "https://www.yelp.com/biz/usta-kababgy-austin"
  },
  {
    name: "Aster's Ethiopian",
    lat: 30.287478,
    lng: -97.725037,
    desc: "An Ethiopian place",
    cuisine: "Ethiopian",
    yelp: "https://www.yelp.com/biz/asters-ethiopian-restaurant-austin"
  },
  {
    name: "Himalaya Kosheli",
    lat: 30.432962,
    lng: -97.770067,
    desc: "A Nepali place",
    cuisine: "Nepali",
    yelp: "https://www.yelp.com/biz/himalaya-kosheli-austin"
  },
  {
    name: "Sassy's Vegetarian SOUL Food",
    lat: 30.264578,
    lng:  -97.727277,
    desc: "A vegetarian Soul food place",
    cuisine: "Soul Food/Vegetarian",
    yelp: "https://www.yelp.com/biz/sassys-vegetarian-soul-food-austin-3"
  }
];


export default class RestaurantsLayout extends React.Component {

    state = {
      restaurants: restaurants,
      searchField: "",
      cuisineFilter: " ",
      selectedRestaurant: "",
      markerLat: "",
      infoboxMessage: ""

    }
  
    onSearchChange= event => {
      
      this.setState({
        searchField: event.target.value
      })
      
    }
    
    handleSelect = (message, lang, lat) => {
      console.log(message)
      console.log(lang)
      console.log(lat)
    }


    // handleMarkerClick = (message, lang, lat ) => {
    //   this.setState({
    //     infoboxMessage: message, // Message shown in info window
    //     isInfoboxVisible: !this.state.isInfoboxVisible, // Show info window
    //     markerLang: lang + 0.006, // Y coordinate for positioning info window
    //     markerLat: lat - 0.0004, // X coordinate for positioning info window
    //     selectedRestaurant: message

    //   })
    // }
  
  

  render() {
    const cuisineFilteredRestuarants = this.state.restaurants.filter(restaurant => {
      return restaurant.cuisine.toLowerCase().includes(this.state.searchField.toLowerCase());
   })
    return (
      <div style={{backgroundColor: "#E2DEB4"}}>
      <Container style={{ paddingTop: "5em" }}>
    <Segment raised style={{ overflow: "auto"}}>
      <Grid stackable columns={2}>
        <Grid.Row>
          <Grid.Column width={10}>
          <Header>Checkout for restaurants near you:</Header> 
            <RestaurantsMapWrapper restaurants={this.state.restaurants} handleSelect={this.handleMarkerSelect}/>
          </Grid.Column>
          <Grid.Column width={6}>
          <Header style={{textAlign: "center", marginBottom:"10px"}}>Search our list of restaurants by cuisine:</Header>
          <RestaurantMenu onSearchChange={this.onSearchChange}/>
           {cuisineFilteredRestuarants.map((restaurant, index) => (
             <RestaurantCard 
              href="#restaurants"
              key={index}
              desc= {restaurant.desc}
              name= {restaurant.name}
              cuisine={restaurant.cuisine}
              yelp={restaurant.yelp}
             />
           ))}
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
  </Container>
  </div>
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
