function RouteCard({
  route,
  onViewMap
}) {
  return (
    <div className="card">

      <h2>
        📍 {route.from} → {route.to}
      </h2>

      <p>
        <strong>Distance:</strong>{" "}
        {route.distance}
      </p>

      <p>
        <strong>Travel Time:</strong>{" "}
        {route.time}
      </p>

      <p>
        <strong>Recommended Stay:</strong>{" "}
        {route.hotel}
      </p>

      <h4
        style={{
          marginTop: "15px",
          marginBottom: "10px"
        }}
      >
        Scenic Stops
      </h4>

      <ul>
        {route.stops.map(
          (stop, index) => (
            <li key={index}>
              {stop}
            </li>
          )
        )}
      </ul>

      <button
        onClick={onViewMap}
        style={{
          marginTop: "20px",
          width: "100%",
          padding: "12px",
          border: "none",
          borderRadius: "8px",
          background: "#2563eb",
          color: "white",
          cursor: "pointer",
          fontWeight: "bold"
        }}
      >
        View On Map
      </button>

    </div>
  );
}

export default RouteCard;