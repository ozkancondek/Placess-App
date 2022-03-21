import React from "react";
import { Link, Typography } from "@mui/material";

export const CopyRight = () => {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
        BlueBerry
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
};
