import axios from "axios";
import { useRef, useEffect, useState, useMemo} from "react";
import mapboxgl from "mapbox-gl";
import './Map.css'
import Map, {Source, Layer, Popup, Marker} from 'react-map-gl';
import HouseMarker from "../images/marker.png"
import LISTINGS from './geo.json';


mapboxgl.accessToken =
  "pk.eyJ1Ijoid29sZmdhbmdjcnVzYWRlciIsImEiOiJjbDBsOTA4b3owZmVxM2JwZWRpcnJkZ2x3In0.EAXqRGKAgKmXD9zLOguiPA";



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
      initialViewState={{
        longitude: 174.6165136,
        latitude: -36.8791001,
        zoom: 10
      }}
      style={{width: 600, height: 400}}
      mapStyle="mapbox://styles/mapbox/streets-v9"
    >
{pins}

{popupInfo && (
  <Popup
    anchor="top"
    longitude={Number(popupInfo.longitude)}
    latitude={Number(popupInfo.latitude)}
    closeOnClick={false}
    onClose={() => setPopupInfo(null)}
  >
    <div>
      <a
        target="_new"
        href={`http://en.wikipedia.org/w/index.php?title=Special:Search&search=${popupInfo.city}, ${popupInfo.suburb}`}
      >
        Wikipedia
      </a>
    </div>
  </Popup>
)}
    </Map>
  );
};

export default MapLocations;