// Utils
import React, { useRef, useEffect, useState } from "react";
import mapboxgl from "!mapbox-gl"; // eslint-disable-line import/no-webpack-loader-syntax
import "mapbox-gl/dist/mapbox-gl.css";

const Map = () => {
  mapboxgl.accessToken =
    "pk.eyJ1IjoiaGF3a3JpY2siLCJhIjoiY201bnBmM2FoMGIwcDJpczY2ZGl3N2JpZiJ9.5vKSBpTOPz1yX7xeMCfwjg";

  const mapContainer = useRef(null); // Référence au conteneur de la carte
  const map = useRef(null); // Instance de la carte
  const [lng, setLng] = useState(-0.5792); // Longitude initiale
  const [lat, setLat] = useState(44.8378); // Latitude initiale
  const [zoom, setZoom] = useState(9); // Zoom initial
  const style = "mapbox://styles/hawkrick/ckqm0dcs94swv17pm9z342cy5"; // Style Mapbox

  useEffect(() => {
    if (map.current) return; // Initialisation unique de la carte
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: style,
      center: [lng, lat],
      zoom: zoom,
    });

    // Ajuster la carte après son chargement
    map.current.on("load", () => {
      map.current.resize();
    });
  }, [lng, lat, zoom, style]); // Dépendances pour actualiser au besoin

  return (
    <div className="map">
      <div ref={mapContainer} className="map-container" />
    </div>
  );
};

export default Map;
