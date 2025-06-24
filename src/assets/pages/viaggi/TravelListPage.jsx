import { travels } from "../../data/travels.js";
import { NavLink } from "react-router-dom";

export default function TravelListPage() {
  return (
    <div className="container">
      <h1 className="my-4">Lista dei viaggi in corso</h1>
      <section>
        <table className="table table-striped table-bordered">
          <thead>
            <tr>
              <th scope="col">Destinazione</th>
              <th scope="col">Data Inizio Viaggio</th>
              <th scope="col">Data Fine Viaggio</th>
              <th scope="col">Coordinatore</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            {travels.map((travel) => {
              return (
                <>
                  <tr key={travel.id}>
                    <td>{travel.destination}</td>
                    <td>{travel.startDate}</td>
                    <td>{travel.endDate}</td>
                    <td>{travel.coordinator}</td>
                    <td>
                      <NavLink to={`/viaggi/${travel.id}`} className="nav-item">
                        Dettagli del viaggio
                      </NavLink>
                    </td>
                  </tr>
                </>
              );
            })}
          </tbody>
        </table>
      </section>
      <section>
        <div>Form per aggiungere viaggio...</div>
      </section>
    </div>
  );
}
