import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-md site-navbar">
      <div className="container site-navbar__inner">
        <NavLink to="/" className="navbar-brand">
          <span className="brand-mark" aria-hidden="true">B</span>
          <span>BOOROAD<span className="brand-period">.</span></span>
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse site-navbar__links" id="navbarNav">
          <div className="navbar-nav">
            <NavLink to="/" end className="nav-link">
              Home
            </NavLink>
            <NavLink to="/viaggi" className="nav-link">
              Viaggi
            </NavLink>
          </div>
          <NavLink to="/viaggi" className="btn btn-primary navbar-cta">
            Pianifica un viaggio <span aria-hidden="true">↗</span>
          </NavLink>
        </div>
      </div>
    </nav>
  );
}
