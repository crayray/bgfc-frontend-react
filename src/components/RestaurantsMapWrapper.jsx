// Import React and React DOM
import * as React from 'react'
import { render } from 'react-dom'

// Import Google Map component
import RestaurantsMapWithMarker from './RestaurantsMapWithMarker'
import RestaurantstMapWithMarker from './RestaurantsMapWithMarker'

// Some default styles
const styles = {
  width: '100%',
  height: '536px'
}



// Wrapper with Google Map component
export default class RestaurantsMapWrapper extends React.PureComponent {
  render() {
    return (
      <div style={styles}>
        <RestaurantstMapWithMarker
          googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyChkcNWsbgnkc5TWBz3p-izkTOGh4Dx0SQ"
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={<div style={{ height: `100%` }} />}
          mapElement={<div style={{ height: `100%` }} />}
        />
      </div>
    )
  }
}