import React from "react";
import { Route, Routes } from "react-router-dom";

import { Home } from "../pages/Home";

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
