import React, { useState, useEffect } from "react";
import ClientDataService from "../Services/client.service";
import { Table } from "react-bootstrap";
import ClientTableRow from "./ClientTableRow";
  
const ClientList = () => {
  const [client, setClient] = useState([]);
  
  useEffect(() => {
    ClientDataService.getAll()
      .then(({ data }) => {
        setClient(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  
  const DataTable = () => {
    return client.map((res, i) => {
      return <ClientTableRow obj={res} key={i} />;
    });
  };
  
  return (
    <div className="table-wrapper">
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Nombres</th>
            <th>apellidos</th>
            <th>direccion</th>
            <th>email</th>
            <th>telefono</th>
            <th>edad</th>
            <th>password</th>
            <th>RUT</th>
            
            <th>Action</th>
          </tr>
        </thead>
        <tbody>{DataTable()}</tbody>
      </Table>
    </div>
  );
};
  
export default ClientList;