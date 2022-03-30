import React from "react";
import ApiService from "../../ApiService";

import { Link, useLocation, useNavigate } from "react-router-dom";
import UpdateOutlinedIcon from "@mui/icons-material/UpdateOutlined";
import { Container, Row, Col, Figure, ProgressBar } from "react-bootstrap";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";

import Grid from "@material-ui/core/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";

import Rating from "@mui/material/Rating";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import DeleteForeverOutlinedIcon from "@mui/icons-material/DeleteForeverOutlined";

import { styled } from "@mui/material/styles";

const StyledRating = styled(Rating)({
  "& .MuiRating-iconFilled": {
    color: "#ff3d47",
  },
  "& .MuiRating-iconHover": {
    color: "#ff6d75",
  },
});

function MyShopItemList(props) {
  const navigate = useNavigate();
  const editBtn = (shop) => {
    props.editBtn(shop);
  };

  const editBtnPic = (shop) => {
    props.editBtnPic(shop);
  };

  const deleteBtn = (item) => {
    ApiService.DeleteMyShopItem(item.itemName)
      .then(() => props.deleteBtn(item))
      .catch((error) => console.log(error));
  };

  const shopForm = () => {
    props.itemForm();
  };

  return (
    <>
      <Row>
        <Col sm={1} />
        <Col
          className="p-4 rounded-3 text-center text-white fs-1 fw-bold "
          //   style={{
          //     background: "#dc3545",
          //   }}
        >
          <Grid container spacing={3}>
            {props.items &&
              props.items
                .filter((it) => it.shopID === props.shop.id)
                .map((row) => (
                  <Grid item xs={6} key={row.id}>
                    <Card className="text-center">
                      <CardActionArea
                        onClick={() =>
                          navigate(
                            `/shops/${props.shop.shopName}/${row.itemName}`
                          )
                        }
                      >
                        <CardMedia
                          component="img"
                          height="200"
                          image={row.itemImg}
                          alt={row.itemName}
                        />
                        <CardContent>
                          <Typography gutterBottom variant="h5" component="div">
                            {row.itemName}
                          </Typography>
                          <Typography gutterBottom>
                            {row.accumulatedRating > -2 ? (
                              <span className="fw-bold">
                                <StyledRating
                                  value={row.accumulatedRating}
                                  getLabelText={(value) =>
                                    `${value} Heart${value !== 1 ? "s" : ""}`
                                  }
                                  precision={0.5}
                                  icon={<FavoriteIcon fontSize="inherit" />}
                                  emptyIcon={
                                    <FavoriteBorderIcon fontSize="inherit" />
                                  }
                                  readOnly
                                />
                              </span>
                            ) : null}
                          </Typography>
                          <Typography variant="h6" color="text.primary">
                            {row.cost} BDT
                          </Typography>
                        </CardContent>
                      </CardActionArea>
                      <CardActions className=" m-2 justify-content-center">
                        <Button
                          onClick={() => editBtn(row)}
                          variant="contained"
                          size="large"
                          color="error"
                          startIcon={<UpdateOutlinedIcon />}
                          style={{
                            background: "#dc3545",
                          }}
                        >
                          Update Info
                        </Button>
                        <Button
                          onClick={() => editBtnPic(row)}
                          variant="contained"
                          size="large"
                          color="error"
                          startIcon={<AddPhotoAlternateIcon />}
                          style={{
                            background: "#dc3545",
                          }}
                        >
                          Update Image
                        </Button>
                        <Button
                          variant="contained"
                          size="large"
                          color="error"
                          startIcon={<DeleteForeverOutlinedIcon />}
                          onClick={() => deleteBtn(row)}
                          style={{
                            background: "#dc3545",
                          }}
                        >
                          Delete
                        </Button>
                      </CardActions>
                    </Card>
                  </Grid>
                ))}
          </Grid>
        </Col>
        <Col sm={1} />
      </Row>

      <Row>
        <Col
          sm
          className="p-3 rounded-3 text-center text-white text-wrap fs-1 fw-bold "
        >
          <Button
            className="text-white fw-bold fs-4 my-5"
            variant="outlined"
            size="large"
            color="error"
            startIcon={<AddCircleOutlineOutlinedIcon />}
            style={{
              width: "100%",
              background: "#dc3545",
            }}
            onClick={shopForm}
          >
            Add Item
          </Button>
        </Col>
      </Row>
    </>
  );
}

export default MyShopItemList;
