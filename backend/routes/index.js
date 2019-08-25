const app = require("express")();
const jwt = require('express-jwt');

require("dotenv").config();

app.get("/", (req, res) => {
  res.send({
    msg: "Welcome to Blue Blog !"
  })
})

/**
 * * Set authentication before access resource.
 * * And list routes which doesn't need authenticate
 */
app.use(
  jwt({ secret: process.env.SECRET }).unless({
    path: [
      '/',
      '/auth/signup',
      '/auth/login',
    ],
  }),
);

/**
 * * Response when authenticate failed.
 * * When request doesn't have Authorization field in the headers.
 */
app.use((err, req, res, next) => {
  if (err.name === 'UnauthorizedError') {
    res.status(401).send('Missing authentication credentials.');
  }
});

app.use("/auth", require("./auth"));
app.use("/admin", require("./admin/index"));

/**
 * * Response when url doesn't match with any route.
 */
app.all("*", (req, res) => {
  res.status(400).send({
    msg: "Not found"
  })
})

module.exports = app;
