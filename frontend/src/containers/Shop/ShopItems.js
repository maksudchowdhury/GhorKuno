import { useState, useEffect } from "react";

import { Link, useLocation, useNavigate } from "react-router-dom";

import Grid from "@material-ui/core/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";

import Rating from "@mui/material/Rating";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import UpdateOutlinedIcon from "@mui/icons-material/UpdateOutlined";
import { styled } from "@mui/material/styles";

const StyledRating = styled(Rating)({
  "& .MuiRating-iconFilled": {
    color: "#ff3d47",
  },
  "& .MuiRating-iconHover": {
    color: "#ff6d75",
  },
});

const ShopItems = (props) => {
  const navigate = useNavigate();
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/gk/item/`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `JWT ${localStorage.getItem("access")}`,
        Accept: "application/json",
      },
    })
      .then((resp) => resp.json())
      .then((resp) => setItems(resp))
      .catch((error) => console.log(error));
  }, [props.shopId]);

  items
    .filter((it) => it.shopID === props.shopId)
    .map((filteredPerson) => console.log(filteredPerson.itemName));

  // const routeTo = (itemId) => {
  //   <Link to={`shops/${itemId}`} />;
  // };

  return (
    <Grid container spacing={3}>
      {items
        .filter((it) => it.shopID === props.shop.id)
        .map((row) => (
          <Grid item xs={6} key={row.id}>
            <Card className="text-center">
              <CardActionArea onClick={() => navigate(`${row.itemName}`)}>
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
                    {row.accumulatedRating ? (
                      <span className="fw-bold">
                        <StyledRating
                          value={row.accumulatedRating}
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
                  <Typography variant="h6" color="text.primary">
                    {row.cost} BDT
                  </Typography>
                </CardContent>
              </CardActionArea>
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
        ))}
    </Grid>
  );
};

export default ShopItems;
