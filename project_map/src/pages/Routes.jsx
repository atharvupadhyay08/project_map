import { useState } from "react";
import { useNavigate } from "react-router-dom";

import routes from "../data/routes.json";
import RouteCard from "../components/RouteCard";

function RoutesPage() {
  const navigate = useNavigate();

  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");

  const [results, setResults] = useState(routes);

  const handleSearch = () => {
    const filtered = routes.filter(
      (route) =>
        route.from.toLowerCase().includes(from.toLowerCase()) &&
        route.to.toLowerCase().includes(to.toLowerCase())
    );

    setResults(filtered);
  };

  const handleViewMap = (route) => {
    localStorage.setItem(
      "selectedRoute",
      JSON.stringify(route)
    );

    navigate("/map");
  };

  return (
    <>
      <div className="page-hero routes-hero">
        <h1>Explore India's Scenic Routes</h1>

        <p>
          Discover breathtaking journeys,
          hidden gems and unforgettable road trips.
        </p>
      </div>

      <div className="search-container">

        <input
          type="text"
          placeholder="From (Mumbai)"
          value={from}
          onChange={(e) => setFrom(e.target.value)}
        />

        <input
          type="text"
          placeholder="To (Goa)"
          value={to}
          onChange={(e) => setTo(e.target.value)}
          style={{ marginLeft: "10px" }}
        />

        <button
          onClick={handleSearch}
          style={{
            marginLeft: "10px",
            padding: "15px 25px",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
            background: "#2563eb",
            color: "white"
          }}
        >
          Find Route
        </button>

      </div>

      <section className="routes-section">

        <h2>Available Scenic Routes</h2>

        <div className="grid">

          {results.length > 0 ? (
            results.map((route) => (
              <RouteCard
                key={route.id}
                route={route}
                onViewMap={() =>
                  handleViewMap(route)
                }
              />
            ))
          ) : (
            <h3
              style={{
                textAlign: "center",
                gridColumn: "1/-1"
              }}
            >
              No routes found.
            </h3>
          )}

        </div>

      </section>
    </>
  );
}

export default RoutesPage;