import { travels } from "../../data/travels";
import { useParams } from "react-router-dom";
import { NavLink } from "react-router-dom";
import clients from "../../data/clients";


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

            {
              clients &&
              <>
                <h2 className="text-center mt-5 mb-1">
                    Accordion List
                </h2>
                <div className="accordion" id="accordionList">
                    {
                        clients.map((client, index) => {
                            return (
                                <div key={client.id} className="accordion-item">
                                    <h2 className="accordion-header">
                                        <button className={`accordion-button ${index === 0 ? "" : " collapsed"}`} type="button" data-bs-toggle="collapse" data-bs-target={`#collapse${client.id}`} aria-expanded={`${index === 0 ? "true" : "false"}`} aria-controls={`collapse${client.id}`}>
                                            {client.surname} {client.name}
                                        </button>
                                    </h2>
                                    <div id={`collapse${client.id}`} className={`accordion-collapse collapse ${index === 0 ? " show" : ""}`} data-bs-parent="#accordionList">
                                        <div className="accordion-body">
                                              <a href={`tel:${client.phone}`} className="btn btn-primary me-1">
                                                Chiama subito
                                            </a>
                                            <a href={`/viaggi/${id}/partecipanti`} className="btn btn-secondary">
                                                Visualizza dettagli
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>

                <h2 className="text-center mt-5 mb-1">
                    Table list
                </h2>
                <table className="table table-striped table-bordered table-hover" id="tableList">
                    <thead>
                        <tr>
                            <th scope="col">
                                #ID
                            </th>
                            <th scope="col w-100" style={{width: "100%"}}>
                                Name
                            </th>
                            <th scope="col">
                                Actions
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                      {
                        clients.map((client, index) => {
                          return (
                            <tr key={client.id}>
                                <th scope="row">
                                  {client.id}
                                </th>
                                <td>
                                  {client.surname} {client.name}
                                </td>
                                <td>
                                    <div className="text-nowrap">
                                        <a href={`tel:${client.phone}`} className="btn btn-primary me-1">
                                          Chiama subito
                                        </a>
                                        <a href={`/viaggi/${id}/partecipanti`} className="btn btn-secondary">
                                          Visualizza dettagli
                                        </a>
                                    </div>
                                </td>
                            </tr>
                          )
                        })
                      }
                    </tbody>
                </table>
              </>
            }
    </div>
  );
}
