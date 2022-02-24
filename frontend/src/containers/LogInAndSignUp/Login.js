import React, { useState } from "react";
import { Link, Navigate, useLocation } from "react-router-dom";
import { connect } from "react-redux";
import { login } from "../../redux/actions/auth";

import { Form, Container, Row, Col, Button, Figure } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import kitchen_mom from "../../assets/kitchen_mom.svg";
import ghorKuno_Combained from "../../assets/ghorKuno_Combined.png";

const Login = ({ login, isAuthenticated }) => {
  const [validated, setValidated] = useState(false);

  let isSignUp = false;
  let isResetPassword = false;
  let isResetPasswordConfirm = false;
  let isVerified = false;
  const location = useLocation();
  if (location.state) {
    isSignUp = location.state.isSignUp;
    isResetPassword = location.state.isResetPassword;
    isResetPasswordConfirm = location.state.isResetPasswordConfirm;
    isVerified = location.state.isVerified;
  }

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  const notify = () => {
    toast.success("Check your mail", {
      autoClose: 3000,
      position: toast.POSITION.BOTTOM_CENTER,
    });
  };

  const onSubmit = (e) => {
    handleSubmit(e);
    e.preventDefault();
    login(email, password);
  };

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  if (isAuthenticated) {
    return <Navigate to="/home" />;
  }
  // After Signup show this info

  const showAfterSignup = () => (
    <Row
      className="text-center text-white fs-4 fw-bold rounded-3"
      style={{
        background: "#935B50",
      }}
    >
      <Col sm>
        A confirmation has been sent to your mail.
        <br />
        Please, check your mail to verify the account...
      </Col>
    </Row>
  );

  const showAfterResetPassword = () => (
    <Row
      className="text-center text-white fs-4 fw-bold rounded-3"
      style={{
        background: "#935B50",
      }}
    >
      <Col sm>
        A confirmation has been sent to your mail.
        <br />
        Please, check your mail to Reset Password...
      </Col>
    </Row>
  );
  const showAfterResetPasswordConfirm = () => (
    <Row
      className="text-center text-white fs-4 fw-bold rounded-3"
      style={{
        background: "#935B50",
      }}
    >
      <Col sm>
        Successfully changed your password.
        <br />
        Now you can login with updated password...
      </Col>
    </Row>
  );

  const showAfterVerified = () => (
    <Row
      className="text-center text-white fs-4 fw-bold rounded-3"
      style={{
        background: "#935B50",
      }}
    >
      <Col sm>
        Your account has successfully verified.
        <br />
        Now you can login with email and password...
      </Col>
    </Row>
  );

  return (
    <Container fluid>
      <Row>
        <Col sm={4} />
        <Col sm={4}>
          <Row>
            <Figure className="text-center p-2">
              <Figure.Image
                width={300}
                height={200}
                alt="none"
                src={ghorKuno_Combained}
              />
            </Figure>
          </Row>
          <Row>
            <Form
              noValidate
              validated={validated}
              onSubmit={(e) => onSubmit(e)}
              className="text-center mb-3"
            >
              <Form.Group>
                <Form.Floating className="mb-3">
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
                <Form.Floating className="mb-3">
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
              <Button
                variant="danger"
                type="submit"
                className=" rounded-3 text-white fw-bold fs-4"
                style={{
                  height: "30%",
                  width: "100%",
                }}
              >
                Login
              </Button>
            </Form>
          </Row>
          <Row>
            <br />
          </Row>
          <Row>
            <Col sm={6}>
              <Link to="/signup" className="text-decoration-none">
                <Button
                  variant="warning"
                  type="submit"
                  className=" rounded-3 text-black fw-bold fs-5"
                  style={{
                    width: "100%",
                  }}
                >
                  New here? Sign up
                </Button>
              </Link>
            </Col>
            <Col sm={6}>
              <Link to="/reset-password">
                <Button
                  variant="danger"
                  type="submit"
                  className=" rounded-3 text-white fw-bold fs-5"
                  style={{
                    width: "100%",
                  }}
                >
                  Reset Password
                </Button>
              </Link>
            </Col>
          </Row>
          <Row>
            <br />
          </Row>
          {isSignUp ? showAfterSignup() : null}
          {isResetPassword ? showAfterResetPassword() : null}
          {isResetPasswordConfirm ? showAfterResetPasswordConfirm() : null}
          {isVerified ? showAfterVerified() : null}
        </Col>
        <Col sm={4} />
      </Row>
      <Row className="justify-content-center">
        {/* <Col sm={4} />
        <Col sm={4} />
        <Col sm={4}> */}
        <Figure className="justify-content-center">
          <Figure.Image height={400} alt="none" src={kitchen_mom} />
        </Figure>
        {/* </Col> */}
      </Row>
    </Container>
  );
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { login })(Login);
