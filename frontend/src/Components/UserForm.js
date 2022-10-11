import React from "react";
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { FormGroup, FormControl, Button } from "react-bootstrap";
  
const UserForm = (props) => {
  const validationSchema = Yup.object().shape({
    Nombres: Yup.string().required("Required"),
    apellidos: Yup.string().required("Required"),
    direccion: Yup.string().required("Required"),
    email: Yup.string()
        .email("You have enter an invalid email direccion")
        .required("Required"),
    telefono: Yup.number().required("Required"),
    edad: Yup.number().required("Required"),
    password: Yup.string().required("Required"),
    RUT: Yup.string().required("Required"),
    estado: Yup.string().required("Required"),


  });
  return (
    <div className="form-wrapper">
      <Formik {...props} validationSchema={validationSchema}>
        <Form>
          <FormGroup>
            <Field name="Nombres" type="text" 
                className="form-control" />
            <ErrorMessage
              name="Nombres"
              className="d-block invalid-feedback"
              component="span"
            />
          </FormGroup>
          <FormGroup>
            <Field name="apellidos" type="text" 
                className="form-control" />
            <ErrorMessage
              name="apellidos"
              className="d-block invalid-feedback"
              component="span"
            />
          </FormGroup>
          <FormGroup>
            <Field name="direccion" type="text" 
                className="form-control" />
            <ErrorMessage
              name="direccion"
              className="d-block invalid-feedback"
              component="span"
            />
          </FormGroup>
          <FormGroup>
            <Field name="email" type="text" 
                className="form-control" />
            <ErrorMessage
              name="email"
              className="d-block invalid-feedback"
              component="span"
            />
          </FormGroup>
          <FormGroup>
            <Field name="telefono" type="text" 
                className="form-control" />
            <ErrorMessage
              name="telefono"
              className="d-block invalid-feedback"
              component="span"
            />
          </FormGroup>
          <FormGroup>
            <Field name="edad" type="text" 
                className="form-control" />
            <ErrorMessage
              name="edad"
              className="d-block invalid-feedback"
              component="span"
            />
          </FormGroup>
          <FormGroup>
            <Field name="password" type="text" 
                className="form-control" />
            <ErrorMessage
              name="password"
              className="d-block invalid-feedback"
              component="span"
            />
          </FormGroup>
          <FormGroup>
            <Field name="RUT" type="text" 
                className="form-control" />
            <ErrorMessage
              name="RUT"
              className="d-block invalid-feedback"
              component="span"
            />
          </FormGroup>  <FormGroup>
            <Field name="estado" type="text" 
                className="form-control" />
            <ErrorMessage
              name="estado"
              className="d-block invalid-feedback"
              component="span"
            />
          </FormGroup>
          <Button variant="danger" size="lg" 
            block="block" type="submit">
            {props.children}
          </Button>
        </Form>
      </Formik>
    </div>
  );
};
  
export default UserForm;