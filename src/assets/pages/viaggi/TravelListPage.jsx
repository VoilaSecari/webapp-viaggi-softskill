import { travels } from "../../data/travels.js";
import { NavLink } from "react-router-dom";
import TravelDetailPage from "./TravelDetailPage.jsx";
import TravelForm from "../../components/TravelForm.jsx";
import { useState } from "react";

export default function TravelListPage() {
  const [travelList, setTravelList] = useState(travels);
  return (
    <>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-8">
            <h1 className="my-3">Lista dei viaggi in corso</h1>
          </div>
          <div className="col-md-4 text-end">
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
        <section>
          <table className="table table-striped table-bordered">
            <thead>
              <tr>
                <th scope="col">Destinazione</th>
                <th scope="col">Inizio Viaggio</th>
                <th scope="col">Fine Viaggio</th>
                <th scope="col">Coordinatore</th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
              {travelList.map((travel) => {
                return (
                  <>
                    <tr key={travel.id}>
                      <td>{travel.destination}</td>
                      <td>{travel.startDate}</td>
                      <td>{travel.endDate}</td>
                      <td>{travel.coordinator}</td>
                      <td>
                        <NavLink
                          to={`/viaggi/${travel.id}`}
                          className="nav-item"
                        >
                          Dettagli
                        </NavLink>
                      </td>
                    </tr>
                  </>
                );
              })}
            </tbody>
          </table>
        </section>
      </div>
    </>
  );
}
