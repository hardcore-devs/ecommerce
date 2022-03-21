import { Button, ListGroup, ListGroupItem } from "react-bootstrap";
import { CartContent } from "../NavBarP/CartContent";


const Checkout = ({cart,isLogin,rmCartItem})=>{

    let existItem = true
    if (isLogin && existItem){
        return(<div>
            <h1>you are logged in and exist anitem in your cart</h1>
        </div>)

    } else if (isLogin){
        return(
        <h1> your cart is empty </h1>
        )
    } else{
        return(
            <h1>you are not logged in</h1>
        )
        
    }
    
   
    // return(
    //     <div className="container">
    //         <CartContent cart={cart} rmCartItem={rmCartItem}/>
    //         <PaymentMethod/>
    //         <AddressSelection/>
    //     </div>
    // )
}

export default Checkout;