import React, { useState, useEffect } from "react";
import { Row, Col, Container, Form, Button } from "react-bootstrap";
import ApiService from "../ApiService";
import useUserInfo from "../hocs/useUserInfo";

export default function ContactUs() {
  const [user] = useUserInfo();
  const [name, set_name] = useState();
  const [subject, set_subject] = useState();
  const [desc, set_desc] = useState();

  const setNull = () => {
    set_name("");
    set_subject("");
    set_desc("");
  };

  const [validated, setValidated] = useState(false);
  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  const onSubmit = (e) => {
    handleSubmit(e);
    e.preventDefault();
    ApiService.Insert_ContactUs(user.user_id, name, subject, desc)
      .then(setNull())
      .then(
        alert(
          "You have successfully submitted the form.\n\nWe will contact you latter."
        )
      );
  };

  return (
    <Container fluid>
      <Row>
        <Col sm={1}></Col>
        <Col sm={4} className=" fw-bold text-white fs-1 p-2">
          <Row className="p-4">
            <Col sm={2}></Col>
            <Col sm>
              <h3
                className="shadow-lg rounded-3 fw-bold text-white text-center fs-1 p-2"
                style={{
                  background: "#FFBD2D",
                }}
              >
                Developers
              </h3>
            </Col>
            <Col sm={2}></Col>
          </Row>
          <Row className="pb-5">
            <Col sm={1}></Col>
            <Col
              sm
              className="shadow-lg rounded-3 text-white p-2 fs-4"
              style={{
                background: "red",
              }}
            >
              Md. Shahadat Anik Sheikh
              <br />
              Student Id: 2019-1-60-068
              <br />
              East West University
            </Col>
            <Col sm={1}></Col>
          </Row>

          <Row className="pb-5">
            <Col sm={1}></Col>
            <Col
              sm
              className="shadow-lg rounded-3 text-white p-2 fs-4"
              style={{
                background: "red",
              }}
            >
              Ajmiri Afrin Priniya
              <br />
              Student Id: 2019-1-60-061
              <br />
              East West University
            </Col>
            <Col sm={1}></Col>
          </Row>

          <Row className="pb-2">
            <Col sm={1}></Col>
            <Col
              sm
              className="shadow-lg rounded-3 text-white p-2 fs-4"
              style={{
                background: "red",
              }}
            >
              AKM Sadat
              <br />
              Student Id: 2018-2-60-127
              <br />
              East West University
            </Col>
            <Col sm={1}></Col>
          </Row>
        </Col>
        <Col sm={1}></Col>
        <Col sm={5} className=" p-5">
          <Row className="p-4">
            <Col sm={2}></Col>
            <Col sm>
              <h3
                className="shadow-lg rounded-3 fw-bold text-center text-white fs-1 p-2"
                style={{
                  background: "#FFBD2D",
                }}
              >
                For Query
              </h3>
            </Col>
            <Col sm={2}></Col>
          </Row>
          <Row>
            <Form
              noValidate
              validated={validated}
              onSubmit={(e) => onSubmit(e)}
            >
              <Form.Group>
                <Form.Floating className="mb-4">
                  <Form.Control
                    className=" rounded-3"
                    type="text"
                    name="name"
                    value={name}
                    onChange={(e) => set_name(e.target.value)}
                    required
                  />
                  <label htmlFor="floatingInputCustom">Name</label>
                </Form.Floating>
              </Form.Group>
              <Form.Group>
                <Form.Floating className="mb-4">
                  <Form.Control
                    className=" rounded-3"
                    type="text"
                    name="subject"
                    value={subject}
                    onChange={(e) => set_subject(e.target.value)}
                    required
                  />
                  <label htmlFor="floatingInputCustom">Subject</label>
                </Form.Floating>
              </Form.Group>
              <Form.Group>
                <Form.Floating className="mb-4">
                  <Form.Control
                    className=" rounded-3"
                    name="desc"
                    as="textarea"
                    style={{ height: "150px" }}
                    value={desc}
                    onChange={(e) => set_desc(e.target.value)}
                    required
                  />
                  <label htmlFor="floatingInputCustom">Description</label>
                </Form.Floating>
              </Form.Group>

              <Button
                variant="danger"
                type="submit"
                className=" rounded-3 text-white fw-bold fs-4"
                style={{
                  width: "100%",
                }}
              >
                Sent
              </Button>
            </Form>
          </Row>
        </Col>
      </Row>
      <Row>
        <br />
      </Row>
    </Container>
  );
}
