import { useEffect, useState } from "react";
import { Button, Col, Row } from "react-bootstrap";

const CartItem = ({ cartProduct, rmCartItem }) => {
  const [product, setProduct] = useState([]);

  const itemId = cartProduct.productId;

  const rmItemHandler = () => {
    rmCartItem(itemId);
  };

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${itemId}`)
      .then((res) => res.json())
      .then((json) => setProduct(json));
  }, [itemId]);

  return (
    <div className="d-flex justify-content-between">
      <Col>
        <img alt="item" src={product.image} width="50px" className="p-1" />
      </Col>

      <Col>
        <Row>
          <div className="p-1">{product.title || "title"}</div>
        </Row>
        <Row>
          <div className="d-flex">
            <button>-</button>
            <div className="p-2">{cartProduct.quantity}</div>
            <button>+</button>
          </div>
        </Row>
      </Col>
      <Col>
        <div className="p-1">${product.price}</div>
      </Col>
      <Button variant="dark" onClick={rmItemHandler}>
        x
      </Button>
    </div>
  );
};
export default CartItem;
