import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <h2>ScenicRoute</h2>

      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>

        <li>
          <Link to="/routes">Routes</Link>
        </li>

        <li>
          <Link to="/map">Map</Link>
        </li>

        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;