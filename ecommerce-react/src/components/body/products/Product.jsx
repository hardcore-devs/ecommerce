import { useEffect, useState } from "react";
import { Breadcrumb, Button, Col, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";

const Product = ({ id, cart, onAddToCart }) => {
  const [product, setProduct] = useState([]);

  //   let { id } = useParams();

  // const params = new URLSearchParams(window.location.search);
  // const paramValue = params.get("id");
  // console.log(paramValue)
  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((json) => setProduct(json))
      .then(console.log("settign product"));
  }, [id]);
  console.log(id);

  return (
    <div className="container p-5 position-relative shadow rounded m-5">
      <Row>
        <Breadcrumb>
          <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
          <Breadcrumb.Item href="/category">{product.category}</Breadcrumb.Item>
          <Breadcrumb.Item active>{product.title}</Breadcrumb.Item>
        </Breadcrumb>
      </Row>
      <Row>
        <Col>
          <img src={product.image} alt="product" style={{ width: "25rem" }} />
        </Col>
        <Col>
          <div id="product-body">
            <h4>{product.title}</h4>
            <p>{product.description}</p>
            <div>
              {/* rate: {product.rating.rate} | votes: {product.rating.count} */}
            </div>
            <h3>Price: {product.price}</h3>
            <div>
              <Button onClick={() => onAddToCart(id)}>Add to cart</Button>
              <Button>Favorite</Button>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};
export default Product;
