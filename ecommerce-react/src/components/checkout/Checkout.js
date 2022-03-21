const Checkout = ({isLogin})=>{

  


    return(
        <div>
            {!isLogin ? <p>please login first</p>:<p>Checkout</p>}
            
        </div>
    )
}

export default Checkout;