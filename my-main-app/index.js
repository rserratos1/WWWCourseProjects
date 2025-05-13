import express from "express";
import landingPage from "./src/app/landingPage";

// // my-main-app/index.js
// const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

app.use(express.static("public"));

// serve your HTML on /
app.get("/", (req, res) => {
  res.send(landingPage());
});

app.listen(port, () => console.log(`Listening on port ${port}`));
