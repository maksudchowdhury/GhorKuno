import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Container, Row, Col, Figure, ProgressBar } from "react-bootstrap";
import Rating from "@mui/material/Rating";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { styled } from "@mui/material/styles";

import ShopItems from "./ShopItems";

const StyledRating = styled(Rating)({
  "& .MuiRating-iconFilled": {
    color: "#ff3d47",
  },
  "& .MuiRating-iconHover": {
    color: "#ff6d75",
  },
});

export default function IndividualShop() {
  const [shop, setShop] = useState({});
  const { shopName } = useParams();

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/gk/shop/${shopName}/`, {
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
  }, [shopName]);

  return (
    <Container fluid="sm">
      <Row>
        <Col
          sm
          className="shadow-lg p-4 rounded-3 text-center text-white text-wrap fs-1 fw-bold "
          style={{
            background: "#FFBD2D",
          }}
        >
          {shop.shopName}
        </Col>
      </Row>
      <br />
      <Row>
        <Col sm={1} />

        <Col
          sm
          className="shadow-lg p-5 rounded-3"
          style={{
            background: "#FFBD2D",
          }}
        >
          <div
            className="shadow-lg rounded-3 fw-bold text-white text-center fs-2 p-1"
            style={{
              background: "#dc3545",
            }}
          >
            Info
          </div>
          <br />
          <Row className="p-2 text-white fs-4">
            <span>
              Address: <span className="fw-bold">{shop.detailedAddr}</span>
            </span>
          </Row>

          <Row className="p-2 text-white fs-4">
            {shop.review ? (
              <span>
                Rating:{" "}
                <span>
                  <StyledRating
                    size="large"
                    value={shop.review}
                    getLabelText={(value) =>
                      `${value} Heart${value !== 1 ? "s" : ""}`
                    }
                    precision={0.5}
                    icon={<FavoriteIcon fontSize="inherit" />}
                    emptyIcon={<FavoriteBorderIcon fontSize="inherit" />}
                    readOnly
                  />
                </span>
              </span>
            ) : null}
          </Row>
        </Col>

        <Col sm={2} />

        <Col
          sm
          className="shadow-lg p-5 rounded-3"
          style={{
            background: "#FFBD2D",
          }}
        >
          <div
            className="shadow-lg rounded-3 fw-bold text-white text-center fs-2 p-1"
            style={{
              background: "#dc3545",
            }}
          >
            Offers
          </div>
          <br />
          <Row className="p-2 text-white fs-2 ">
            {shop.offerPercentage > 0 ? (
              <p>
                ◻ <strong>{shop.offerPercentage}%</strong> discount{" "}
              </p>
            ) : (
              ""
            )}
            {shop.offerBDT > 0 ? (
              <p>
                ◻ <strong>{shop.offerBDT} BDT</strong> discount{" "}
              </p>
            ) : (
              ""
            )}
            {shop.offerPercentage > 0 || shop.offerBDT > 0 ? (
              <p
                className="shadow rounded-3 text-white text-center p-1 fs-4 my-3"
                style={{
                  background: "#dc3545",
                }}
              >
                Till: <strong> {shop.offerTill}</strong>
              </p>
            ) : (
              <h3 className="text-center">
                Sorry, there is no offer available in this shop
              </h3>
            )}
          </Row>
        </Col>
        <Col sm={1} />
      </Row>
      <br />
      <br />
      <Row>
        <Col
          sm
          className="shadow-lg p-4 rounded-3 text-center text-white text-wrap fs-1 fw-bold "
          style={{
            background: "#FFBD2D",
          }}
        >
          Shop Items
        </Col>
      </Row>
      <Row>
        <br />
      </Row>
      <Row className="p-2">
        <Col sm={12}>{shop.id ? <ShopItems shop={shop} /> : null}</Col>
      </Row>
    </Container>
  );
}
