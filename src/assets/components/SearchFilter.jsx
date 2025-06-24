import { useState } from "react";
import clients from "../data/clients.js";

export default function SearchFilter({ setFilteredList }) {
  const [query, setQuery] = useState("");

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  console.log(query);

  const handleSubmit = (e) => {
    e.preventDefault();

    setFilteredList(
      clients.filter((client) =>
        (client.name.toLowerCase() + client.surname.toLowerCase()).includes(
          query.split(" ").join("").toLowerCase()
        )
      )
    );
  };

  return (
    <div className="container">
      <form className="row" onSubmit={handleSubmit}>
        <div className="col-md-4">
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              value={query}
              name="search"
              onChange={handleChange}
            />
            <button type="submit" className="btn btn-primary">
              Cerca
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
