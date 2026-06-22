import MapView from "../components/MapView";

function MapPage({ selectedRoute }) {
  return (
    <>
      <div className="page-hero map-hero">
        <h1>Interactive Route Planner</h1>
        <p>
          Visualize selected routes on map.
        </p>
      </div>

      <section className="map-section">

        {selectedRoute && (

          <div className="card" style={{ marginBottom: "20px" }}>
            <h2>
              {selectedRoute.from}
              {" → "}
              {selectedRoute.to}
            </h2>

            <p>
              Distance:
              {" "}
              {selectedRoute.distance}
            </p>

            <p>
              Duration:
              {" "}
              {selectedRoute.time}
            </p>
          </div>

        )}

        <MapView
          selectedRoute={selectedRoute}
        />

      </section>
    </>
  );
}

export default MapPage;