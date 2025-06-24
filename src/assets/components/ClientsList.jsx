import { useState } from "react";
import SearchFilter from "../components/SearchFilter.jsx";
import AddClientForm from "../components/AddClientForm";
import { useParams } from "react-router-dom";

export default function ClientsList({ clients }) {
  const { id } = useParams();
  const [filteredList, setFilteredList] = useState(clients);
  return (
    <>
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
      <AddClientForm clients={clients} setFilteredList={setFilteredList} />
    </>
  );
}
