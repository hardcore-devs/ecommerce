import { useEffect, useState } from "react";
import { Button, ButtonGroup, Col, Row } from "react-bootstrap";

const CartItem = ({ cartProduct, rmCartItem }) => {
  const [product, setProduct] = useState([]);
  const [quantity, setQuantity] = useState(cartProduct.quantity);

  const itemId = cartProduct.productId;

  const rmItemHandler = () => {
    rmCartItem(itemId);
  };

  const onIncreaseQt = () => {
    setQuantity((prevState) => {
      return prevState + 1;
    });
  };
  const onDecreaseQt = () => {
    if (quantity > 0) {
      setQuantity((prevState) => {
        return prevState - 1;
      });
    }
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
            <ButtonGroup size="sm">
              <Button variant="secondary" onClick={onDecreaseQt}>
                -
              </Button>
              <Button variant="secondary" disabled>
                {quantity}
              </Button>
              <Button variant="secondary" onClick={onIncreaseQt}>
                +
              </Button>
            </ButtonGroup>
          </div>
        </Row>
      </Col>
      <Col>
        <div className="p-1">${product.price}</div>
      </Col>
      <Col>
        <Button variant="dark" onClick={rmItemHandler}>
          remove
        </Button>
      </Col>
    </div>
  );
};
export default CartItem;
