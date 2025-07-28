import React from 'react';
import { Navbar, Nav, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';


function Landing() {
  const navigate = useNavigate();

  return (
    
    <div>
      {/* <h1>Welcome to Trichy Ecommerce</h1> */}
      <marquee behavior="scroll" direction="left" style={{backgroundColor:"black", color:"white"}}>
        <span style={{marginRight:"25%"}}>Free Home Delivery for Paid Orders 🚚</span>
        <span style={{marginRight:"25%"}}>7-Day Money-Back Guarantee 🥇</span>
        <span> Pay later & EMI available💡</span>
      </marquee>

      <Navbar expand="lg" style={{backgroundColor:"#98070d"}}>
      <Container fluid>
        <Navbar.Brand href="#" style={{color:"white", fontWeight:"bold"}}>Mohan Fashions</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1" style={{color:"white"}}>Home</Nav.Link>
            <Nav.Link href="#action2" style={{color:"white"}}>Link</Nav.Link>
            {/* <NavDropdown title="Link" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown> */}
            <Nav.Link href="#" disabled style={{color:"white"}}>
              Link
            </Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="btn btn-outline-light">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>


    <img src='https://www.mydesignation.com/cdn/shop/files/01-desktop-banner-conquermenspage.jpg?v=1737108425'
    style={{height:"86vh", width:"100vw"}}
    /> 
    </div>
  );
}

export default Landing;