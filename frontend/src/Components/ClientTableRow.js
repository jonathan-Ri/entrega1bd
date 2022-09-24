import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import ClientDataService from "../Services/client.service";
  
const ClientTableRow = (props) => {
  const { id, Nombres, apellidos, direccion, email, telefono,edad,password,RUT } = props.obj;
  
  const deleteClient = () => {
    ClientDataService.remove(id)
      .then((res) => {
        if (res.status === 200) {
          alert("Client successfully deleted");
          window.location.reload();
        } else Promise.reject();
      })
      .catch((err) => {
        alert("Something went wrong")
      });
  };
  
  return (
    <tr>
      <td>{Nombres}</td>
      <td>{apellidos}</td>
      <td>{direccion}</td>
      <td>{email}</td>
      <td>{telefono}</td>
      <td>{edad}</td>
      <td>{password}</td>
      <td>{RUT}</td>
      <td>
        <Link className="edit-link" 
          to={"/edit-client/" + id}>
          Edit
        </Link>
        <Button onClick={deleteClient} 
          size="sm" variant="danger">
          Delete
        </Button>
      </td>
    </tr>
  );
};
  
export default ClientTableRow;