import React, { Component } from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';
import Markers from './Markers';
import IronhackMarkers from './IronhackMarkers'




const containerStyle = {
  width: '100%',
  height: '400px'
};

const center = {
  lat: 40.38788706225885,
  lng: -3.691818862410565
};

class Map extends Component {


  render() {
    return (
      <LoadScript googleMapsApiKey= {process.env.REACT_APP_GOOGLE_MAPS_API_KEY}>
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={10}
        //   options={{
        //     styles: mapStyles.celeste
        // }}  
        >
        {/* { this.props.location.pathname.includes("event")
            ? <Markers markers={this.props.markers} />
            : <IronhackMarkers />
        } */}
        </GoogleMap>
        <Markers />
      </LoadScript>
    )
  }
}


export default Map