import React, { Fragment, useState, useEffect } from "react";
import axios from "axios";
import { NavLink, useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import { logout } from "../redux/actions/auth";
import { Navbar, Nav, Image } from "react-bootstrap";
import BrandTitle from "../assets/ghorKuno_title.png";
// import BrandTitle from "../assets/ghorKuno LOGO.png";
import { Button } from "@material-ui/core";
import LogoutIcon from "@material-ui/icons/ExitToApp";

const NavBar = ({ logout, isAuthenticated }) => {
  const [user, setUser] = useState([]);

  const logout_user = () => {
    logout();
  };

  const navLinkStyle = ({ isActive }) => {
    return {
      textDecoration: isActive ? "underline" : "none",
      // border: isActive ? "2px solid #FFBD2D" : " red",
      // borderRadius: isActive ? "20px" : " 0px",
      color: isActive ? "red" : "#FFBD2D",
      // background: isActive ? "#FFBD2D" : "red",
    };
  };

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
      .then((res) => setUser(res.data))
      .catch((error) => console.log(error));
  }, [isAuthenticated]);

  const guestNavLinks = () => (
    <Fragment>
      <Nav.Item>
        <NavLink style={navLinkStyle} className="px-2" to="/login">
          Login
        </NavLink>
      </Nav.Item>
      <Nav.Item>
        <NavLink style={navLinkStyle} className="px-2" to="/signup">
          Sign Up
        </NavLink>
      </Nav.Item>
    </Fragment>
  );

  const authNavLinks = () => (
    <Nav>
      <Nav.Item>
        <NavLink style={navLinkStyle} className="px-2" to="/shops">
          Kitchens
        </NavLink>
      </Nav.Item>
      <Nav.Item>
        <NavLink style={navLinkStyle} className="px-2" to="/contact-us">
          ContactUs
        </NavLink>
      </Nav.Item>
      <Nav.Item>
        {user.is_worker ? (
          <NavLink style={navLinkStyle} className="px-2" to="/user-info">
            WorkerInfo
          </NavLink>
        ) : (
          <NavLink style={navLinkStyle} className="px-2" to="/user-info">
            Profile
          </NavLink>
        )}
      </Nav.Item>

      <Nav.Item>
        <NavLink style={navLinkStyle} className="px-2" to="/myShop">
          MyKitchen
        </NavLink>
      </Nav.Item>

      <Nav.Item className="px-5">
        <NavLink style={navLinkStyle} className="px-2" to="/login">
          <Button
            startIcon={<LogoutIcon />}
            color="secondary"
            variant="contained"
            onClick={logout_user}
          >
            Logout
          </Button>
        </NavLink>
      </Nav.Item>
    </Nav>
  );

  return (
    <Navbar bg="light" variant={"light"} expand="lg">
      <Navbar.Brand className="px-5" href="/home">
        <Image
          width={200}
          height={30}
          alt="GhorKuno"
          src={BrandTitle}
          className="d-inline-block align-top"
        />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav
          variant="pills"
          className="fs-4 fw-bold align-right p-1 justify-content-end"
        >
          <Nav.Item>
            <NavLink to="/home" style={navLinkStyle} className="px-2">
              Home
            </NavLink>
          </Nav.Item>
          {!isAuthenticated ? guestNavLinks() : authNavLinks()}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { logout })(NavBar);
