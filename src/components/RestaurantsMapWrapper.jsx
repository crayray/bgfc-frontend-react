import * as React from "react";
import { render } from "react-dom";
// Import Google Map component
import RestaurantsMapWithMarker from "./RestaurantsMapWithMarker";

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
  }
];

// Some default styles
const styles = {
  width: "80%",
  height: "536px"
};

// Wrapper with Google Map component
class RestaurantsMapWrapper extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      infoboxMessage: "",
      isInfoboxVisible: false,
      markerLang: 0,
      markerLat: 0,
      restaurants: restaurants
    };
  }

  handleMarkerClick = (message, lang, lat) => {
    this.setState({
      infoboxMessage: message, // Message shown in info window
      isInfoboxVisible: !this.state.isInfoboxVisible, // Show info window
      markerLang: lang + 0.006, // Y coordinate for positioning info window
      markerLat: lat - 0.0004 // X coordinate for positioning info window
    });
  };

  handleInfoboxClick = () => {
    this.setState({
      isInfoboxVisible: false
    });
  };

  render() {
    return (
      <div style={styles}>
        <RestaurantsMapWithMarker
          googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyChkcNWsbgnkc5TWBz3p-izkTOGh4Dx0SQ"
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={<div style={{ height: `100%` }} />}
          mapElement={<div style={{ height: `100%` }} />}
          isInfoboxVisible={this.state.isInfoboxVisible} // Show/hide info window
          infoboxMessage={this.state.infoboxMessage} // Message shown in info window
          handleInfoboxClick={this.handleInfoboxClick} // Handle closing of the info window
          handleMarkerClick={this.handleMarkerClick} // Handle click on Marker component
          infoboxPosY={this.state.markerLang} // Y coordinate for positioning info window
          infoboxPosX={this.state.markerLat} // X coordinate for positioning info window
          restaurants={this.state.restaurants}
        />
      </div>
    );
  }
}

export default RestaurantsMapWrapper;
