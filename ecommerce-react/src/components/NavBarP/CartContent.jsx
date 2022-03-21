
import { ListGroup, ListGroupItem } from "react-bootstrap"
import CartItem from "./CartItem"

export const CartContent=({cart,rmCartItem})=>{
    

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
                {itemcart?itemcart:<p>you dont have ane products yet</p>}
            </ListGroup>
            <div>
                
            </div>
        </div>
    )
}