import { travels } from "../../data/travels";
import { useParams } from "react-router-dom";
import { NavLink } from "react-router-dom";

export default function TravelDetailPage() {
  const { id } = useParams();
  const travel = travels.find((t) => t.id === Number(id));

  if (!travel) {
    return <p>Viaggio non trovato</p>;
  }

  return (
    <div className="container">
      <h1 className="mt-4">Dettagli del viaggio</h1>

      <div className="card my-3">
        <div className="card-body">
          <h5 className="card-title">{travel.destination}</h5>
          <h6 className="card-subtitle mb-2 text-muted">
            Data di partenza: {travel.startDate}
          </h6>
          <h6 className="card-subtitle mb-2 text-muted">
            Data di arrivo: {travel.endDate}
          </h6>
          <p className="card-text">Coordinatore: {travel.coordinator}</p>
          <NavLink to="/viaggi" className="nav-item">
            Torna ai viaggi{" "}
          </NavLink>
        </div>
      </div>

      <div>Lista partecipanti al viaggio</div>
    </div>
  );
}
