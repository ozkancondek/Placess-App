import React from "react";
import { Route, Routes } from "react-router-dom";
import { Cities } from "../pages/Cities";
import { ClickCity } from "../pages/ClickCity";
import { Forum } from "../pages/Forum";
import { Home } from "../pages/Home";
import { SignIn } from "../pages/Signin";
import { SignUp } from "../pages/SignUp";
import { YourChoices } from "../pages/YourChoices";
import { useOut } from "../providers/MainProvider";
import { Footer } from "./components/footer/Footer";
import { Navi } from "./components/navbar/Navi";

export const Router = () => {
  // const { isAuthenticated } = useOut();
  return (
    <React.Fragment>
      {/* <Navi /> */}

      <Routes>
        <Route path="/" element={<Home />} />
        {/* 
        <Route
          path="/yourchoices"
          element={isAuthenticated ? <YourChoices /> : <SignIn />}
        />
        <Route
          path="/forum"
          element={isAuthenticated ? <Forum /> : <SignIn />}
        />

        <Route path="/:clickcity/:cityid" element={<ClickCity />} />
        <Route path="/cities" element={<Cities />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} /> */}
      </Routes>
      {/* <Footer /> */}
    </React.Fragment>
  );
};
