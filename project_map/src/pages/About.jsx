function About() {
  return (
    <>
      <div className="page-hero about-hero">
        <h1>About Scenic Route Explorer</h1>

        <p>
          Helping travelers discover beautiful
          journeys, not just destinations.
        </p>
      </div>

      <section className="about-content">
        <h2>Our Mission</h2>

        <p>
          Scenic Route Explorer helps travelers
          find scenic road trips, attractions,
          accommodations and memorable experiences.
        </p>

        <h2>Technology Stack</h2>

        <div className="grid">

          <div className="card">
            <h3>React</h3>
            <p>
              Component-based frontend development.
            </p>
          </div>

          <div className="card">
            <h3>JavaScript</h3>
            <p>
              Dynamic rendering and interactions.
            </p>
          </div>

          <div className="card">
            <h3>Leaflet.js</h3>
            <p>
              Interactive maps and route visualization.
            </p>
          </div>

          <div className="card">
            <h3>CSS3</h3>
            <p>
              Responsive modern user interface.
            </p>
          </div>

        </div>

        <br />
        <br />

        <h2>Future Enhancements</h2>

        <ul>
          <li>User Authentication</li>
          <li>Saved Trips</li>
          <li>AI Route Recommendations</li>
          <li>Weather Forecast Integration</li>
          <li>Hotel Booking System</li>
        </ul>
      </section>
    </>
  );
}

export default About;