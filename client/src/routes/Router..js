import React from "react";
import { Route, Routes } from "react-router-dom";

import { Footer } from "../components/Footer";

import { Navigation } from "../components/Navigation";
import { Pagination } from "../components/Pagination";
import Register from "../components/Register";

import { Home } from "../pages/Home";
import { RoutesContainer } from "../styles/ComponentsStyles";

export const Router = () => {
  // const { isAuthenticated } = useOut();
  return (
    <React.Fragment>
      <Navigation />
      <RoutesContainer>
        <Routes>
          <Route path="/" element={<Home />} />
          {/*       <Route path="/" element={<Error />} /> */}

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
      </RoutesContainer>

      <Footer />
    </React.Fragment>
  );
};
