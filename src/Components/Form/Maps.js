import React, { useEffect, useRef } from "react";
import L from "leaflet";
const MAPBOX_KEY =
  "pk.eyJ1Ijoic2FydmVzaGsxMSIsImEiOiJja241MXlkMWQxbGc4Mm5vMmk2OWN5c3YxIn0.ehO_sMKvUvya_F5Nk0Dllw";
const style = {
  width: "100%",
  height: "400px",
};

function Map({ markerPosition, latitude, longitude }) {
  const mapRef = useRef(null);
  useEffect(() => {
    mapRef.current = L.map("map", {
      center: [latitude, longitude],
      zoom: 10,
      layers: [
        L.tileLayer("http://{s}.tile.osm.org/{z}/{x}/{y}.png", {
          attribution:
            '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
        }),
      ],
    });
  }, []);

  // add marker
  const markerRef = useRef(null);
  useEffect(() => {
    if (markerRef.current) {
      markerRef.current.setLatLng(markerPosition);
    } else {
      markerRef.current = L.marker(markerPosition).addTo(mapRef.current);
    }
  }, [markerPosition]);

  return <div id="map" style={style} />;
}

export default Map;
