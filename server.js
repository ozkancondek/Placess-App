const express = require("express");

const connectDB = require("../models/connectDB");

var cors = require("cors");

require("dotenv").config();

const app = express();

const router = require("./routes/router");

//trigger connect to db function
connectDB();

//mw for req.body
app.use(express.json());

app.use(cors());

app.use("/api", router);

// production
if (process.env.NODE_ENV === "production") {
  //mw for using files in build folder on client side
  app.use(express.static("client/build"));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

app.use(express.static("client/build"));

app.listen(process.env.PORT, () => {
  console.log("I am listening ");
});
