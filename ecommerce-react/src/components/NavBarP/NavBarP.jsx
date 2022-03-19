// import "./NavBarP.css"

import { Navbar,Container,Offcanvas,Nav,Form,FormControl,Button,NavDropdown, NavLink, ListGroup, ListGroupItem } from "react-bootstrap";
import { Link } from "react-router-dom";

const NavBarP = ({onSearchChange,searchField}) =>{

    const onSearchAction=(event)=>{
        onSearchChange(event.target.value)
    }

    return(
        <Navbar bg="dark" variant="dark" expand={false} 
        // fixed="top"
        >
            <Container fluid>
                <Navbar.Brand href="/">HardCore E-commerce</Navbar.Brand>
                <input
                type="search" 
                placeholder="What do you look for?"
                onChange={onSearchAction}/>
                
                
                {/* 
                <Form className="d-flex">
                    <FormControl
                        type="search"
                        placeholder="Search"
                        className="me-2"
                        aria-label="Search"
                        onChan
                    />
                    <Button variant="outline-success">Search</Button>
                </Form> */}
                <NavLink href='/signin'>Sign In</NavLink>
                <Link to="/signin"></Link>
                

                <Navbar.Toggle aria-controls="offcanvasNavbar" />
                <Navbar.Offcanvas
                id="offcanvasNavbar"
                aria-labelledby="offcanvasNavbarLabel"
                placement="end"
                >
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title id="offcanvasNavbarLabel">Cart</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <ListGroup>
                        <ListGroupItem>Item 1</ListGroupItem>
                        <ListGroupItem>Item 1</ListGroupItem>
                        <ListGroupItem>Item 1</ListGroupItem>
                        <ListGroupItem>Item 1</ListGroupItem>
                    </ListGroup>

                    <Button>Proceed to Checkout</Button>
                    
                </Offcanvas.Body>
                </Navbar.Offcanvas>
            </Container>
            </Navbar>
    )
}
export default NavBarP;