import React, { useEffect } from "react";
import "../styles/Navigation.css";
import { Container, Form, FormControl, Nav, Navbar } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useLocation, useNavigate } from "react-router-dom";
import { useSearch } from "../providers/SearchProvider";
import { useOut } from "../providers/MainProvider";
import { FaRaspberryPi, FaUserCircle } from "react-icons/fa";
//import { Toggle } from "../toggleButton/Toggle";

export const Navigation = () => {
  const { setVal } = useSearch();
  const navigate = useNavigate();
  const location = useLocation();

  const { isAuthenticated, setIsAutenticated } = useOut();

  const filterCity = (e) => {
    setVal(e.target.value);
  };

  const signOut = () => {
    localStorage.removeItem("auth_token");
    setIsAutenticated(false);
    navigate("/signin");
  };

  return (
    <Navbar
      bg="dark"
      expand="lg"
      variant="dark"
      onSelect={(eventKey) =>
        eventKey === "home" ? navigate("/") : navigate(`/${eventKey}`)
      }
    >
      <Container fluid>
        <Navbar.Brand>
          <Nav.Link eventKey="home" className="underline">
            <FaRaspberryPi
              style={{
                width: "50px",
                height: "50px",
              }}
            />
            BlueBerry
          </Nav.Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />

        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "200px" }}
            navbarScroll
          >
            <Nav.Link className="underline" eventKey="cities">
              Places
            </Nav.Link>
            {isAuthenticated && (
              <Nav.Link className="underline" eventKey="yourchoices">
                Your Choices
              </Nav.Link>
            )}
            {isAuthenticated && (
              <Nav.Link className="underline" eventKey="forum">
                Forum
              </Nav.Link>
            )}

            <Nav.Link className="underline" eventKey="contact">
              Contact
            </Nav.Link>
            <Nav.Link className="underline" eventKey="about">
              About
            </Nav.Link>
          </Nav>
          {/* {navigate("/cities") && (
            <Nav.Link eventKey="contact">Contact</Nav.Link>
          )} */}

          <Form
            className="d-flex"
            style={{
              paddingTop: "20px",
              visibility:
                location.pathname === "/cities" ? "visible" : "hidden",
            }}
          >
            <FormControl
              onChange={filterCity}
              type="search"
              placeholder="Search in places..."
              className="me-2"
              aria-label="Search"
            />
          </Form>

          {/* {isAuthenticated && <Nav.Link eventKey="signup">Signup</Nav.Link>} */}
          {!isAuthenticated ? (
            <>
              <Nav.Link eventKey="signin">Sign-in</Nav.Link>
              <Nav.Link
                style={{ border: "1px solid white", borderRadius: "5px" }}
                eventKey="signup"
              >
                Sign-up
              </Nav.Link>
            </>
          ) : (
            <Nav.Link eventKey="signin" onClick={() => signOut()}>
              Sign-out
              {
                <FaUserCircle
                  style={{
                    marginLeft: "15px",
                    width: "30px",
                    height: "30px",
                    color: "white",
                  }}
                />
              }
            </Nav.Link>
          )}

          <div className="toggleDiv">{/*  <Toggle /> */}</div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
