import { ListGroup, ListGroupItem } from "react-bootstrap";
import CartItem from "../NavBarP/CartItem";

const Checkout = ({cart,isLogin,rmCartItem})=>{
    // {!isLogin ? <p>please login first</p>:<p>Checkout</p>}
    const itemcart = cart.map((id,index)=>{
        return(
            <ListGroupItem key={index}>
                <CartItem itemId={id} index={index} rmCartItem={rmCartItem}/>
            </ListGroupItem>
        )    
    })

    return(
        <div>
            <ListGroup>
                {itemcart}
            </ListGroup>
        </div>
    )
}

export default Checkout;