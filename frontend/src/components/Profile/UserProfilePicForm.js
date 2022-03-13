import React, { useEffect, useState } from "react";
import ApiService from "../../ApiService";
import { Container, Row, Col, Figure, Form, Button } from "react-bootstrap";

export default function UserProfilePicForm(props) {
  const [profile_pic, set_profile_pic] = useState(props.userInfo.mobilePhone);

  useEffect(() => {
    set_profile_pic(props.userInfo.profile_pic);
  }, [props.userInfo]);

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
    ApiService.UpdateUserInfo_ProfilePic(
      props.userInfo.user_id,
      profile_pic
    ).then((resp) => {
      props.updatedInformation(resp.data);
    });
  };
  return (
    <Container fluid>
      {props.userInfo ? (
        <>
          <Row className="text-center">Update User Info Form</Row>
          <Row className="mb-4">
            <Form
              noValidate
              validated={validated}
              onSubmit={(e) => onSubmit(e)}
              // className="text-center mb-2"
            >
              <Form.Group>
                <Form.Floating className="mb-2">
                  <Form.Control
                    type="file"
                    // value={profile_pic}
                    onChange={(e) => set_profile_pic(e.target.files[0])}
                    required
                  />
                  <label htmlFor="floatingInputCustom">profile_pic</label>
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
                Update
              </Button>
            </Form>
          </Row>
        </>
      ) : null}
    </Container>
  );
}
