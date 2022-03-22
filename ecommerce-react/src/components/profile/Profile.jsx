import { useEffect, useState } from "react";
import { Button, Col, Row } from "react-bootstrap";

const Profile = ({ userId, onLogout }) => {
  const [user, setUser] = useState({});

  useEffect(() => {
    fetch(`https://fakestoreapi.com/users/${userId}`)
      .then((res) => res.json())
      .then((json) => setUser(json));
  }, [userId]);
  return (
    <div>
      <Row>
        <Col>{user.email}</Col>
      </Row>
      <Button onClick={onLogout}>Logout</Button>
    </div>
  );
};
export default Profile;
