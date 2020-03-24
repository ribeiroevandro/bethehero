const express = require("express");
const cors = require("cors");
const routes = require("./routes");

require("dotenv").config();

const port = process.env.PORT || 4000;

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(port, () => {
  console.log("Server Started on port:", port);
});
