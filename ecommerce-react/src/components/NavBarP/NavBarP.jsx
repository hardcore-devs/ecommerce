// import "./NavBarP.css"
import { useState, useEffect } from "react";
import { Navbar, Container, Offcanvas, NavLink } from "react-bootstrap";

import { CartContent } from "./CartContent";
import UserConnection from "./UserConnection";

const NavBarP = ({
  onSearchChange,
  isLogin,
  cart,
  rmCartItem,
  userId,
  onRouteChange,
}) => {
  const [user, setUser] = useState({ name: { firstname: "" } });

  const onSearchAction = (event) => {
    onSearchChange(event.target.value);
  };

  useEffect(() => {
    if (userId !== null) {
      fetch(`https://fakestoreapi.com/users/${userId}`)
        .then((res) => res.json())
        .then((user) => setUser(user));
    }
  }, [userId]);

  return (
    <Navbar bg="dark" variant="dark" expand={false} sticky="top">
      <Container fluid>
        <Navbar.Brand
          onClick={() => onRouteChange("home")}
          style={{ cursor: "pointer" }}
        >
          HardCore E-commerce
        </Navbar.Brand>

        <input
          type="search"
          placeholder="What do you look for?"
          onChange={onSearchAction}
        />

        <UserConnection
          isLogin={isLogin}
          username={user.name.firstname}
          onRouteChange={onRouteChange}
        />

        <Navbar.Toggle aria-controls="offcanvasNavbar"> CART</Navbar.Toggle>
        <Navbar.Offcanvas
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
          placement="end"
        >
          {/* <CartContent/> */}
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id="offcanvasNavbarLabel">
              Your Cart
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <CartContent cart={cart} rmCartItem={rmCartItem} userId={userId} />

            <NavLink onClick={() => onRouteChange("checkout")}>
              checkout
            </NavLink>
            {/* <NavLink path="/checkout">Proceed to checkout</NavLink> */}
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
};
export default NavBarP;
