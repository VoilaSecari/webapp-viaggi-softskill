import { travels } from "../../data/travels.js";
import { NavLink } from "react-router-dom";

export default function TravelListPage() {
  return (
    <div className="container">
      <h1 className="mt-4">Lista dei viaggi in corso</h1>
      <section>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Destinazione</th>
              <th scope="col">Inizio Viaggio</th>
              <th scope="col">Fine Viaggio</th>
              <th scope="col">Coordinatore</th>
              <th scope="col">#</th>
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
                      <NavLink to=":id" className="nav-item">
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
      <section>
        <div>Form per aggiungere viaggio...</div>
      </section>
    </div>
  );
}
