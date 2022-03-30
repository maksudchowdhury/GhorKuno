import React, { useState, useEffect } from "react";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import ResetPassword from "../../containers/LogInAndSignUp/ResetPassword";
import { Form, Container, Row, Col, Figure } from "react-bootstrap";
import useFetchGet from "../../hocs/useFetchGet";

import UserInfo from "./UserInfo";
import UserInfoForm from "./UserInfoForm";
import UserProfilePicForm from "./UserProfilePicForm";
import UserInfoProfilePic from "./UserInfoProfilePic";

import {
  Button,
  CardActionArea,
  CardActions,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Avatar,
  styled,
  Rating,
} from "@mui/material";

import RestartAltRoundedIcon from "@mui/icons-material/RestartAltRounded";

const UserInfoIndex = ({ isAuthenticated }) => {
  const [authUser, setAuthUser] = useState([]);
  const [userList, setUserList] = useState([]);

  const [editUserInfo, setEditUserInfo] = useState(null);
  const [isUpdateBtn, setIsUpdateBtn] = useState(false);
  const [isUpdateBtn_ProfilePic, setIsUpdateBtn_ProfilePic] = useState(false);

  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `JWT ${localStorage.getItem("access")}`,
      Accept: "application/json",
    },
  };

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/auth/users/me/`, config)
      .then((res) => setAuthUser(res.data))
      .catch((error) => console.log(error));
  }, [isAuthenticated]);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/accounts/userInfo/`, config)
      .then((res) => setUserList(res.data))
      .catch((error) => console.log(error));
  }, []);

  const [user] = userList.filter(
    (userData) => userData.user_id === authUser.id
  );

  const editBtn = (new_user) => {
    setEditUserInfo(new_user);
    setIsUpdateBtn(true);
  };

  const editBtn_ProfilePic = (new_user) => {
    setEditUserInfo(new_user);
    setIsUpdateBtn_ProfilePic(true);
  };

  const updatedInformation = (new_) => {
    const new_userList = userList.map((old_) => {
      if (new_.id === old_.id) {
        return new_;
      } else {
        return old_;
      }
    });

    setUserList(new_userList);
    setIsUpdateBtn(false);
    setIsUpdateBtn_ProfilePic(false);
  };

  const userInfoForm = () => {
    setEditUserInfo({
      first_name: "",
      last_name: "",
      house_name: "",
      road_no: "",
      block_no: "",
      area: "",
      city: "",
      district: "",
      mobilePhone: "",
    });
  };

  const navigate = useNavigate();
  const reset_password_btn_click = () => {
    navigate("/reset-password");
  };

  return (
    <Container fluid>
      <Row>
        <Col sm={1} />
        <Col
          className="p-4 rounded-3 text-center text-white fs-1 fw-bold "
          style={{
            background: "#FFBD2D",
          }}
        >
          Profile
        </Col>
        <Col sm={1} />
      </Row>
      <br />
      <Row>
        <Col
          sm={6}
          className=" text-center justify-content-center"
          // style={{
          //   background: "#FFBD2D",
          // }}
        >
          {user && user.profile_pic ? (
            <UserInfoProfilePic
              userInfo={user}
              editBtn_ProfilePic={editBtn_ProfilePic}
              userInfoForm={userInfoForm}
            />
          ) : (
            <h1>
              Please update your profile pic.
              <br />
              <Col className="justify-content-center">
                <button
                  className="btn btn-danger p-2"
                  onClick={() => editBtn_ProfilePic(user)}
                >
                  Want to update your Profile Pic?
                </button>
              </Col>
            </h1>
          )}
        </Col>
        <Col
          sm={4}
          className="shadow-lg p-4 rounded-3 text-white"
          style={{
            background: "#FFBD2D",
          }}
        >
          {user && user.first_name !== "" ? (
            <UserInfo
              userInfo={user}
              editBtn={editBtn}
              userInfoForm={userInfoForm}
            />
          ) : (
            <div>
              Your profile is not updated yet..
              <br /> Please update your profile info first.
              <br />
              <Row>
                <Col sm>
                  <button
                    className="btn btn-danger p-2"
                    onClick={() => editBtn(user)}
                  >
                    Want to update your info?
                  </button>
                </Col>
              </Row>
            </div>
          )}
        </Col>
      </Row>
      <Row className="p-2">
        <Row>
          <Col sm={3} />
          <Col sm={6}>
            {isUpdateBtn ? (
              <UserInfoForm
                userInfo={editUserInfo}
                updatedInformation={updatedInformation}
                isUpdateBtn={isUpdateBtn}
              />
            ) : null}
            {isUpdateBtn_ProfilePic ? (
              <UserProfilePicForm
                userInfo={editUserInfo}
                updatedInformation={updatedInformation}
                isUpdateBtn_ProfilePic={isUpdateBtn_ProfilePic}
              />
            ) : null}
          </Col>
          <Col sm={3} />
        </Row>
      </Row>
      <Row className="py-5 justify-content-center">
        <Button
          variant="contained"
          size="large"
          startIcon={<RestartAltRoundedIcon />}
          onClick={reset_password_btn_click}
          style={{
            width: "30%",
            background: "#dc3545",
          }}
        >
          Reset password
        </Button>
      </Row>
    </Container>
  );
};

export default UserInfoIndex;
