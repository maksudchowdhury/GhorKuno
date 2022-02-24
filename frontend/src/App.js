import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";

import Home from "./containers/Home";
import HomeWorker from "./containers/HomeWorker";
import UserInfo from "./components/UserInfo";
import NotFoundPage from "./containers/NotFoundPage";

import Login from "./containers/LogInAndSignUp/Login";
import SignUp from "./containers/LogInAndSignUp/SignUp";
import Activate from "./containers/LogInAndSignUp/Activate";
import ResetPassword from "./containers/LogInAndSignUp/ResetPassword";
import ResetPasswordConfirm from "./containers/LogInAndSignUp/ResetPasswordConfirm";

import Layout from "./hocs/Layout";

import { Provider } from "react-redux";
import store from "./store";

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="*" element={<NotFoundPage />} />
            <Route path="/home" element={<Home />} />
            // login signup
            <Route path="/" element={<Login />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/reset-password" element={<ResetPassword />} />
            <Route
              path="/password/reset/confirm/:uid/:token"
              element={<ResetPasswordConfirm />}
            />
            <Route path="/activate/:uid/:token" element={<Activate />} />
            <Route path="/user-info" element={<UserInfo />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
