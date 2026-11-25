import { NavLink } from "react-router-dom";

const destinations = [
  {
    name: "Barcellona",
    country: "Spagna",
    image: "/img/barcellona.jpg",
    description: "Architettura iconica, mare e un’energia tutta mediterranea.",
  },
  {
    name: "Il Cairo",
    country: "Egitto",
    image: "/img/Il Cairo.jpg",
    description: "Un viaggio tra millenni di storia e la vivacità del Nilo.",
  },
  {
    name: "New York",
    country: "Stati Uniti",
    image: "/img/New York.jpg",
    description: "Una metropoli senza pause, quartiere dopo quartiere.",
  },
  {
    name: "Parigi",
    country: "Francia",
    image: "/img/parigi-2.jpg",
    description: "Arte, cucina e passeggiate lungo la Senna.",
  },
  {
    name: "Reykjavík",
    country: "Islanda",
    image: "/img/reykjavik.jpg",
    description: "Paesaggi nordici, sorgenti calde e cieli sorprendenti.",
  },
  {
    name: "Tokyo",
    country: "Giappone",
    image: "/img/tokyo.jpg",
    description: "Tradizioni senza tempo e il ritmo di una città futuristica.",
  },
];

export default function HomePage() {
  return (
    <main>
      <section className="home-hero">
        <div className="home-hero__image" aria-hidden="true" />
        <div className="home-hero__content">
          <span className="eyebrow">Il mondo, da vicino</span>
          <h1>Il prossimo viaggio<br />inizia qui.</h1>
          <p>
            Idee, itinerari e persone: tutto quello che serve per partire
            insieme e vivere qualcosa di nuovo.
          </p>
          <NavLink to="/viaggi" className="btn btn-primary btn-lg">
            Scopri i viaggi <span aria-hidden="true">→</span>
          </NavLink>
        </div>
        <div className="home-hero__note">
          <span className="home-hero__note-mark" aria-hidden="true">✳</span>
          <span>Nuove mete,<br />storie da vivere</span>
        </div>
      </section>

      <section className="destination-section">
        <div className="section-heading">
          <div>
            <span className="eyebrow">Lasciati ispirare</span>
            <h2>Destinazioni da vivere</h2>
          </div>
          <NavLink to="/viaggi" className="text-link">
            Tutti i viaggi <span aria-hidden="true">→</span>
          </NavLink>
        </div>

        <div className="destination-grid">
          {destinations.map((destination, index) => (
            <article className="destination-card" key={destination.name}>
              <div className="destination-card__image">
                <img
                  src={destination.image}
                  alt={destination.name}
                  width="1200"
                  height="800"
                  loading="lazy"
                  decoding="async"
                />
                <span className="destination-card__number">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>
              <div className="destination-card__body">
                <div>
                  <h3>{destination.name}</h3>
                  <span className="destination-card__country">
                    {destination.country}
                  </span>
                </div>
                <p>{destination.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
