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
    return <p className="container page-shell">Viaggio non trovato</p>;
  }

  return (
    <main className="container page-shell travel-detail-page">
      <span className="eyebrow">Il tuo itinerario</span>
      <h1 className="page-title">Dettagli del viaggio</h1>

      <TravelCard travel={travel} />

      <div className="participants-heading">
        <div>
          <span className="eyebrow">Il gruppo</span>
          <h2>Partecipanti</h2>
        </div>
      </div>
      <ClientsList clients={clients} />
    </main>
  );
}
