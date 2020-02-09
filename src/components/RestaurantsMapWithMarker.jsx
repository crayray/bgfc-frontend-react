// GoogleMapWithMarker.jsx

// Import React
import * as React from 'react'

// Import necessary components for React Google Maps
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
  InfoWindow
} from 'react-google-maps'

// Import custom styles to customize the style of Google Map
const styles = require('./GoogleMapStyles.json')

// Import custom icon for map marker
// You can use this if you need to support IE11 and lower.
// const mapMarker = require('./GoogleMapMarker.svg')

// Google Map component
const RestaurantsMapWithMarker = withScriptjs(
  withGoogleMap(props => (
    <GoogleMap
      defaultZoom={13}
      defaultCenter={{
        lat: 30.267593, // latitude for the center of the map
        lng:  -97.742508 // longitude for the center of the map
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

      {props.restaurants.map( (restaurant, index) => (
        <Marker 
            key= {index}
            icon={{
              url:
            "http://localhost:3000/Brown-Girls-Food-Club-Logo-01.svg"
            }}
            position={{
          lat: restaurant.lat,
          lng: restaurant.lng
        }}
        />
        )
      )}
      {/* <Marker
       icon={{
          url:
            "http://localhost:3000/Brown-Girls-Food-Club-Logo-01.svg" // This may not work in <=IE11
        }}
        
        position={{
          lat: 30.260846,
          lng: -97.714576
        }}
        onClick={(message, lang, lat) =>
          props.handleMarkerClick(
            'Custom Google Map marker with infobox!',
            30.260846,
            -97.714576
          )
        } // Get the data that will be used for InfoWindow.
      /> */}

      {props.isInfoboxVisible && (
        <InfoWindow
          position={{
            lat: props.infoboxPosY,
            lng: props.infoboxPosX
          }}
          onCloseClick={() => props.handleInfoboxClick()}
        >
          <div>
            <h4>{props.infoboxMessage}</h4>
          </div>
        </InfoWindow>
      )}
 
    </GoogleMap>
  ))
)

// Export Google Map component
export default RestaurantsMapWithMarker