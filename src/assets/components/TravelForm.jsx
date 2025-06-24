import { useState } from "react";
import { travels } from "../data/travels.js";

const formInitialData = {
  id: "",
  destination: "",
  startDate: "",
  endDate: "",
  coordinators: "",
};

export default function TravelForm({ travelList, setTravelList }) {
  const [form, setForm] = useState(formInitialData);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTravel = {
      ...form,
      id: travels.length + 1,
    };
    setTravelList([...travels, newTravel]);
    setForm(formInitialData);
  };
  return (
    <div class="modal-dialog modal-xl modal-dialog-centered">
      <div className="modal-content">
        <div className="modal-header">
          <h2 className="modal-title fs-5">Aggiungi un nuovo viaggio</h2>
          <button
            className="btn-close"
            type="button"
            data-bs-dismiss="modal"
            aria-label="close"
          ></button>
        </div>
        <div className="modal-body p-5">
          <form className="row g-4" onSubmit={handleSubmit}>
            <div className="col-md-6">
              <label htmlFor="destination" className="form-label">
                Destinazione
              </label>
              <input
                type="text"
                className="form-control"
                name="destination"
                value={form.destination}
                onChange={handleChange}
                required
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="coordinators" className="form-label">
                Coordinatori
              </label>
              <input
                type="text"
                className="form-control"
                name="coordinators"
                value={form.coordinators}
                onChange={handleChange}
                required
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="startDate" className="form-label">
                Data inizio
              </label>
              <input
                type="date"
                min={new Date().toISOString().split("T")[0]}
                className="form-control"
                name="startDate"
                value={form.startDate}
                onChange={handleChange}
                required
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="endDate" className="form-label">
                Data fine
              </label>
              <input
                type="date"
                min={new Date().toISOString().split("T")[0]}
                className="form-control"
                name="endDate"
                value={form.endDate}
                onChange={handleChange}
                required
              />
            </div>

            <div className="col-md-12">
              <button
                type="submit"
                className="btn btn-primary"
                data-bs-dismiss="modal"
              >
                Aggiungi viaggio
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
