import { useState } from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import RoutesPage from "./pages/Routes";
import MapPage from "./pages/MapPage";
import About from "./pages/About";

function App() {
  const [selectedRoute, setSelectedRoute] = useState(null);

  return (
    <>
      <Navbar />

      <Routes>
        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/routes"
          element={
            <RoutesPage
              setSelectedRoute={setSelectedRoute}
            />
          }
        />

        <Route
          path="/map"
          element={
            <MapPage
              selectedRoute={selectedRoute}
            />
          }
        />

        <Route
          path="/about"
          element={<About />}
        />
      </Routes>
    </>
  );
}

export default App;