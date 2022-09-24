// Import Modules
import React, { useState, useEffect } from "react";
/*import { PASSWORD } from "../../../backend/app/config/db.config";*/
import ClientDataService from "../Services/client.service";
import ClientForm from "./ClientForm";

const EditClient = (props) => {
  const [formValues, setFormValues] = useState({
    Nombres: "",
    apellidos: "",
    direccion: "",
    email: "",
    telefono: "",
    edad:"",
    password: "",
    RUT: "",
  });
    
  //onSubmit handler
  const onSubmit = (ClientObject) => {
    ClientDataService
      .put("http://localhost:8080/api/client/" + props.match.params.id, ClientObject )
      .then((res) => {
        if (res.status === 200) {
          alert("Client successfully updated");
          props.history.push("/client-list");
        } else Promise.reject();
      })
      .catch((err) => alert("Something went wrong"));
  };
  
  // Load data from server and reinitialize client form
  useEffect(() => {
    ClientDataService.get(props.match.params.id)
      .then((res) => {
        const { Nombres, apellidos, direccion, email,telefono,edad,password,RUT } = res.data;
        setFormValues({ Nombres, apellidos, direccion, email,telefono,edad,password,RUT });
      })
      .catch((err) => console.log(err));
  }, []);
  
  // Return client form
  return (
    <ClientForm
      initialValues={formValues}
      onSubmit={onSubmit}
      enableReinitialize
    >
      Update Client
    </ClientForm>
  );
};
  
// Export EditClient Component
export default EditClient;