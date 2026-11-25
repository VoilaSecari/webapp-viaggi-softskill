import { NavLink } from "react-router-dom";
import { coordinators } from "../data/coordinators.js";
import formatDate from "../utils/formatDate.js";

export default function TravelCard({ travel }) {
  const coordinator = coordinators.find(
    (item) => item.id === travel.coordinator
  );
  return (
    <>
      <div className="travel-summary">
        <div className="travel-summary__content">
          <span className="eyebrow">Destinazione</span>
          <h2>{travel.destination}</h2>
          <div className="travel-summary__details">
            <div>
              <span>Partenza</span>
              <strong>{formatDate(travel.startDate)}</strong>
            </div>
            <div>
              <span>Rientro</span>
              <strong>{formatDate(travel.endDate)}</strong>
            </div>
            <div>
              <span>Coordinatore</span>
              <strong>
                {coordinator
                  ? `${coordinator.name} ${coordinator.surname}`
                  : travel.coordinator || travel.coordinators}
              </strong>
            </div>
          </div>
        </div>
        <NavLink to="/viaggi" className="text-link travel-summary__back">
          <span aria-hidden="true">←</span> Tutti i viaggi
        </NavLink>
      </div>
    </>
  );
}
