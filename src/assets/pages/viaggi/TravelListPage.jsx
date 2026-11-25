import { travels } from "../../data/travels.js";
import { NavLink } from "react-router-dom";
import TravelDetailPage from "./TravelDetailPage.jsx";
import TravelForm from "../../components/TravelForm.jsx";
import { useState } from "react";
import { coordinators } from "../../data/coordinators.js";
import formatDate from "../../utils/formatDate.js";

export default function TravelListPage() {
  const [travelList, setTravelList] = useState(travels);
  return (
    <>
      <main className="container page-shell travel-list-page">
        <div className="row align-items-center">
          <div className="col-md-8">
            <span className="eyebrow">Pronti a partire?</span>
            <h1 className="page-title">I nostri viaggi</h1>
            <p className="page-intro">Esplora gli itinerari e trova la prossima esperienza da condividere.</p>
          </div>
          <div className="col-md-4 text-md-end travel-list-page__action">
            <button
              className="btn btn-primary "
              data-bs-toggle="modal"
              data-bs-target="#travel-form"
            >
              Aggiungi viaggio
            </button>
          </div>
        </div>
        <div className="modal fade" id="travel-form" aria-hidden={true}>
          <TravelForm setTravelList={setTravelList} />
        </div>
        <section className="table-panel">
          <table className="table table-hover align-middle">
            <thead>
              <tr>
                <th scope="col">Destinazione</th>
                <th scope="col">Partenza</th>
                <th scope="col">Rientro</th>
                <th scope="col">Coordinatore</th>
                <th scope="col"></th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
              {travelList.map((travel) => {
                const coordinator = coordinators.find(
                  (item) => item.id === travel.coordinator
                );
                return (
                  <tr key={travel.id}>
                    <td>{travel.destination}</td>
                    <td>{formatDate(travel.startDate)}</td>
                    <td>{formatDate(travel.endDate)}</td>
                    <td>
                      {coordinator
                        ? `${coordinator.name} ${coordinator.surname}`
                        : travel.coordinator || travel.coordinators}
                    </td>
                    <td>
                      <NavLink
                        to={`/viaggi/${travel.id}`}
                        className="table-link"
                      >
                        Dettagli <span aria-hidden="true">→</span>
                      </NavLink>
                    </td>
                    <td className="text-center">
                      <button className="btn btn-secondary btn-sm me-2">
                        Modifica
                      </button>
                      <button className="btn btn-danger btn-sm">
                        Elimina
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </section>
      </main>
    </>
  );
}
