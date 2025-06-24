import { useParams } from "react-router-dom";
import clients from "../data/clients";

import { NavLink } from "react-router-dom";

export default function ClientDetailPage() {
  const { id, partecipanteId } = useParams();
  console.info("ClientDetailPage", id, partecipanteId);
  const partecipante = clients.find(
    (partecipante) => partecipante.id == partecipanteId
  );
  console.info("ClientDetailPage partecipante", partecipante);

  console.log("ClientDetailPage", clients);
  return (
    <>
      <div className="container">
        <h3 className="text-center my-3">Dettaglio partecipante:</h3>
        <div className="d-flex justify-content-center align-items-center flex-column">
          <div className="card col-4  my-4 p-4">
            <div className="card-body">
              <h5 className="card-title">
                {partecipante.name}
                {partecipante.surname}
              </h5>
              <h6 className="card-subtitle mb-2 text-body-secondary">
                Email: {partecipante.mail}
              </h6>
              <p className="card-phone">Phone: {partecipante.phone}</p>
              <p className="card-code">
                Fiscal Code: {partecipante.fiscalCode}
              </p>
            </div>
          </div>

          <NavLink to={`/viaggi/${id}`} className="nav-item ">
            Torna ai viaggi{" "}
          </NavLink>
        </div>
      </div>
    </>
  );
}
