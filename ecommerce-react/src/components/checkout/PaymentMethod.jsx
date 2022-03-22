import { Button, Col, Container, Row } from "react-bootstrap";
import PaymentCard from "./PaymentCard";

const PaymentMethod = () => {
  return (
    <>
      <Container className="border rounded p-2 m-2 shadow">
        <Row>
          <Col xs="auto">
            <h5>2 Payment Method</h5>{" "}
          </Col>
          <Col>
            <PaymentCard />
          </Col>
          <Col xs="auto">
            <Button>Change Method</Button>
          </Col>
        </Row>
      </Container>
    </>
    // <div className="container border rounded m-2 d-flex start">
    //   <Row>
    //     <Col>
    //       <input type="radio" id="card" name="method" value="card" checked />
    //       <label for="card">Card</label>
    //     </Col>
    //   </Row>
    //   <Row>
    //     <Col>
    //       <input type="radio" id="money" name="method" value="money" checked />
    //       <label for="money">Money</label>
    //     </Col>
    //   </Row>
    // </div>
  );
};
export default PaymentMethod;
