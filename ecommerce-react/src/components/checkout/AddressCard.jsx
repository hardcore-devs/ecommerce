import { useState, useEffect } from "react";

const AddressCard = ({ userId }) => {
  const [address, setAddress] = useState({});

  //get address options for user
  useEffect(() => {
    fetch(`https://fakestoreapi.com/users/${userId}`)
      .then((res) => res.json())
      .then((user) => setAddress(user.address));
  }, [userId]);

  return (
    <div style={{ width: "300px", fontSize: "10px" }}>
      {/* <div className="d-flex">{address.reciever}</div> */}
      <div className="d-flex">
        Street: {address.street}, Nº: {address.number}
      </div>
      <div className="d-flex">
        City: {address.city}, ZipCode: {address.zipcode}
      </div>
    </div>
  );
};
export default AddressCard;
