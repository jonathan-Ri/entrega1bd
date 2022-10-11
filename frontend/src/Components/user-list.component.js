import React, { useState, useEffect } from "react";
import UserDataService from "../Services/usuario.service";
import { Table } from "react-bootstrap";
import UserTableRow from "./UserTableRow";
  
const UserList = () => {
  const [user, setUser] = useState([]);
  
  useEffect(() => {
    UserDataService.getAll()
      .then(({ data }) => {
        setUser(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  
  const DataTable = () => {
    return user.map((res, i) => {
      return <UserTableRow obj={res} key={i} />;
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
            <th>estado</th>
            
            <th>Action</th>
          </tr>
        </thead>
        <tbody>{DataTable()}</tbody>
      </Table>
    </div>
  );
};
  
export default UserList;