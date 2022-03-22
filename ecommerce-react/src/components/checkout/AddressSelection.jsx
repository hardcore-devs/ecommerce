import { Button, Col, Container, Row } from "react-bootstrap";
import AddressCard from "./AddressCard";

const AddressSelection = ({ userId }) => {
  return (
    <>
      <Container className="border rounded p-2 m-2 shadow">
        <Row>
          <Col xs="auto">
            <h5>1 Delivery Address</h5>{" "}
          </Col>
          <Col>
            <AddressCard userId={userId} />
          </Col>
          <Col xs="auto">
            <Button>Change Address</Button>
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default AddressSelection;
