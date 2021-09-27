import React from 'react'
import './maps.css'

export default function maps() {




  return (
    <div class="container">

    <h1>Mapa básico</h1>
    <hr/>
    <figure id="myMap"></figure>

    <script src="/js/directions.js"></script>
    <script src="/js/mapStyles.js"></script>
    <script src="/js/basic-map-setup.js"></script>
    <script src="https://maps.googleapis.com/maps/api/js?key=____YOUR_API_KEY_HERE_____&callback=initMap"></script>

    </div>
  )
}
