import "../styles/Navigation.css";
import {
  Container,
  Form,
  FormControl,
  Nav,
  Navbar,
  Dropdown,
  Button,
} from "react-bootstrap";
import { FaRaspberryPi, FaUserCircle } from "react-icons/fa";
import { BsFillSunFill, BsFillMoonFill } from "react-icons/bs";
//bootstrap style import
import "bootstrap/dist/css/bootstrap.min.css";
import { useLocation, useNavigate } from "react-router-dom";
import { useSearch } from "../providers/SearchProvider";
import { useOut } from "../providers/MainProvider";
import { useTheme } from "../providers/ThemeProvider";

export const Navigation = () => {
  const { setVal } = useSearch();
  const navigate = useNavigate();
  const location = useLocation();
  const { isAuthenticated, setIsAutenticated } = useOut();
  const { checked, setChecked, setTheme, darkTheme, lightTheme } = useTheme();

  const nightMood = () => {
    setChecked(true);
    setTheme(darkTheme);
  };
  const dayMood = () => {
    setChecked(false);
    setTheme(lightTheme);
  };

  //set value of the search input area
  const filterCity = (e) => {
    setVal(e.target.value);
  };

  const signOut = () => {
    localStorage.removeItem("auth_token");
    localStorage.removeItem("username");
    localStorage.removeItem("email");
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
            <Nav.Link className="underline" eventKey="city/rate">
              Rate Us
            </Nav.Link>
            <Nav.Link className="underline" eventKey="about">
              About
            </Nav.Link>
          </Nav>
          <Form
            className="d-flex"
            style={{
              paddingTop: "10px",
              paddingRight: "10px",
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
          <Nav.Link style={{ marginRight: "10px", marginTop: "6px" }}>
            {checked ? (
              <BsFillSunFill size={22} onClick={dayMood} />
            ) : (
              <BsFillMoonFill size={20} onClick={nightMood} />
            )}
          </Nav.Link>
          {!isAuthenticated ? (
            <>
              <Nav.Link
                style={{
                  marginRight: "10px",
                  marginTop: "8px",
                  color: "#99979b",
                }}
                eventKey="signin"
              >
                Sign-in
              </Nav.Link>
              <Nav.Link
                style={{
                  color: "#99979b",
                  border: "1px solid white",
                  padding: "3px",
                  borderRadius: "5px",
                  marginTop: "8px",
                }}
                eventKey="signup"
              >
                Sign-up
              </Nav.Link>
            </>
          ) : (
            <>
              <Nav.Link
                style={{
                  marginRight: "10px",
                  marginTop: "6px",
                }}
                eventKey="profile"
              >
                Hello {localStorage.getItem("username")}!
              </Nav.Link>

              <Dropdown>
                <Dropdown.Toggle
                  variant="secondary"
                  id="dropdown-button-dark-example1"
                  style={{ border: "none", background: "none" }}
                >
                  <FaUserCircle
                    style={{
                      marginLeft: "15px",
                      width: "30px",
                      height: "30px",
                      color: "white",
                    }}
                  />
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  {/*          <Button
                    style={{ border: "none", background: "none" }}
                    variant="light"
                    onClick={() => navigate("/profile")}
                  >
                    Profile
                  </Button>
                  <br /> */}
                  <Button
                    style={{ border: "none", background: "none" }}
                    variant="light"
                    onClick={() => signOut()}
                  >
                    Signout
                  </Button>
                </Dropdown.Menu>
              </Dropdown>
            </>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
