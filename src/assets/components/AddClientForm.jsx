import { useState } from "react";


const formInitialData = {
  name: "",
  surname: "",
  mail: "",
  phone: "",
  fiscalCode: "",
}




export default function AddClientForm ({ clients, setFilteredList }) {
    const [formData, setFormData] = useState(formInitialData);

    const handleInputChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value});
    };

    const handleSubmit = (e) => {
        e.preventDefault();;
        
        const newClient = {
            id: clients.length + 1,
            ...formData
        }
        clients.push(newClient)
        const newClientsList = [...clients];
        setFilteredList(newClientsList);
        setFormData(formInitialData);
    };

    return (
        <>
            <form className="row g-3" onSubmit={handleSubmit}>

                <div className="col-4 mb-3">
                    <label htmlFor="name" className="form-label">
                        Nome
                    </label>
                    <input 
                        value={formData.name}
                        onChange={handleInputChange}
                        name="name"
                        required={true}

                        type="text" 
                        className="form-control" 
                        id="name" 
                    />
                </div>

                <div className="col-4 mb-3">
                    <label htmlFor="surname" className="form-label">
                        Cognome
                    </label>
                    <input 
                        value={formData.surname}
                        onChange={handleInputChange}
                        name="surname"
                        required={true}

                        type="text" 
                        className="form-control" 
                        id="surname" 
                    />
                </div>
                
                
                <div className="col-4 mb-3">
                    <label htmlFor="mail" className="form-label">
                        Mail
                    </label>
                    <input 
                        value={formData.mail}
                        onChange={handleInputChange}
                        name="mail"
                        required={true}

                        type="email" 
                        className="form-control" 
                        id="mail" 
                    />
                </div>


                <div className="col-6 mb-3">
                    <label htmlFor="phone" className="form-label">
                        Telefono
                    </label>
                    <input 
                        value={formData.phone}
                        onChange={handleInputChange}
                        name="phone"
                        required={true}

                        type="text" 
                        className="form-control" 
                        id="phone" 
                    />
                </div>


                <div className="col-6 mb-3">
                    <label htmlFor="fiscalCode" className="form-label">
                        Codice Fiscale
                    </label>
                    <input 
                        value={formData.fiscalCode}
                        onChange={handleInputChange}
                        name="fiscalCode"
                        required={true}

                        type="text" 
                        className="form-control" 
                        id="fiscalCode" 
                    />
                </div>


                <div className="mb-3">
                    <button 
                        onClick={handleSubmit}

                        type="submit" 
                        className="btn btn-primary"

                        data-bs-dismiss="modal"
                    >
                        Aggiungi partecipante
                    </button>
                </div>

            </form>
        </>
    )   
}