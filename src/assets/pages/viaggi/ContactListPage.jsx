import clients from "../../data/clients"

export default function ContactListPage ({ }) {


    // const clients
    console.log(clients);


    return (
        <div className="container">
            <h1 className="mt-4">
                ContactListPage (2 vers possibiili?)
            </h1>



            {
                clients &&
                <>
                    <h2 className="text-center mt-5 mb-1">
                        Accordion List
                    </h2>
                    <div className="accordion" id="accordionList">

                        {
                            clients.map((client, index) => {
                                return (
                                    <div key={client.id} className="accordion-item">
                                        <h2 className="accordion-header">
                                            <button className={`accordion-button ${index === 0 ? "" : " collapsed"}`} type="button" data-bs-toggle="collapse" data-bs-target={`#collapse${client.id}`} aria-expanded={`${index === 0 ? "true" : "false"}`} aria-controls={`collapse${client.id}`}>
                                                {client.surname} {client.name}
                                            </button>
                                        </h2>
                                        <div id={`collapse${client.id}`} className={`accordion-collapse collapse ${index === 0 ? " show" : ""}`} data-bs-parent="#accordionList">
                                            <div className="accordion-body">
                                                 <a href={`tel:${client.phone}`} className="btn btn-primary me-1">
                                                    Chiama subito
                                                </a>
                                                <a href="#" className="btn btn-secondary">
                                                    Visualizza dettagli
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }

                    </div>





                    <h2 className="text-center mt-5 mb-1">
                        Table list
                    </h2>
                    <table className="table table-striped table-bordered table-hover" id="tableList">
                        <thead>
                            <tr>
                                <th scope="col">
                                    #ID
                                </th>
                                {/* <th scope="col w-100"> */}
                                <th scope="col w-100" style={{width: "100%"}}>
                                    Name
                                </th>
                                <th scope="col">
                                    Actions
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                clients.map((client, index) => {
                                    return (
                                        <tr key={client.id}>
                                            <th scope="row">
                                                {client.id}
                                            </th>
                                            <td>
                                                {client.surname} {client.name}
                                            </td>
                                            <td>
                                                <div className="text-nowrap">
                                                    <a href={`tel:${client.phone}`} className="btn btn-primary me-1">
                                                        Chiama subito
                                                    </a>
                                                    <a href="#" className="btn btn-secondary">
                                                        Visualizza dettagli
                                                    </a>
                                                </div>
                                            </td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </>
            }




            {/* <h2 className="text-center mt-3 mb-1">
                Accordion List
            </h2>
            <div className="accordion" id="accordionList">
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            Accordion Item #1
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionList">
                        <div className="accordion-body">
                            <strong>This is the first item’s accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It’s also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            Accordion Item #2
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionList">
                        <div className="accordion-body">
                            <strong>This is the second item’s accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It’s also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                        </div>
                    </div>
                </div>
            </div>




            <h2 className="text-center mt-3 mb-1">
                Table list
            </h2>
            <table className="table table-striped table-bordered table-hover" id="tableList">
                <thead>
                    <tr>
                        <th scope="col">
                            #
                        </th>
                        <th scope="col">
                            First
                        </th>
                        <th scope="col">
                            Last
                        </th>
                        <th scope="col">
                            Handle
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">
                            1
                        </th>
                        <td>
                            Mark
                        </td>
                        <td>
                            Otto
                        </td>
                        <td>
                            @mdo
                        </td>
                    </tr>
                    <tr>
                        <th scope="row">
                            2
                        </th>
                        <td>
                            Jacob
                        </td>
                        <td>
                            Thornton
                        </td>
                        <td>
                            @fat
                        </td>
                    </tr>
                </tbody>
            </table> */}




        </div>
    );
}   