import { useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState({ firstname: "", lastname: "" });
  const [address, setAddress] = useState({
    city: "",
    street: "",
    number: "",
    zipcode: "",
    geolocation: { lat: "", long: "" },
  });
  const [phone, setPhone] = useState("");

  const onEmailChange = (event) => {
    setEmail(event.target.value);
  };
  const onUsernameChange = (event) => {
    setUsername(event.target.value);
  };
  const onPasswordChange = (event) => {
    setPassword(event.target.value);
  };
  const onFirstnameChange = (event) => {
    let firstName = event.target.value;
    setName((prevState) => {
      return { ...prevState, firstname: firstName };
    });
  };
  const onLastnameChange = (event) => {
    let lastName = event.target.value;
    setName((prevState) => {
      return { ...prevState, lastname: lastName };
    });
  };
  const onCityChange = (event) => {
    let city = event.target.value;
    setAddress((prevState) => {
      return { ...prevState, city: city };
    });
  };
  const onStreetChange = (event) => {
    let street = event.target.value;
    setAddress((prevState) => {
      return { ...prevState, street: street };
    });
  };
  const onNumberChange = (event) => {
    let number = event.target.value;
    setAddress((prevState) => {
      return { ...prevState, number: number };
    });
  };
  const onZipChange = (event) => {
    let zip = event.target.value;
    setAddress((prevState) => {
      return { ...prevState, zipcode: zip };
    });
  };
  const onPhoneChange = (event) => {
    setPhone(event.target.value);
  };

  const onSubmitRegister = () => {
    fetch("https://fakestoreapi.com/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: email,
        username: username,
        password: password,
        name: {
          firstname: name.firstname,
          lastname: name.lastname,
        },
        address: {
          city: address.city,
          street: address.street,
          number: 3,
          zipcode: address.zipcode,
          geolocation: {
            lat: address.geolocation.lat,
            long: address.geolocation.long,
          },
        },
        phone: phone,
      }),
    })
      .then((res) => res.json())
      .then((json) => {
        return console.log(json);
      });
  };

  return (
    <div style={{ width: "50rem" }} className="d-flex justify-content-center">
      <Form className="container m-3 p-2 border rounded shadow">
        <Row>
          <Col>
            <h2>Register</h2>
          </Col>
        </Row>
        <Row className="m-3">
          <Col>
            <Form.Control
              type="email"
              placeholder="Email"
              onChange={onEmailChange}
            />
          </Col>
        </Row>
        <Row className="m-3">
          <Col>
            <Form.Control placeholder="Username" onChange={onUsernameChange} />
          </Col>
        </Row>
        <Row className="m-3">
          <Col>
            <Form.Control
              type="password"
              placeholder="Password"
              onChange={onPasswordChange}
            />
          </Col>
        </Row>
        <Row className="m-3">
          <Col>
            <Form.Control
              placeholder="First name"
              onChange={onFirstnameChange}
            />
          </Col>
          <Col>
            <Form.Control placeholder="Last name" onChange={onLastnameChange} />
          </Col>
        </Row>
        <Row className="m-3">
          <Col>
            <Form.Control placeholder="Address" onChange={onStreetChange} />
          </Col>
        </Row>

        <Row className="m-3">
          <Col>
            <Form.Control placeholder="Number" onChange={onNumberChange} />
          </Col>
          <Col>
            <Form.Control placeholder="City" onChange={onCityChange} />
          </Col>

          <Col>
            <Form.Control placeholder="Zip code" onChange={onZipChange} />
          </Col>
        </Row>
        <Row className="m-3">
          <Col>
            <Form.Control placeholder="Phone number" onChange={onPhoneChange} />
          </Col>
        </Row>
        <Button variant="dark" onClick={onSubmitRegister}>
          Submit Register
        </Button>
      </Form>
    </div>
  );
};
export default Signup;
