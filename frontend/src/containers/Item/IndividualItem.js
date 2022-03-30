import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Container, Row, Col, Figure, ProgressBar } from "react-bootstrap";
import {
  Button,
  CardActionArea,
  CardActions,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

import Rating from "@mui/material/Rating";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import UpdateOutlinedIcon from "@mui/icons-material/UpdateOutlined";
import { styled } from "@mui/material/styles";

import ItemReview from "./ItemReview";

const StyledRating = styled(Rating)({
  "& .MuiRating-iconFilled": {
    color: "#ff3d47",
  },
  "& .MuiRating-iconHover": {
    color: "#ff6d75",
  },
});

export default function IndividualItem() {
  const [item, setItem] = useState([]);
  const { itemName } = useParams();

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/gk/item/${itemName}/`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `JWT ${localStorage.getItem("access")}`,
        Accept: "application/json",
      },
    })
      .then((resp) => resp.json())
      .then((resp) => setItem(resp))
      .catch((error) => console.log(error));
  }, [itemName]);

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
          {item.itemName}
        </Col>
      </Row>
      <br />
      <Row>
        <Grid item xs={3} />
        <Grid item xs={6} className="text-center">
          <Card>
            <CardMedia
              component="img"
              height="500"
              image={item.itemImg}
              alt={item.itemName}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {item.accumulatedRating ? (
                  <span className="fw-bold">
                    <StyledRating
                      size="large"
                      value={item.accumulatedRating}
                      getLabelText={(value) =>
                        `${value} Heart${value !== 1 ? "s" : ""}`
                      }
                      precision={0.5}
                      icon={<FavoriteIcon fontSize="inherit" />}
                      emptyIcon={<FavoriteBorderIcon fontSize="inherit" />}
                      readOnly
                    />
                  </span>
                ) : null}
              </Typography>
              <Typography variant="h5" color="text.primary" className="my-3">
                {item.cost} BDT
              </Typography>
              <Typography variant="body1" color="text.secondary">
                {item.itemDetail}
              </Typography>
            </CardContent>
            <CardActions className=" m-2 justify-content-center">
              <Button
                className="fw-2 text-white"
                variant="contained"
                size="large"
                color="error"
                startIcon={<UpdateOutlinedIcon />}
                style={{
                  background: "#dc3545",
                }}
              >
                Order
              </Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={3} />
      </Row>
      <Row>
        <br />
      </Row>
      <Row>
        <Col
          sm
          className="shadow-lg p-4 rounded-3 text-center text-white text-wrap fs-1 fw-bold "
          style={{
            background: "#FFBD2D",
          }}
        >
          Reviews
        </Col>
      </Row>
      <Row>
        <br />
      </Row>
      <Row className="p-2">
        <Col sm={12}>{item.id ? <ItemReview itemId={item.id} /> : ""}</Col>
      </Row>
    </Container>
  );
}
