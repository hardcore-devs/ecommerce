import { Button } from "bootstrap";
import AddressSelection from "./AddressSelection";
import PaymentMethod from "./PaymentMethod";
import ReviewItens from "./ReviewItens";

const Checkout = ({ cart, isLogin, rmCartItem, userId }) => {
  let existItem = true;
  if (isLogin === true && existItem) {
    return (
      <div className="container">
        <AddressSelection userId={userId} />
        <PaymentMethod userId={userId} />
        <ReviewItens cart={cart} rmCartItem={rmCartItem} userId={userId} />
      </div>
    );
  } else if (isLogin === true) {
    return <h1> your cart is empty </h1>;
  } else {
    return <h1>you are not logged in</h1>;
  }

  // return(
  //
  // )
};

export default Checkout;
