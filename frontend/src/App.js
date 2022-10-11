// Import React
import React from "react";

// Import Bootstrap
import { Nav, Navbar, Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
  
// Import Custom CSS
import "./App.css";

// Import from react-router-dom
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

// Import other React Component
import CreateUser from "./Components/create-user.component";
import EditClient from "./Components/edit-user.component";
import ClientList from "./Components/user-list.component";
import EnviarAlerta from "./Components/create-alert.component"
import AmbAlerta from "./Components/ alertas-ambulancia.components"


// App Component
const App = () => {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Navbar bg="dark" variant="dark">
            <Container>
              <Navbar.Brand>
                <Link to={"/create-client"} 
                  className="nav-link">
                  Alerta emergencia
                </Link>
              </Navbar.Brand>
  
              <Nav className="justify-content-end">
                <Nav>
                  <Link to={"/create-client"} 
                    className="nav-link">
                    Create User
                  </Link>
                </Nav>
  
                <Nav>
                  <Link to={"/client-list"} 
                    className="nav-link">
                    User List
                  </Link>
                </Nav>
                <Nav>
                  <Link to={"/create-alert"} 
                    className="nav-link">
                    Send Alert
                  </Link>
                </Nav>
                <Nav>
                  <Link to={"/alertas-ambulancia"} 
                    className="nav-link">
                  </Link>
                </Nav>
              </Nav>
            </Container>
          </Navbar>
        </header>
  
        <Container>
          <Row>
            <Col md={12}>
              <div className="wrapper">
                <Switch>
                  <Route exact path="/" component={ClientList} />
                  <Route path="/create-client" component={CreateUser} />
                  <Route path="/edit-client/:id" component={EditClient} />
                  <Route path="/client-list" component={ClientList} />
                  <Route path="/create-alert" component={EnviarAlerta} />
                  <Route path="/alerta-ambulancia" component={AmbAlerta} />

                </Switch>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </Router>
  );
};
  
export default App;