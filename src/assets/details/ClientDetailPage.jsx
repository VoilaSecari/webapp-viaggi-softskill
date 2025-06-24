import { useParams } from "react-router-dom";
import clients from "../data/clients";

import { NavLink } from "react-router-dom";


export default function ClientDetailPage () {

    const {id, partecipanteId} = useParams();
    console.info("ClientDetailPage", id, partecipanteId);
    const partecipante = clients.find((partecipante) => partecipante.id == partecipanteId);
    console.info("ClientDetailPage partecipante", partecipante);

    console.log("ClientDetailPage", clients)
    return (
        <>
            <div className="container">

                <NavLink to={`/viaggi/${id}`} className="nav-item">
                    Torna ai viaggi{" "}
                </NavLink>


                <h3><strong>Dettaglio partecipante:</strong></h3>
                <div className="card" style={{width: "18rem"}}>
                    <div className="card-body">
                        <h5 className="card-title">{partecipante.name}{partecipante.surname}</h5>
                        <h6 className="card-subtitle mb-2 text-body-secondary">{partecipante.mail}</h6>
                        <p className="card-phone">{partecipante.phone}</p>
                        <p className="card-code">{partecipante.fiscalCode}</p>
                    </div>
                </div>
            </div>
        </>
    )
}