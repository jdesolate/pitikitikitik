import { useEffect, useRef } from "react";
import mapboxgl from "mapbox-gl";

import "mapbox-gl/dist/mapbox-gl.css";

const MapboxExample = () => {
  const mapContainerRef = useRef();
  const mapRef = useRef();
  const mapBoxAccessToken = import.meta.env.VITE_MAPBOX_ACCESS_TOKEN;
  const CEBU_MAP_COORDINATES = {
    latitude: 10.32521,
    longitude: 123.90011,
  };

  useEffect(() => {
    mapboxgl.accessToken = mapBoxAccessToken;

    mapRef.current = new mapboxgl.Map({
      container: mapContainerRef.current,
      center: [CEBU_MAP_COORDINATES.longitude, CEBU_MAP_COORDINATES.latitude], // starting position [lng, lat]
      zoom: 9, // starting zoom
    });
  });

  return (
    <div
      style={{ height: "100%" }}
      ref={mapContainerRef}
      className="map-container"
    />
  );
};

export default MapboxExample;
