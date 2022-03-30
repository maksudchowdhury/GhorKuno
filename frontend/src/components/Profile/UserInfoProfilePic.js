import { Container, Row, Col, Figure } from "react-bootstrap";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";

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
      <Row className="justify-content-center">
        <Avatar
          alt="none"
          src={props.userInfo.profile_pic}
          sx={{ width: 280, height: 280 }}
        />
      </Row>
      <Row className="justify-content-center py-2">
        <Button
          variant="contained"
          size="large"
          startIcon={<UpdateOutlinedIcon />}
          onClick={() => editBtn_ProfilePic(props.userInfo)}
          style={{
            width: "40%",
            background: "#dc3545",
          }}
        >
          Update Profile Picture
        </Button>
      </Row>
    </>
  );
}
