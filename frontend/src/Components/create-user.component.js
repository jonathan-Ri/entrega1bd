// Import Modules
import React, { useState, useEffect } from "react";
import UDataService from "../Services/usuario.service";
import UserForm from "./UserForm";
  
const CreateU = () => {
  const [formValues, setFormValues] = useState({ Nombres: '', apellidos: '',direccion: '', email: '', telefono:'' ,edad:'',password:'',RUT:''})
  const onSubmit = userObject => {
    UDataService.create(userObject)
      .then(res => {
        if (res.status === 200)
          alert('User successfully created')
        else
          Promise.reject()
      })
      .catch(err => alert('Something went wrong'))
  }
    
  // Return user form
  return(
    <UserForm initialValues={formValues} 
      onSubmit={onSubmit} 
      enableReinitialize>
      Create User
    </UserForm>
  )
}
  
// Export
export default CreateU