const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const routes = require('./routes/index');

require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

// mount mongodb connection
const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true });
const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB is connected successfully");
})

// mount routes
app.use(routes);

// mount server
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server is running at port: ${port}`);
})
