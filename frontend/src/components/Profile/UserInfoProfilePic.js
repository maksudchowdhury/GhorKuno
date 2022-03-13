import { Container, Row, Col, Figure, Button } from "react-bootstrap";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";

export default function UserInfoProfilePic(props) {
  const navigate = useNavigate();
  const reset_password_btn_click = () => {
    navigate("/reset-password");
  };

  const editBtn_ProfilePic = (user) => {
    props.editBtn_ProfilePic(user);
  };

  return (
    <>
      <Figure className=" py-2 text-center justify-content-center">
        <Figure.Image
          className=" p-2 text-center justify-content-center rounded-3"
          width={350}
          alt="none"
          src={props.userInfo.profile_pic}
        />
      </Figure>

      <Row className="justify-content-center py-2">
        <Button
          className="btn btn-danger"
          onClick={() => editBtn_ProfilePic(props.userInfo)}
          style={{
            width: "50%",
          }}
        >
          Want to update your Profile Pic?
        </Button>
      </Row>
    </>
  );
}
