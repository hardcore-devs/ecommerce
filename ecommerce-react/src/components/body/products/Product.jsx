import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { useParams } from "react-router-dom";

const Product = () =>{
    const[product,setProduct] = useState([]);


    let {id} = useParams()
    console.log(id)
    // const params = new URLSearchParams(window.location.search);
    // const paramValue = params.get("id");
    // console.log(paramValue)
    useEffect(
        ()=>{
            fetch(`https://fakestoreapi.com/products/${id}`)
            .then(res=>res.json())
            .then(json=>setProduct(json))
        },[]
    )
        
    return(
       <div className="container p-5 d-flex position-relative shadow rounded m-5">
           <img src={product.image} alt="product" style={{"width":"25rem"}}/>
           <div id="product-body">
               <h4>{product.title}</h4>
               <p>{product.description}</p>
               <div>
                   {/* rate: {product.rating.rate} | votes: {product.rating.count} */}
               </div>
               <h3>Price: {product.price}</h3>
               <div>
                    <Button>Add to cart</Button>
                   <Button>Favorite</Button>
               </div>
           </div>
       </div>
    )



}
export default Product;