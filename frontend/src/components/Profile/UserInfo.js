import { Container, Row, Col, Figure, Button } from "react-bootstrap";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";

export default function UserInfo(props) {
  const navigate = useNavigate();
  const reset_password_btn_click = () => {
    navigate("/reset-password");
  };
  const editBtn = (user) => {
    props.editBtn(user);
  };

  return (
    <>
      <Row>
        <Col sm className="text-white fw-bold fs-3 justify-content-center">
          Name: {props.userInfo.first_name} {props.userInfo.last_name}
          <br />
          Address: {props.userInfo.house_name}, {props.userInfo.road_no},{" "}
          {props.userInfo.block_no}, {props.userInfo.area},{" "}
          {props.userInfo.city}
          <br />
          District: {props.userInfo.district}
          <br />
          Mobile Phone: {props.userInfo.mobilePhone}
          <br />
        </Col>
      </Row>
      <Row>
        <span className="text-white fw-bold fs-3">
          Joined: {props.userInfo.createdTime[8]}
          {props.userInfo.createdTime[9]}
          {props.userInfo.createdTime[7]}
          {props.userInfo.createdTime[5]}
          {props.userInfo.createdTime[6]}
          {props.userInfo.createdTime[4]}
          {props.userInfo.createdTime[0]}
          {props.userInfo.createdTime[1]}
          {props.userInfo.createdTime[2]}
          {props.userInfo.createdTime[3]}
        </span>
      </Row>
      <Row className="justify-content-center py-2">
        <Col sm>
          <Button
            className="btn btn-danger "
            onClick={() => editBtn(props.userInfo)}
            style={{ display: "flex", justifyContent: "center" }}
          >
            Want to update your info?
          </Button>
        </Col>
      </Row>
    </>
  );
}
