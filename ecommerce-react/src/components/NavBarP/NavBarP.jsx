// import "./NavBarP.css"

import { Navbar,Container,Offcanvas,NavLink} from "react-bootstrap";
import { Link  } from "react-router-dom";

import { CartContent } from "./CartContent";
import UserConnection from "./UserConnection";


const NavBarP = ({onSearchChange,isLogin,cart, rmCartItem}) =>{

    const onSearchAction=(event)=>{
        onSearchChange(event.target.value)
    }

    return(
        <Navbar bg="dark" variant="dark" expand={false} sticky="top">
            <Container fluid>
                <Navbar.Brand href="/">HardCore E-commerce</Navbar.Brand>
                {/* <InputGroup className="mb-3">
                    <FormControl
                    placeholder="Search"
                    aria-label="Search"
                    aria-describedby="basic-addon2"
                    onChange={onSearchAction}
                    />
                    <Button variant="outline-secondary" id="button-addon2">
                    Button
                    </Button>
                </InputGroup> */}
                <form>
                <input
                type="search" 
                placeholder="What do you look for?"
                onChange={onSearchAction}/>
                {/* <input type="submit">submit</input> */}
                </form>
                <UserConnection isLogin={isLogin}/>
                
                
                <Navbar.Toggle aria-controls="offcanvasNavbar" > CART</Navbar.Toggle>
                <Navbar.Offcanvas
                id="offcanvasNavbar"
                aria-labelledby="offcanvasNavbarLabel"
                placement="end"
                >
                    {/* <CartContent/> */}
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title id="offcanvasNavbarLabel">Cart</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <CartContent cart={cart} rmCartItem={rmCartItem}/>

                    <NavLink href="checkout">checkout</NavLink>
                    {/* <NavLink path="/checkout">Proceed to checkout</NavLink> */}
                    
                    
                </Offcanvas.Body>
                </Navbar.Offcanvas>
            </Container>
            </Navbar>
    )
}
export default NavBarP;