import { clients } from "../data/clients";

export default function ClientDetailPage () {
    return (
        <>
            <div className="container">
                <h3><strong>Dettaglio partecipante:</strong></h3>
            </div>
            <div class="card" style="width: 18rem;">
                {clients.map((client) => {
                    <div class="card-body" key={client.id}>
                        <h5 class="card-title">{client.name}{client.surname}</h5>
                        <h6 class="card-subtitle mb-2 text-body-secondary">{client.mail}</h6>
                        <p class="card-phone">{client.phone}</p>
                        <p class="card-code">{client.fiscalCode}</p>
                    </div>
                })}
            </div>
        </>
    )
}