import { useParams } from "react-router-dom";

// Dati
import clients from "../../data/clients.js";
import { travels } from "../../data/travels";

// Componenti
import ClientsList from "../../components/ClientsList.jsx";
import TravelCard from "../../components/TravelCard.jsx";

export default function TravelDetailPage() {
  const { id } = useParams();
  const travel = travels.find((t) => t.id === Number(id));

  if (!travel) {
    return <p>Viaggio non trovato</p>;
  }

  return (
    <div className="container">
      <h3 className="text-center mt-4">Dettagli del viaggio</h3>

      <TravelCard travel={travel} />

      <div>
        <h2 className="text-center my-4 ">Lista dei partecipanti</h2>
      </div>
      <ClientsList clients={clients} />
    </div>
  );
}
