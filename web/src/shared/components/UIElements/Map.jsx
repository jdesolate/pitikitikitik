import { useEffect, useRef } from "react";
import mapboxgl from "mapbox-gl";

import "mapbox-gl/dist/mapbox-gl.css";

import "./Map.css";

const Map = (props) => {
  const mapContainerRef = useRef();
  const mapRef = useRef();

  const mapBoxAccessToken = import.meta.env.VITE_MAPBOX_ACCESS_TOKEN;

  const { center, zoom } = props;

  useEffect(() => {
    mapboxgl.accessToken = mapBoxAccessToken;

    mapRef.current = new mapboxgl.Map({
      container: mapContainerRef.current,
      center: [center.lng, center.lat],
      zoom: zoom,
    });
  }, [center, zoom]);

  return (
    <div
      ref={mapContainerRef}
      className={`map ${props.className}`}
      style={props.style}
    ></div>
  );
};

export default Map;
