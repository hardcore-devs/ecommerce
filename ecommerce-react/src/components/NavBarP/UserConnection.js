import { Button, Col, NavLink, Row } from "react-bootstrap";

const UserConnection = ({ isLogin, username, onRouteChange }) => {
  if (isLogin) {
    return (
      <div style={{ color: "white", display: "flex" }}>
        <div>
          Hello,
          <Button
            variant="outline-light"
            onClick={() => onRouteChange("profile")}
          >
            {username}
          </Button>
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <Row>
          <Col>
            <NavLink onClick={() => onRouteChange("signin")}>Sign In</NavLink>
          </Col>
          <Col>
            <NavLink onClick={() => onRouteChange("signup")}>Register</NavLink>
          </Col>
        </Row>
      </div>
    );
  }
};
export default UserConnection;
