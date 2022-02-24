import React, { useEffect } from "react";
import { connect } from "react-redux";
import { checkAuthenticated, load_user } from "../redux/actions/auth";
import NavBar from "../components/NavBar";

const Layout = ({ checkAuthenticated, load_user, children }) => {
  useEffect(() => {
    checkAuthenticated();
    load_user();
  }, []);

  return (
    <div>
      <NavBar />
      {children}
    </div>
  );
};

export default connect(null, { checkAuthenticated, load_user })(Layout);
