import { NavLink } from "react-router-dom";

export default function TravelCard({ travel }) {
  return (
    <>
      <div className="d-flex justify-content-center align-items-center flex-column">
        <div className="card col-4   my-2 p-4">
          <div className="card-body mb-3">
            <h5 className="card-title">{travel.destination}</h5>
            <h6 className="card-subtitle mb-2 text-muted">
              Data di partenza: {travel.startDate}
            </h6>
            <h6 className="card-subtitle mb-2 text-muted">
              Data di arrivo: {travel.endDate}
            </h6>
            <p className="card-text">Coordinatore: {travel.coordinator}</p>
          </div>
        </div>
        <NavLink to="/viaggi" className="nav-item">
          Torna ai viaggi{" "}
        </NavLink>
      </div>
    </>
  );
}
