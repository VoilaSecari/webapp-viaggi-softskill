import { useState } from "react";
import SearchFilter from "../components/SearchFilter.jsx";
import AddClientForm from "../components/AddClientForm";
import { useParams } from "react-router-dom";

export default function ClientsList({ clients }) {
  const { id } = useParams();
  const [filteredList, setFilteredList] = useState(clients);
  return (
    <>

      <div className="d-flex align-items-center justify-content-between">
        <h2 className="text-center my-4 ">Lista dei partecipanti</h2>

        <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#addClientModal">
          Aggiungi partecipante
        </button>
      </div>
      <div>
        <SearchFilter setFilteredList={setFilteredList} />
      </div>

      {filteredList && (
        <>
          <table
            className="table table-striped table-bordered table-hover"
            id="tableList"
          >
            <thead>
              <tr>
                <th scope="col w-100" style={{ width: "100%" }}>
                  Name
                </th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
              {filteredList.map((client) => {
                return (
                  <tr key={client.id}>
                    <td>
                      {client.surname} {client.name}
                    </td>
                    <td>
                      <div className="text-nowrap">
                        <a
                          href={`tel:${client.phone}`}
                          className="btn btn-primary me-1"
                        >
                          Chiama subito
                        </a>
                        <a
                          href={`/viaggi/${id}/partecipanti/${client.id}`}
                          className="btn btn-secondary"
                        >
                          Visualizza dettagli
                        </a>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </>
      )}

      <div className="modal fade" id="addClientModal" tabindex="-1" aria-labelledby="addClientModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-xl modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h2 class="modal-title fs-5" id="addClientModalLabel">
                Aggiungi un nuovo partecipante al viaggio
              </h2>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <AddClientForm clients={clients} setFilteredList={setFilteredList} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
