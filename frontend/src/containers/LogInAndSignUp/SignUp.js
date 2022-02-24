import React, { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import { signup } from "../../redux/actions/auth";

import { Form, Container, Row, Col, Button, Figure } from "react-bootstrap";

import ghorKuno_Combained from "../../assets/ghorKuno_Combined.png";
import signup_lady from "../../assets/signup_lady.svg";

const Signup = ({ signup, isAuthenticated }) => {
  const navigate = useNavigate();
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  const [accountCreated, setAccountCreated] = useState(false);
  const [is_worker, setIs_worker] = useState(false);
  // const [profile_picture, setProfile_picture] = useState();
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    house_name: "",
    road_no: "",
    block_no: "",
    area: "",
    city: "",
    district: "",
    mobilePhone: "",
    password: "",
    re_password: "",
  });

  const handleOnChange = () => {
    setIs_worker(!is_worker);
  };

  const {
    first_name,
    last_name,
    email,
    house_name,
    road_no,
    block_no,
    area,
    city,
    district,
    mobilePhone,
    password,
    re_password,
  } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    handleSubmit(e);
    e.preventDefault();
    if (password === re_password && password && re_password) {
      signup(
        first_name,
        last_name,
        email,
        house_name,
        road_no,
        block_no,
        area,
        city,
        district,
        mobilePhone,
        is_worker,
        password,
        re_password
      );
      setAccountCreated(true);
    }
    // else return alert("Password's doesn't match!!");
  };

  if (isAuthenticated) {
    return <Navigate to="/home" />;
  }
  // if (accountCreated) {
  //   return <Login isSignUp={accountCreated} />;
  // }
  if (accountCreated) {
    navigate("/login", { state: { isSignUp: accountCreated } });
    setAccountCreated(false);
  }
  //className="d-flex justify-content-center"

  return (
    <Container fluid>
      <Row className="text-center">
        <Figure className="text-center p-2">
          <Figure.Image
            width={300}
            height={200}
            alt="none"
            src={ghorKuno_Combained}
          />
        </Figure>
      </Row>
      <Row className="mb-4">
        <Col sm={6}>
          <Figure className="text-center">
            <Figure.Image width={1000} alt="none" src={signup_lady} />
          </Figure>
        </Col>
        <Col sm={4} className="justify-content-center">
          <Form
            noValidate
            validated={validated}
            onSubmit={(e) => onSubmit(e)}
            // className="text-center mb-2"
          >
            <Row>
              <Form.Group as={Col} md="6">
                <Form.Floating className="mb-2">
                  <Form.Control
                    className=" rounded-3"
                    type="text"
                    placeholder="name"
                    name="first_name"
                    value={first_name}
                    onChange={(e) => onChange(e)}
                    required
                  />
                  <label htmlFor="floatingInputCustom">First Name</label>
                </Form.Floating>
              </Form.Group>
              <Form.Group as={Col} md="6">
                <Form.Floating className="mb-2">
                  <Form.Control
                    className=" rounded-3"
                    type="text"
                    placeholder="name"
                    name="last_name"
                    value={last_name}
                    onChange={(e) => onChange(e)}
                    required
                  />
                  <label htmlFor="floatingInputCustom">Last Name</label>
                </Form.Floating>
              </Form.Group>
            </Row>
            <Row>
              <Form.Group as={Col} md="4">
                <Form.Floating className="mb-2">
                  <Form.Control
                    className=" rounded-3"
                    type="text"
                    placeholder="name"
                    name="house_name"
                    value={house_name}
                    onChange={(e) => onChange(e)}
                    required
                  />
                  <label htmlFor="floatingInputCustom">House name</label>
                </Form.Floating>
              </Form.Group>
              <Form.Group as={Col} md="4">
                <Form.Floating className="mb-2">
                  <Form.Control
                    className=" rounded-3"
                    type="text"
                    placeholder="name"
                    name="road_no"
                    value={road_no}
                    onChange={(e) => onChange(e)}
                    required
                  />
                  <label htmlFor="floatingInputCustom">Road no</label>
                </Form.Floating>
              </Form.Group>
              <Form.Group as={Col} md="4">
                <Form.Floating className="mb-2">
                  <Form.Control
                    className=" rounded-3"
                    type="text"
                    placeholder="name"
                    name="block_no"
                    value={block_no}
                    onChange={(e) => onChange(e)}
                    required
                  />
                  <label htmlFor="floatingInputCustom">Block no</label>
                </Form.Floating>
              </Form.Group>
            </Row>
            <Row>
              <Form.Group as={Col} md="4">
                <Form.Floating className="mb-2">
                  <Form.Control
                    className=" rounded-3"
                    type="text"
                    placeholder="name"
                    name="area"
                    value={area}
                    onChange={(e) => onChange(e)}
                    required
                  />
                  <label htmlFor="floatingInputCustom">Area</label>
                </Form.Floating>
              </Form.Group>
              <Form.Group as={Col} md="4">
                <Form.Floating className="mb-2">
                  <Form.Control
                    className=" rounded-3"
                    type="text"
                    placeholder="name"
                    name="city"
                    value={city}
                    onChange={(e) => onChange(e)}
                    required
                  />
                  <label htmlFor="floatingInputCustom">City</label>
                </Form.Floating>
              </Form.Group>
              <Form.Group as={Col} md="4">
                <Form.Floating className="mb-2">
                  <Form.Control
                    className=" rounded-3"
                    type="text"
                    placeholder="name"
                    name="district"
                    value={district}
                    onChange={(e) => onChange(e)}
                    required
                  />
                  <label htmlFor="floatingInputCustom">District</label>
                </Form.Floating>
              </Form.Group>
            </Row>
            <Form.Group>
              <Form.Floating className="mb-2">
                <Form.Control
                  className=" rounded-3"
                  type="text"
                  placeholder="name"
                  name="mobilePhone"
                  value={mobilePhone}
                  onChange={(e) => onChange(e)}
                  required
                />
                <label htmlFor="floatingInputCustom">Mobile Phone</label>
              </Form.Floating>
            </Form.Group>

            <Form.Group>
              <Form.Floating className="mb-2">
                <Form.Control
                  className=" rounded-3"
                  type="email"
                  placeholder="name@example.com"
                  name="email"
                  value={email}
                  onChange={(e) => onChange(e)}
                  required
                />
                <label htmlFor="floatingInputCustom">Email address</label>
              </Form.Floating>
            </Form.Group>
            <Form.Group>
              <Form.Floating className="mb-2">
                <Form.Control
                  className=" rounded-3"
                  type="password"
                  placeholder="Password"
                  name="password"
                  value={password}
                  onChange={(e) => onChange(e)}
                  required
                />
                <label htmlFor="floatingPasswordCustom">Password</label>
              </Form.Floating>
            </Form.Group>
            <Form.Group>
              <Form.Floating className="mb-2">
                <Form.Control
                  className=" rounded-3"
                  type="password"
                  placeholder="Password"
                  name="re_password"
                  value={re_password}
                  onChange={(e) => onChange(e)}
                  required
                />
                <label htmlFor="floatingPasswordCustom">Confirm Password</label>
              </Form.Floating>
            </Form.Group>
            <Form.Group>
              <Form.Check
                type="switch"
                value={is_worker}
                onChange={handleOnChange}
                label="Are you a worker?"
              />
            </Form.Group>
            <Button
              variant="danger"
              type="submit"
              className=" rounded-3 text-white fw-bold fs-4"
              style={{
                // height: "30%",
                width: "100%",
              }}
            >
              Sign Up
            </Button>
          </Form>
          <Row>
            <br />
          </Row>
          <Col sm>
            <Link to="/login" className="text-decoration-none">
              <Button
                variant="warning"
                type="submit"
                className=" rounded-3 text-black fw-bold fs-5"
                style={{
                  width: "100%",
                }}
              >
                Already have an account?
              </Button>
            </Link>
          </Col>
          {/* </Col> */}
        </Col>
      </Row>
    </Container>
  );
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { signup })(Signup);
