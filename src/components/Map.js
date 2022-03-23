import axios from "axios";
import { useRef, useEffect, useState } from "react";
import mapboxgl from "mapbox-gl";
import './Map.css'


mapboxgl.accessToken =
  "pk.eyJ1Ijoid29sZmdhbmdjcnVzYWRlciIsImEiOiJjbDBsOTA4b3owZmVxM2JwZWRpcnJkZ2x3In0.EAXqRGKAgKmXD9zLOguiPA";

const MapLocations = () => {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng, setLng] = useState(174.4259345);
  const [lat, setLat] = useState(-36.859482);
  const [zoom, setZoom] = useState(10);

  useEffect(() => {
    if (map.current) return; // initialize map only once
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/streets-v11",
      center: [lng, lat],
      zoom: zoom,
    });
  });

  return (
    <div>
      <div ref={mapContainer} className="map-container" />
    </div>
  );
};

export default MapLocations;
