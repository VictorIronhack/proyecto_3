import React, { Component } from 'react'
import { Marker } from '@react-google-maps/api'
import irongym from './markers/irongym_eventos.svg'

export default class Markers extends Component {
    
   

    createMarkers() {
       
  
        return this.props.markers?.map( (marker, idx) => {
         return marker.location  && <Marker
           position={{lat: marker.location?.coordinates[0], lng: marker.location?.coordinates[1]}}
           key={idx}
            icon={
                irongym
                }
          />
        })
       }

    render() {
        return (
            <div>
                {this.createMarkers()}
            </div>
        )
    }
}
