// GoogleMapWithMarker.jsx

// Import React
import * as React from "react";
import { Image, Card, Segment, Grid } from "semantic-ui-react";

// Import necessary components for React Google Maps
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
  InfoWindow
} from "react-google-maps";

// Import custom styles to customize the style of Google Map
const styles = require("./GoogleMapStyles.json");

// Import custom icon for map marker
// You can use this if you need to support IE11 and lower.
// const mapMarker = require('./GoogleMapMarker.svg')

// Google Map component
const RestaurantsMapWithMarker = withScriptjs(
  withGoogleMap(props => (
    <GoogleMap
      defaultZoom={11}
      defaultCenter={{
        lat: 30.293818, // latitude for the center of the map
        lng: -97.734308 // longitude for the center of the map
      }}
      defaultOptions={{
        disableDefaultUI: true, // disable default map UI
        draggable: true, // make map draggable
        keyboardShortcuts: false, // disable keyboard shortcuts
        scaleControl: true, // allow scale controle
        scrollwheel: true, // allow scroll wheel
        styles: styles // change default map styles
      }}
    >
      {props.restaurants.map((restaurant, index) => (
        <Marker
          key={index}
          icon={{
            url: "http://localhost:3000/logos/bgfc_pindrops_purple.svg"
           
          }}
          position={{
            lat: restaurant.lat,
            lng: restaurant.lng
          }}
          onClick={() =>
            props.handleMarkerClick(
              restaurant.name,
              restaurant.lat,
              restaurant.lng
            )
          }
        />
      ))}

      {props.isInfoboxVisible && (
        <InfoWindow
          position={{
            lat: props.infoboxPosY,
            lng: props.infoboxPosX
          }}
          onCloseClick={() => props.handleInfoboxClick()}
        >
        {/* <Card> */}
        <Segment>
          <Grid>
            {/* <Grid.Row> */}
            <Grid.Column >
                <Image
                  size="mini"
                  src="http://localhost:3000/Brown-Girls-Food-Club-Logo-01.svg"
                  floated="left"
                />
                 <h4>{props.infoboxMessage}</h4>
                </Grid.Column>
               
            {/* </Grid.Row> */}
          </Grid>
          </Segment>
          {/* </Card> */}
        </InfoWindow>
      )}
    </GoogleMap>
  ))
);

// Export Google Map component
export default RestaurantsMapWithMarker;
