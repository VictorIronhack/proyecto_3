import React, { Component } from 'react'
import { Marker } from '@react-google-maps/api'
import irongym from './markers/irongym.svg'

export default class Markers extends Component {
    
   

    createMarkers() {

    const marker =[{lat: 40.399270766841504, lng: -3.698118461457281},{lat: 41.3978615968286, lng: 2.1906943703985786},{lat: 38.71150704455419, lng: -9.124736353765078},{lat: 28.197021822524928, lng: -79.85346066086757},{lat: 52.533150445119546, lng: 13.453368001524698}]

        return marker?.map( (marker, idx) => {
         return  <Marker
           position={{lat: marker.lat, lng: marker.lng}}
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
