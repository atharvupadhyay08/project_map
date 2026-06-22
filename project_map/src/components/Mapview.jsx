import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  Polyline
} from "react-leaflet";

function MapView({ selectedRoute }) {

  const defaultCenter = [22.9734, 78.6569];

  return (
    <MapContainer
      center={
        selectedRoute
          ? selectedRoute.fromCoords
          : defaultCenter
      }
      zoom={5}
      style={{
        height: "500px",
        width: "100%"
      }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {selectedRoute && (
        <>
          <Marker
            position={selectedRoute.fromCoords}
          >
            <Popup>
              {selectedRoute.from}
            </Popup>
          </Marker>

          <Marker
            position={selectedRoute.toCoords}
          >
            <Popup>
              {selectedRoute.to}
            </Popup>
          </Marker>

          <Polyline
            positions={[
              selectedRoute.fromCoords,
              selectedRoute.toCoords
            ]}
          />
        </>
      )}

    </MapContainer>
  );
}

export default MapView;