import * as React from "react";
import { BrowserRouter as Router,Routes,Route,Link } from "react-router-dom";
import Forms from "./Forms";
import { View } from "./view";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Edit } from "./edit";


export default function  Navss(){
return(
    
<div>
<Router >
<Navbar id='navbar' variant="dark">
        <Container>
          <Navbar.Brand href="#home">Employee Management</Navbar.Brand>
          <Nav className="me-auto">
            <Link id="a1" to="/form">Home</Link>
            <Link id="a2" to="/view">view </Link>
          </Nav>
        </Container>
      </Navbar>
    <Routes>
        <Route path="/form" element={<Forms />} />
        <Route path="/view" element={<View />} />
        <Route path="/edit/:id" element={<Edit />} />
    </Routes>
</Router>
</div>

)


}