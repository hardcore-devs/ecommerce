import { ListGroup, ListGroupItem } from "react-bootstrap";
import CartItem from "./CartItem";

export const CartContent = ({ cart, rmCartItem }) => {
  const itemcart = cart.products.map((product, index) => {
    return (
      <ListGroupItem key={index}>
        <CartItem cartProduct={product} index={index} rmCartItem={rmCartItem} />
      </ListGroupItem>
    );
  });

  return (
    <div className="">
      <ListGroup>{itemcart}</ListGroup>
      <div></div>
    </div>
  );
};
