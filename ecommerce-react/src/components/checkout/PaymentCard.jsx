import { useState } from "react";

const PaymentCard = () => {
  const [payment, setPayment] = useState({
    type: "card",
    number: "xxxxxxxxxxxxxx",
  });
  return (
    <div className="container d-flex">
      <div>
        <span>Master Card credit</span>

        <span>{payment.number}</span>
      </div>
    </div>
  );
};
export default PaymentCard;
