
import { ListGroup, ListGroupItem } from "react-bootstrap"
import CartItem from "./CartItem"

export const CartContent=({cart})=>{

    const itemcart = cart.map((id,index)=>{
        return(
            <ListGroupItem key={index}>
                <CartItem itemId={id} index={index}/>
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