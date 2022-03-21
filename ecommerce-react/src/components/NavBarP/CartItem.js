import { useEffect, useState } from "react"

const CartItem=({itemId, rmCartItem})=>{

    const [product, setProduct] = useState([]);
    
    
    

    useEffect(
        ()=>{
            fetch(`https://fakestoreapi.com/products/${itemId}`)
            .then(res=>res.json())
            .then(json=>setProduct(json))
        }
    )

    return(
        <div className="d-flex justify-content-between">
            <img alt="item" src={product.image} width="50px"className="p-1"/>
            <div className="p-1">{product.title || "title" }</div>
            <div className="p-1">{product.price}</div>
            <button onClick={()=>rmCartItem(itemId)}>x</button>
        </div>

    )
}
export default CartItem;