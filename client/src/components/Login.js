import React, { useState } from "react";
import { LockOutlined } from "@mui/icons-material";
import {
  Avatar,
  Box,
  Button,
  Container,
  Grid,
  Link,
  TextField,
  Typography,
} from "@mui/material";
import Alert from "@mui/material/Alert";
import { Formik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import { useOut } from "../providers/MainProvider";
import { CopyRight } from "./CopyRight";
import { useApi } from "../providers/ApiProvider";

const signUpValidationSchema = Yup.object().shape({
  email: Yup.string().email("Invalid Email").required("Email is required"),
  password: Yup.string()
    .required("No password provided")
    .min(8, "Password is too short - should be 8 chars minimum")
    .matches(/\d+/, "Password must have a number")
    .matches(/[a-z]+/, "Password must have a lowercase")
    .matches(/[A-Z]+/, "Password must have a uppercase")
    .matches(/[!?.@#$%^&*()-+]+/, "Password must have a special char"),
});

const Login = () => {
  const [loginFail, setLoginFail] = useState("");
  const navigate = useNavigate();
  const { setIsAutenticated, errorMessage } = useOut();
  const { userLogin } = useApi();
  const initialValues = {
    email: "",
    password: "",
  };

  const handleSubmit = (values, { resetForm }) => {
    const authfFunc = async () => {
      let user = {
        email: values.email,
        password: values.password,
      };

      try {
        let res = await userLogin(user);

        localStorage.setItem("auth_token", res.data.token);
        setIsAutenticated(!!localStorage.getItem("auth_token"));
        localStorage.setItem("username", res.data.username);
        localStorage.setItem("email", values.email);
        localStorage.getItem("username");
        navigate("/");
      } catch (error) {
        window.location.reload();
        console.log(error);
      }
    };
    authfFunc();
    resetForm();
  };

  return (
    <Container
      sx={{
        marginTop: "5rem",
        // mt: 6,
        height: "calc(100vh - 3rem)",
        textAlign: "center",
      }}
      maxWidth="sm"
    >
      <Avatar
        sx={{
          margin: "1rem auto",
          bgcolor: "primary.main",
        }}
      >
        <LockOutlined />
      </Avatar>
      <Typography sx={{ margin: "1rem" }} variant="h4">
        Sign In
      </Typography>
      {/* {errorMessage && <Alert severity="error">{errorMessage}</Alert>} */}
      {loginFail && <Alert severity="error">{loginFail}</Alert>}
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={signUpValidationSchema}
      >
        {({
          values,
          handleChange,
          handleSubmit,
          touched,
          errors,
          handleBlur,
        }) => (
          <form onSubmit={handleSubmit}>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <TextField
                  name="email"
                  label="Email"
                  variant="outlined"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  helperText={touched.email && errors.email}
                  error={touched.email && Boolean(errors.email)}
                  fullWidth
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  name="password"
                  label="Password"
                  type="password"
                  value={values.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  helperText={touched.password && errors.password}
                  error={touched.password && Boolean(errors.password)}
                  fullWidth
                />
              </Grid>

              <Grid item xs={12}>
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  fullWidth
                >
                  Sign In
                </Button>
              </Grid>
            </Grid>
          </form>
        )}
      </Formik>
      <p>
        Sign Up with new account
        <Link
          sx={{
            textDecoration: "none",
            fontWeight: "600",
            paddingLeft: "0.5rem",
          }}
          href="/signup"
        >
          Sign up
        </Link>
      </p>
      <Box mt={5}>
        <CopyRight />
      </Box>
    </Container>
  );
};

export default Login;
