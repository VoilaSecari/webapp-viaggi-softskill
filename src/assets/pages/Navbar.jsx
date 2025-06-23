import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-md bg-body-tertiary">
      <div className="container-fluid">
        <NavLink to="/" className="navbar-brand">
          BOOROAD
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
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink to="/" className="nav-link">
                HomePage
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/viaggi" className="nav-link">
                Viaggi
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
