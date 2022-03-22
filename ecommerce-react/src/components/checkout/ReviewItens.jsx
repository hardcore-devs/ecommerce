import { Col, Row } from "react-bootstrap";
import { CartContent } from "../NavBarP/CartContent";

const ReviewItens = ({ cart, rmCartItem, userId }) => {
  return (
    <div className="container border rounded p-2 m-2 shadow">
      <Row>
        <Col xs="auto">
          <h5>3 Review Itens</h5>{" "}
        </Col>
        <Col>
          <CartContent cart={cart} rmCartItem={rmCartItem} userId={userId} />
        </Col>
      </Row>
    </div>
  );
};
export default ReviewItens;
