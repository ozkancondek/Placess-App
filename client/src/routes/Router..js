import React from "react";
import { Route, Routes } from "react-router-dom";
import { Footer } from "../components/Footer";
import { Navigation } from "../components/Navigation";
import { Home } from "../pages/Home";
import { YourChoices } from "../pages/YourChoices";
import { Forum } from "../pages/Forum";
import { Signin } from "../pages/Signin";
import { Signup } from "../pages/Signup";
import { ClickCity } from "../pages/ClickCity";
import { Cities } from "../pages/Cities";
import { useOut } from "../providers/MainProvider";
import { RoutesContainer } from "../styles/ComponentsStyles";
import { About } from "../pages/About";
import { Contact } from "../pages/Contact";

export const Router = () => {
  const { isAuthenticated } = useOut();
  return (
    <React.Fragment>
      <Navigation />
      <RoutesContainer>
        <Routes>
          <Route path="/" element={<Home />} />

          <Route
            path="/yourchoices"
            element={isAuthenticated ? <YourChoices /> : <Signin />}
          />
          <Route
            path="/profile"
            element={isAuthenticated ? <YourChoices /> : <Signin />}
          />
          <Route
            path="/forum"
            element={isAuthenticated ? <Forum /> : <Signin />}
          />

          <Route path="/clickcity/:cityid" element={<ClickCity />} />
          <Route path="/cities" element={<Cities />} />
          <Route path="/about" element={<About />} />
          <Route path="/city/rate" element={<Contact />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
        </Routes>
      </RoutesContainer>

      <Footer />
    </React.Fragment>
  );
};
