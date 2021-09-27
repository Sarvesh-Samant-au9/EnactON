import React, { useEffect, useRef } from "react";
import L from "leaflet";

const style = {
  width: "100%",
  height: "400px",
};

function Map({ lat, lng }) {
  const mapRef = useRef(null);
  useEffect(() => {
    mapRef.current = L.map("map", {
      center: [lat, lng],
      zoom: 6,
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
      markerRef.current.setLatLng({ lat, lng });
    } else {
      markerRef.current = L.marker({ lat, lng }).addTo(mapRef.current);
    }
  }, [lat, lng]);

  return (
    <div>
      <div id="map" style={style} />;
    </div>
  );
}

export default Map;
