import "./ProductCard.css";
import { Card, ListGroup, ListGroupItem } from "react-bootstrap";
import { Button } from "react-bootstrap";

const ProductCard = ({
  id,
  image,
  title,
  category,
  price,
  rate,
  count,
  onProductClick,
  addToCart,
  addToFav,
}) => {
  const onClickAddToCart = () => {
    addToCart(id);
  };
  const onClickAddToFav = () => {
    addToFav(id);
  };
  const clickProductHandler = () => {
    onProductClick(id);
  };

  return (
    <div>
      <Card
        style={{ width: "18rem", padding: "2rem" }}
        className="p-2 m-2 shadow "
      >
        <Card.Img variant="top" src={image} className="card-img p-2  " />
        <Card.Body>
          <Card.Title>
            <h5 onClick={clickProductHandler} style={{ cursor: "pointer" }}>
              {title}
            </h5>
          </Card.Title>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroupItem>Category: {category}</ListGroupItem>
          <ListGroupItem>
            Rate: {rate}| Votes: {count}
          </ListGroupItem>

          <ListGroupItem>Price: ${price}</ListGroupItem>
        </ListGroup>
        <Card.Body>
          <Button onClick={onClickAddToCart} className="m-1">
            Add to Cart
          </Button>
          <Button onClick={onClickAddToFav} className="m-1">
            Add to Fav
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};
export default ProductCard;
