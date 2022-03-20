// import "./NavBarP.css"

import { Navbar,Container,Offcanvas,Button, NavLink } from "react-bootstrap";

import { CartContent } from "./CartContent";


const NavBarP = ({onSearchChange,isLogin,cart}) =>{

    const onSearchAction=(event)=>{
        onSearchChange(event.target.value)
    }

    return(
        <Navbar bg="dark" variant="dark" expand={false} sticky="top">
            <Container fluid>
                <Navbar.Brand href="/">HardCore E-commerce</Navbar.Brand>
                <form>
                <input
                type="search" 
                placeholder="What do you look for?"
                onChange={onSearchAction}/>
                {/* <input type="submit">submit</input> */}
                </form>
                {isLogin?
                <NavLink href='/profile'>Profile</NavLink>
                :<NavLink href='/signin'>Sign In</NavLink>
                }
                
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
                    <CartContent cart={cart}/>

                    <Button>Proceed to Checkout</Button>
                    
                </Offcanvas.Body>
                </Navbar.Offcanvas>
            </Container>
            </Navbar>
    )
}
export default NavBarP;