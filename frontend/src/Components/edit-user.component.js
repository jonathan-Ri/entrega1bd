// Import Modules
import React, { useState, useEffect } from "react";
/*import { PASSWORD } from "../../../backend/app/config/db.config";*/
import UserDataService from "../Services/usuario.service";
import UserForm from "./UserForm";

const EditUser = (props) => {
  const [formValues, setFormValues] = useState({
    Nombres: "",
    apellidos: "",
    direccion: "",
    email: "",
    telefono: "",
    edad:"",
    password: "",
    RUT: "",
    estado:"",
  });
    
  //onSubmit handler
  const onSubmit = (UserObject) => {
    UserDataService
      .put("http://localhost:3000/api/usuario/" + props.match.params.id, UserObject )
      .then((res) => {
        if (res.status === 200) {
          alert("User successfully updated");
          props.history.push("/client-list");
        } else Promise.reject();
      })
      .catch((err) => alert("Something went wrong"));
  };
  
  // Load data from server and reinitialize user form
  useEffect(() => {
    UserDataService.get(props.match.params.id)
      .then((res) => {
        const { Nombres, apellidos, direccion, email,telefono,edad,password,RUT,estado } = res.data;
        setFormValues({ Nombres, apellidos, direccion, email,telefono,edad,password,RUT,estado });
      })
      .catch((err) => console.log(err));
  }, []);
  
  // Return user form
  return (
    <UserForm
      initialValues={formValues}
      onSubmit={onSubmit}
      enableReinitialize
    >
      Update User
    </UserForm>
  );
};
  
// Export EditUser Component
export default EditUser;