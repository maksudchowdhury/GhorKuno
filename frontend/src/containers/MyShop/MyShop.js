import React, { useEffect, useState } from "react";
import axios from "axios";
import { Container, Row, Col, Figure } from "react-bootstrap";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";

import MyShopForm from "./MyShopForm";
import MyShopItems from "./MyShopItems";

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

import { FavoriteIcon, FavoriteBorderIcon } from "@mui/icons-material";
import UpdateOutlinedIcon from "@mui/icons-material/UpdateOutlined";

const StyledRating = styled(Rating)({
  "& .MuiRating-iconFilled": {
    color: "#ff3d47",
  },
  "& .MuiRating-iconHover": {
    color: "#ff6d75",
  },
});

export default function MyShop({ isAuthenticated, user }) {
  const [shop, setShop] = useState([]);
  const [userId, setUserId] = useState([]);

  const [editShop, setEditShop] = useState(null);
  const [editShopItem, setEditShopItem] = useState(null);

  const [isUpdateBtn, setIsUpdateBtn] = useState(false);
  const [isUpdateBtn_item, setIsUpdateBtn_item] = useState(false);

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
      .then((res) => setUserId(res.data.id))
      .catch((error) => console.log(error));
  }, [isAuthenticated]);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/gk/shop/`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `JWT ${localStorage.getItem("access")}`,
        Accept: "application/json",
      },
    })
      .then((resp) => resp.json())
      .then((resp) => setShop(resp))
      .catch((error) => console.log(error));
  }, []);

  const editBtn = (new_user) => {
    setEditShop(new_user);
    setIsUpdateBtn(true);
  };

  const updatedInformation = (new_) => {
    const new_userList = shop.map((old_) => {
      if (new_.id === old_.id) {
        return new_;
      } else {
        return old_;
      }
    });

    setShop(new_userList);
    setIsUpdateBtn(false);
  };

  const userInfoForm = () => {
    setEditShop({
      shopName: "",
      detailedAddr: "",
      offerBDT: "",
      offerPercentage: "",
      offerTill: "",
    });
  };

  return (
    <>
      {shop
        .filter((s) => s.userID === userId)
        .map((myShop) => (
          <Container fluid key={myShop.id}>
            <Row>
              <Col sm={1} />
              <Col
                className="p-4 rounded-3 text-center text-white fs-1 fw-bold "
                style={{
                  background: "#FFBD2D",
                }}
              >
                {myShop.shopName === "" ? (
                  <div>Create Your Kitchen</div>
                ) : (
                  <div>My Kitchen</div>
                )}
              </Col>
              <Col sm={1} />
            </Row>
            <br />
            <Row>
              <Col sm={1} />
              <Col
                sm
                className="p-4  text-white "
                // style={{
                //   background: "#FFBD2D",
                // }}
              >
                {myShop.shopName === "" ? (
                  <MyShopForm
                    shopInfo={myShop}
                    editBtn={editBtn}
                    userInfoForm={userInfoForm}
                    updatedInformation={updatedInformation}
                  />
                ) : (
                  <Row>
                    <Col
                      sm
                      className="p-4 shadow-lg rounded-3 fs-2"
                      style={{
                        background: "#FFBD2D",
                      }}
                    >
                      <Row
                        style={{
                          background: "#dc3545",
                        }}
                        className="justify-content-center p-4 shadow-lg rounded-3 fs-2 mx-5 fw-bold my-3"
                      >
                        Kitchen Information
                      </Row>
                      <Row className="fs-2 mx-5 fw-bold my-3">
                        Name: {myShop.shopName}
                        <br />
                        Location: {myShop.detailedAddr}
                      </Row>
                    </Col>
                    <Col sm={1} />

                    <Col
                      sm
                      className="p-4 shadow-lg rounded-3 fs-2"
                      style={{
                        background: "#FFBD2D",
                      }}
                    >
                      <Row
                        style={{
                          background: "#dc3545",
                        }}
                        className="justify-content-center p-4 shadow-lg rounded-3 fs-2 mx-5 fw-bold my-3"
                      >
                        Offers
                      </Row>
                      <Row className="fs-2 mx-5 fw-bold my-3">
                        BDT: {myShop.offerBDT}
                        <br />
                        Percentage: {myShop.offerPercentage}
                        <br />
                        Till: {myShop.offerTill}
                      </Row>
                    </Col>
                    <br />
                    <Row className="justify-content-center my-3">
                      <Button
                        className="fs-4"
                        variant="contained"
                        size="large"
                        color="error"
                        startIcon={<UpdateOutlinedIcon />}
                        onClick={() => setIsUpdateBtn(true)}
                        sx={{
                          background: "#dc3545",
                          width: "80%",
                        }}
                      >
                        Update
                      </Button>
                    </Row>
                  </Row>
                )}
              </Col>
              <Col sm={1} />
            </Row>
            <br />
            <Row className="p-2">
              <Row>
                <Col sm>
                  {isUpdateBtn ? (
                    <MyShopForm
                      shopInfo={myShop}
                      editBtn={editBtn}
                      userInfoForm={userInfoForm}
                      updatedInformation={updatedInformation}
                    />
                  ) : null}
                </Col>
              </Row>
            </Row>
            {myShop.shopName === "" ? null : (
              <>
                <Row>
                  <Col sm={1} />
                  <Col
                    className="p-4 rounded-3 text-center text-white fs-1 fw-bold "
                    style={{
                      background: "#FFBD2D",
                    }}
                  >
                    Items
                  </Col>
                  <Col sm={1} />
                </Row>
                <br />
                <Row className="p-2">
                  {myShop.id ? <MyShopItems shop={myShop} /> : null}
                </Row>
              </>
            )}
          </Container>
        ))}
    </>
  );
}
