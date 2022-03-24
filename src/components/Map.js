import axios from "axios";
import { useRef, useEffect, useState, useMemo} from "react";
import { Card } from "react-bootstrap";
import {
  FaBed,
  FaBath
} from "react-icons/fa";
import mapboxgl from "mapbox-gl";
import './Map.css'
import Map, 
{Source,
Layer,
  Popup,
  Marker,
 NavigationControl,
  FullscreenControl,
  ScaleControl,
  GeolocateControl} from 'react-map-gl';
import HouseMarker from "../images/marker.png"
import LISTINGS from './geo.json';
import STYLINGS from './style.json'


const MapLocations = () => {

  const [showPopup, setShowPopup] = useState(true);

  const [popupInfo, setPopupInfo] = useState(null);

  const pins = useMemo(
    () =>
      LISTINGS.map((city, index) => (
        <Marker
          key={`marker-${index}`}
          longitude={city.longitude}
          latitude={city.latitude}
          anchor="bottom"
        >
          <div onClick={() => setPopupInfo(city)} ><img className="marker" src={HouseMarker} alt="Marker"/></div>
        </Marker>
      )),
    []
  );

  return (
    <Map
    id = "map"
      initialViewState={{
        longitude: 174.6165136,
        latitude: -36.8791001,
        zoom: 10,
        pitchAlignment: 'viewport',
        doubleClickZoom: true,
        trackResize: true,
        compact: false
      }}
      style={{width: '97vw', height: '80vh'}}
      mapStyle={STYLINGS}
    >

<GeolocateControl position="top-left" />
        <FullscreenControl position="top-left" />
        <NavigationControl position="top-left" />
        <ScaleControl />
{pins}

{popupInfo && (
  <Popup
    anchor="top"
    longitude={Number(popupInfo.longitude)}
    latitude={Number(popupInfo.latitude)}
    closeOnClick={false}
    onClose={() => setPopupInfo(null)}
  >
    
    <div className="popup">
    <div className="imgdiv"> 
    <img src={popupInfo.images} className="popupInfoimage" />        
    </div>
    <div className="detaildiv">
         <h4>{popupInfo.address}</h4>
         <p>Availble: {popupInfo.availability} 2022</p>
         <p><FaBed /> {popupInfo.bedroom_count}{" "} <FaBath />{" "}{popupInfo.bathroom_count}</p>
         <p className="popupprice">$ {popupInfo.price}</p> 
         <a
        target="_new"
        href={`${popupInfo.listing_id}`}
      > View Listing</a>    
      </div>
    </div>
  </Popup>
)}
    </Map>
  );
};

export default MapLocations;